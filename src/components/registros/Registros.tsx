import { Button } from '@mui/material';
import Link from 'next/link';
import router from 'next/router';
import { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { LoginContext } from '../../context/LoginContext';
import { useRegisterService } from '../../http';
import { Patient } from '../../models/paciente/pacienteModel';
import { Registro, RegistroFromId } from '../../models/registro/registroModel';
import Layout from '../layout/Layout';
import InfoModal from './modal/InfoModal';
import Modal from './modal/Modal';
import * as S from './styles';
import TabelaRegistroFromId from './table/paciente/TabelaRegistroFromId';
import TabelaRegistro from './table/TabelaRegistro';

function Registros() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { token } = useContext(LoginContext);

  const [registro, setRegistro] = useState<Array<Registro>>([]);
  const [registroFromId, setRegistroFromId] = useState<Array<RegistroFromId>>([]);
  const [registroModal, setRegistroModal] = useState<Registro>();
  const registroService = useRegisterService();
  const [novaConsulta, setNovaConsulta] = useState<boolean>(false);

  const [periodo, setPeriodo] = useState('Todo');
  const [categoria, setCategoria] = useState('Todas');
  const [status, setStatus] = useState('Todos');

  const [dataInicio, setDataInicio] = useState<Date>();
  const [dataFim, setDataFim] = useState<Date>();

  const [getConsulta, setConsulta] = useState<boolean>(false);

  useEffect(() => {
    setNovaConsulta(false);
    if (token?.role == 'ADMIN' || token?.role == 'DOCTOR') {
      try {
        registroService
          .getALlRegister()
          .then((data) => {
            setRegistro(data);
          })
          .catch(() => toast.error('Nenhuma consulta cadastrada!'));
      } catch (error) {
        toast.error('Algum erro inesperado aconteceu!');
      }
    } else {
      if (token?.userId !== undefined) {
        registroService.getALlRegisterFromId(token?.userId).then((data) => {
          setRegistroFromId(data);
        });
      }
    }
  }, []);

  useEffect(() => {
    if (token?.role == 'ADMIN' || token?.role == 'DOCTOR') {
      try {
        registroService
          .getALlRegister()
          .then((data) => {
            setRegistro(data);
          })
          .catch(() => toast.error('Nenhuma consulta cadastrada!'));
      } catch (error) {
        toast.error('Algum erro inesperado aconteceu!');
      }
    } else {
      if (token?.userId !== undefined) {
        registroService.getALlRegisterFromId(token?.userId).then((data) => {
          setRegistroFromId(data);
        });
      }
    }
    setNovaConsulta(false);
  }, [novaConsulta]);

  const deletes = (paciente: Patient) => {
    console.log(paciente);
  };

  const edit = (dpaciente: Patient) => {
    router.push(`/medical/pacientes/novo-paciente?id=${dpaciente.id}`);
  };

  const info = (patient: Patient) => {
    setRegistroModal(patient);
    setIsModalOpen(true);

    // router.push(`/medical/pacientes/info?id=${patient.id}`);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const confirmAppointment = (patient: Patient) => {
    if (patient.id) registroService.updatelRegisterFromId(patient.id);
    toast.success('Consulta registrada com sucesso!');
    setNovaConsulta(true);
    setIsModalOpen(false);
  };

  const rejetctAppointment = (patient: Patient) => {
    if (patient.id) registroService.rejectAppointmentRegisterFromId(patient.id);
    setNovaConsulta(true);
    toast('Consulta recusada!', {
      icon: '😔',
    });
    setIsModalOpen(false);
  };

  const handleFilter = () => {
    if (periodo == '1') {
      const dataAtual = new Date();
      const diaSemanaAtual = dataAtual.getDay();
      const ultimoDiaSemanaAnterior = dataAtual.getDate() - diaSemanaAtual - 7;
      const inicioSemanaAnterior = new Date(
        dataAtual.getFullYear(),
        dataAtual.getMonth(),
        ultimoDiaSemanaAnterior,
      );

      setDataInicio(inicioSemanaAnterior);
      setDataFim(new Date());
      setConsulta(true);
    } else if (periodo == '2') {
      console.log('passou');
      const dataAtual = new Date();
      const inicioMes = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 1);
      const ultimoDiaMes = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1, 0);

      setDataInicio(inicioMes);
      setDataFim(ultimoDiaMes);

      setConsulta(true);
      console.log('verificando');
    } else if (periodo == '3') {
      const dataAtual = new Date();
      const inicioAno = new Date(dataAtual.getFullYear(), 0, 1);

      const ultimoDiaAno = new Date(dataAtual.getFullYear(), 11, 31);

      setDataInicio(inicioAno);
      setDataFim(ultimoDiaAno);
      setConsulta(true);
      console.log('verificando');
    } else if (periodo == '4') {
      const dataAtual = new Date();
      const inicioAno = new Date(dataAtual.getFullYear() - 1, 0, 1);

      const ultimoDiaAno = new Date(dataAtual.getFullYear() - 1, 11, 31);

      console.log(inicioAno);
      console.log(ultimoDiaAno);

      setDataInicio(inicioAno);
      setDataFim(ultimoDiaAno);
      setConsulta(true);
      console.log('verificando');
    } else {
      console.log('nada');
    }
  };

  useEffect(() => {
    if (dataInicio && dataFim) {
      console.log(categoria);
      console.log(status);
      console.log(periodo);
      console.log(dataInicio);
      console.log(dataFim);
      setNovaConsulta(false);
    }
  }, [getConsulta]);

  return (
    <Layout title="Painel Administrativo">
      <S.Container>
        <S.NavContainer>
          <h3>Atividades Médicas</h3>

          <div>
            <label htmlFor="periodo">Período:</label>
            <select
              id="periodo"
              name="periodo"
              value={periodo}
              onChange={(e) => setPeriodo(e.target.value)}
            >
              <option value="0">Todo Período</option>
              <option value="1">Esta semana</option>
              <option value="2">Este Mês</option>
              <option value="3">Este ano</option>
              <option value="4">Ano passado</option>
            </select>
          </div>

          <div>
            <label htmlFor="frutas">Categoria:</label>
            <select
              id="categoria"
              name="categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="">Todas</option>
              <option value="EXAME">Exame</option>
              <option value="CONSULTA">Consulta</option>
              <option value="OPERACAO">Operacão</option>
            </select>
          </div>

          <div>
            <label htmlFor="frutas">Status:</label>
            <select
              id="status"
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Todos</option>
              <option value="CONFIRMADO">Confirmado</option>
              <option value="AGUARDANDO">Aguardando</option>
              <option value="REJEITADO">Rejeitado</option>
            </select>
          </div>

          <div>
            <Button
              variant="contained"
              style={{ backgroundColor: '#659e6d' }}
              onClick={handleFilter}
            >
              Filtar
            </Button>
          </div>

          {token?.role !== 'DOCTOR' ? (
            <Link href={'/medical/registros/novo'}>
              <Button variant="contained" style={{ backgroundColor: '#659e6d' }}>
                Novo Registro
              </Button>
            </Link>
          ) : (
            ''
          )}
        </S.NavContainer>

        {token?.role == 'ADMIN' ||
          (token?.role == 'DOCTOR' && (
            <TabelaRegistro registro={registro} onEdit={edit} onDelete={deletes} onInfo={info} />
          ))}

        {token?.role == 'PATIENT' && (
          <TabelaRegistroFromId
            registro={registroFromId}
            onEdit={edit}
            onDelete={deletes}
            onInfo={info}
          />
        )}
      </S.Container>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <InfoModal
            closeModal={handleCloseModal}
            registro={registroModal}
            confirmAppointment={confirmAppointment}
            rejectAppointment={rejetctAppointment}
          />
        </Modal>
      )}
    </Layout>
  );
}

export default Registros;

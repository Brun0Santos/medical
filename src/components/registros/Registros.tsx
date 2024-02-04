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

  return (
    <Layout title="Pacientes">
      <S.Container>
        <S.NavContainer>
          <h3>Atividades</h3>

          <div>
            <Button variant="contained" style={{ backgroundColor: '#659e6d' }}>
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

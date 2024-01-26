import { Button } from '@mui/material';
import Link from 'next/link';
import router from 'next/router';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { useRegisterService } from '../../http';
import { Patient } from '../../models/paciente/pacienteModel';
import { Registro } from '../../models/registro/registroModel';
import Layout from '../layout/Layout';
import InfoModal from './modal/InfoModal';
import Modal from './modal/Modal';
import * as S from './styles';
import TabelaRegistro from './table/TabelaRegistro';

function Registros() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [registro, setRegistro] = useState<Array<Registro>>([]);
  const [registroModal, setRegistroModal] = useState<Registro>();
  const registroService = useRegisterService();

  useEffect(() => {
    try {
      registroService.getALlRegister().then((data) => {
        setRegistro(data);
      });
    } catch (error) {
      toast.error('Algum erro inesperado aconteceu!');
    }
  }, []);

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

  return (
    <Layout title="Pacientes">
      <S.Container>
        <S.NavContainer>
          <h3>Atividades</h3>
          <Link href={'/medical/registros/novo'}>
            <Button variant="contained" style={{ backgroundColor: '#659e6d' }}>
              Novo Registro
            </Button>
          </Link>
        </S.NavContainer>

        <TabelaRegistro registro={registro} onEdit={edit} onDelete={deletes} onInfo={info} />
      </S.Container>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <InfoModal closeModal={handleCloseModal} registro={registroModal} />
        </Modal>
      )}
    </Layout>
  );
}

export default Registros;

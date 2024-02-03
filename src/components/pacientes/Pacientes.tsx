import { Button } from '@mui/material';
import Link from 'next/link';
import router from 'next/router';
import { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { LoginContext } from '../../context/LoginContext';
import { usePatienteService } from '../../http';
import { Patient } from '../../models/paciente/pacienteModel';
import Layout from '../layout/Layout';
import * as S from './styles';
import TablePacientes from './table/TablePacientes';

function Pacientes() {
  const [patients, setPatients] = useState<Array<Patient>>([]);
  const patientService = usePatienteService();
  const { token } = useContext(LoginContext);

  useEffect(() => {
    try {
      patientService
        .getAllPacients('', 0, 7)
        .then((data) => {
          setPatients(data.content);
        })
        .catch(() => toast.error('Nenhum paciente no momento'));
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
    router.push(`/medical/pacientes/info?id=${patient.id}`);
  };

  return (
    <Layout title="Painel Administrativo">
      <S.Container>
        <S.NavContainer>
          <h3>Pacientes</h3>

          {token?.role == 'ADMIN' ? (
            <Link href={'/medical/pacientes/novo-paciente'}>
              <Button variant="contained" style={{ backgroundColor: '#659e6d' }}>
                Novo Paciente
              </Button>
            </Link>
          ) : (
            ''
          )}
        </S.NavContainer>

        <TablePacientes patient={patients} onEdit={edit} onDelete={deletes} onInfo={info} />
      </S.Container>
    </Layout>
  );
}

export default Pacientes;

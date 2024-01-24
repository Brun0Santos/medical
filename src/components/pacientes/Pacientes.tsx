import { Button } from '@mui/material';
import Link from 'next/link';
import router from 'next/router';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { usePatienteService } from '../../http';
import { Patient } from '../../models/paciente/pacienteModel';
import Layout from '../layout/Layout';
import * as S from './styles';
import TablePacientes from './table/TablePacientes';

function Pacientes() {
  const [patients, setPatients] = useState<Array<Patient>>([]);
  const patientService = usePatienteService();

  useEffect(() => {
    try {
      patientService.getAllPacients('', 0, 7).then((data) => {
        setPatients(data.content);
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
    router.push(`/medical/pacientes/info?id=${patient.id}`);
  };

  return (
    <Layout title="Pacientes">
      <S.Container>
        <S.NavContainer>
          <h3>Pacientes</h3>
          <Link href={'/medical/pacientes/novo-paciente'}>
            <Button variant="contained" style={{ backgroundColor: '#659e6d' }}>
              Novo Paciente
            </Button>
          </Link>
        </S.NavContainer>

        <TablePacientes patient={patients} onEdit={edit} onDelete={deletes} onInfo={info} />
      </S.Container>
    </Layout>
  );
}

export default Pacientes;

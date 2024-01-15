'use client';
import { Button } from '@mui/material';
import Link from 'next/link';
import router from 'next/router';

import { Address } from '../../models/endereco/enderecoModel';
import { Patient } from '../../models/paciente/pacienteModel';
import Layout from '../layout/Layout';
import * as S from './styles';
import TablePacientes from './table/TablePacientes';

function Pacientes() {
  const pacienteAddress: Address = {
    city: 'SP',
    complement: 'Rua nova',
    id: '1',
    neighborhood: 'Nova York',
    number: '12A',
    state: 'SP',
    zipCode: '342423',
  };

  const pacienteList: Array<Patient> = [
    {
      id: '1',
      name: 'Felipe',
      contact: '98989898',
      gender: 'MALE',
      email: 'felipe@gmail.com',
      cpf: '9898902839',
      profession: 'P.O',
      medicalInsurance: 'INDIVIDUAL',
      address: pacienteAddress,
    },
  ];

  const deletes = (paciente: Patient) => {
    console.log(paciente);
  };

  const edit = (dpaciente: Patient) => {
    router.push(`/medical/pacientes/novo-paciente?id=${dpaciente.id}`);
  };

  return (
    <Layout title="Especialidades">
      <S.Container>
        <S.NavContainer>
          <div>Pacientes</div>
          <Link href={'/medical/pacientes/novo-paciente'}>
            <Button variant="contained" style={{ backgroundColor: '#659e6d' }}>
              Novo Paciente
            </Button>
          </Link>
        </S.NavContainer>
        <TablePacientes patient={pacienteList} onEdit={edit} onDelete={deletes} />
      </S.Container>
    </Layout>
  );
}

export default Pacientes;

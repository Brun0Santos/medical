import { Button } from '@mui/material';
import Link from 'next/link';
import router from 'next/router';

import { Address } from '../../models/especialidade/enderecoModel';
import { Speciality } from '../../models/especialidade/especialidadeModel';
import { Doctor } from '../../models/especialidade/medicoModel';
import Layout from '../layout/Layout';
import * as S from './styles';
import TableMedico from './table/TableMedico';

function Medicos() {
  const arrayEspecialidade: Array<Speciality> = [
    { id: '1', description: 'Ortopedia muscular', name: 'Ortopedia' },
  ];

  const doctorAddress: Array<Address> = [
    {
      city: 'SP',
      complement: 'Rua nova',
      id: '1',
      neighborhood: 'Nova York',
      number: '12A',
      state: 'SP',
      zipCode: '342423',
    },
  ];

  const doctorArrays: Array<Doctor> = [
    {
      id: '1',
      address: doctorAddress,
      sex: 'MALE',
      name: 'Bruno',
      cpf: '5343443434',
      crm: '4343',
      email: 'bruno@gmail.com',
      contact: '1212121',
      specialities: arrayEspecialidade,
    },

    {
      id: '2',
      address: doctorAddress,
      sex: 'MALE',
      name: 'Lucas',
      cpf: '5343443434',
      crm: '4343',
      email: 'lucas@gmail.com',
      contact: '1212121',
      specialities: arrayEspecialidade,
    },

    {
      id: '3',
      address: doctorAddress,
      sex: 'FEMALE',
      name: 'Leticia',
      cpf: '5343443434',
      crm: '4343',
      email: 'leticia@gmail.com',
      contact: '1212121',
      specialities: arrayEspecialidade,
    },

    {
      id: '4',
      address: doctorAddress,
      sex: 'MALE',
      name: 'Pedro',
      cpf: '5343443434',
      crm: '4343',
      email: 'pedro@gmail.com',
      contact: '1212121',
      specialities: arrayEspecialidade,
    },
  ];

  const deletes = (doctor: Doctor) => {
    console.log(doctor);
  };

  const edit = (doctor: Doctor) => {
    router.push(`/medical/especialidades/nova-especialidade?id=${doctor.id}`);
  };

  return (
    <Layout title="Especialidades">
      <S.Container>
        <S.NavContainer>
          <div>Médicos</div>
          <Link href={'/medical/medicos/novo-medico'}>
            <Button variant="contained" style={{ backgroundColor: '#659e6d' }}>
              Novo Médico
            </Button>
          </Link>
        </S.NavContainer>
        <TableMedico doctor={doctorArrays} onEdit={edit} onDelete={deletes} />
      </S.Container>
    </Layout>
  );
}

export default Medicos;

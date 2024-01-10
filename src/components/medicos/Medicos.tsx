import { Box, Button } from '@mui/material';
import router from 'next/router';

import { Address } from '../../models/especialidade/enderecoModel';
import { Speciality } from '../../models/especialidade/especialidadeModel';
import { Doctor } from '../../models/especialidade/medicoModel';
import Layout from '../layout/Layout';
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
  ];

  const deletes = (doctor: Doctor) => {
    console.log(doctor);
  };

  const edit = (doctor: Doctor) => {
    router.push(`/medical/especialidades/nova-especialidade?id=${doctor.id}`);
  };

  return (
    <Layout title="Especialidades">
      <Box display={'flex'} justifyContent={'space-between'}>
        <div>Médicos</div>
        <Button variant="contained" style={{ backgroundColor: '#659e6d' }}>
          Novo Médico
        </Button>
      </Box>

      <TableMedico doctor={doctorArrays} onEdit={edit} onDelete={deletes} />
    </Layout>
  );
}

export default Medicos;

'use client';
import { Button } from '@mui/material';
import Link from 'next/link';
import router from 'next/router';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { useDoctorService } from '../../http';
import { Doctor } from '../../models/medico/medicoModel';
import Layout from '../layout/Layout';
import * as S from './styles';
import TableMedico from './table/TableMedico';

function Medicos() {
  const service = useDoctorService();
  const [doctors, setDoctors] = useState<Array<Doctor>>([]);

  useEffect(() => {
    try {
      service.getAllDoctors('', 0, 5).then((data) => {
        setDoctors(data.content);
      });
    } catch (error) {
      toast.error('Um erro inesperado aconteceu!');
    }
  }, []);

  const deletes = (doctor: Doctor) => {
    console.log(doctor);
  };

  const infoDoctor = (doctor: Doctor) => {
    router.push(`/medical/medicos/info?id=${doctor.id}`);
  };

  const edit = (doctor: Doctor) => {
    router.push(`/medical/especialidades/nova-especialidade?id=${doctor.id}`);
  };

  return (
    <Layout title="Painel Administrativo">
      <S.Container>
        <S.NavContainer>
          <div>Médicos</div>
          <Link href={'/medical/medicos/novo-medico'}>
            <Button variant="contained" style={{ backgroundColor: '#659e6d' }}>
              Novo Médico
            </Button>
          </Link>
        </S.NavContainer>
        <TableMedico doctor={doctors} onEdit={edit} onDelete={deletes} onInfo={infoDoctor} />
      </S.Container>
    </Layout>
  );
}

export default Medicos;

'use client';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { useSpecialityService } from '../../http/index';
import { Speciality } from '../../models/especialidade/especialidadeModel';
import { Page } from '../commom/pageable/especialidade/Speciality';
import Layout from '../layout/Layout';
import * as S from './styles';
import TableEspecialidade from './table/TableEspecialidade';

function Especialidade() {
  const router = useRouter();

  const [speciality, setSpeciality] = useState<Page<Speciality>>({
    content: [],
    first: 0,
    number: 0,
    size: 0,
    totalElements: 0,
    totalPages: 0,
  });

  const specialityService = useSpecialityService();

  const [page, setPage] = useState<number>(0);

  const deletes = (especialidade: Speciality) => {
    console.log(especialidade);
  };

  const edit = (especialidade: Speciality) => {
    router.push(`/medical/especialidades/nova-especialidade?id=${especialidade.id}`);
  };

  const infoSpeciality = (especialidade: Speciality) => {
    router.push(`/medical/especialidades/info?id=${especialidade.id}`);
    setPage(0);
  };

  useEffect(() => {
    try {
      specialityService.getPageSpeciality('', page, 6).then((res) => {
        setSpeciality(res);
      });
    } catch (error) {
      console.log(error);
    }
  }, [page]);

  return (
    <Layout title="Especialidades">
      <S.Container>
        <S.NavContainer>
          <h4>Especialidades</h4>
          <Link href={'/medical/especialidades/nova-especialidade'}>
            <Button variant="contained" style={{ backgroundColor: '#659e6d' }}>
              Nova Especialidade
            </Button>
          </Link>
        </S.NavContainer>

        <TableEspecialidade
          onEdit={edit}
          onDelete={deletes}
          especialidade={speciality.content}
          onInfo={infoSpeciality}
        ></TableEspecialidade>
      </S.Container>
    </Layout>
  );
}

export default Especialidade;

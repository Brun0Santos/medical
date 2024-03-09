'use client';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { useSpecialityService } from '../../http/index';
import { Speciality } from '../../models/especialidade/especialidadeModel';
import { Page } from '../commom/pageable/especialidade/Speciality';
import Layout from '../layout/Layout';
import * as S from './styles';
import TableEspecialidade from './table/TableEspecialidade';

function Especialidade() {
  const router = useRouter();
  const [consulta, setNovaConsulta] = useState<boolean>(false);

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

  const deletes = async (especialidade: Speciality) => {
    try {
      if (especialidade.id) {
        await toast.promise(specialityService.deleteSpecialityFromId(especialidade.id), {
          loading: 'Deletando especialidade...',
          success: () => 'Especialidade deletada!',
          error: 'Erro ao deletar especialidade!',
        });
        setNovaConsulta(true);
      }
    } catch (error) {
      console.error('Erro:', error);
    }
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
      specialityService
        .getPageSpeciality('', page, 19)
        .then((res) => {
          setSpeciality(res);
        })
        .catch(() => toast.error('Nenhuma especialidade cadastrada!'))
        .catch(() => {});
    } catch (error) {
      console.log(error);
    }
  }, [page, consulta]);

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

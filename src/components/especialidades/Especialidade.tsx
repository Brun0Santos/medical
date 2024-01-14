'use client';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Speciality } from '../../models/especialidade/especialidadeModel';
import Layout from '../layout/Layout';
import * as S from './styles';
import TableEspecialidade from './table/TableEspecialidade';

function Especialidade() {
  const router = useRouter();
  const arrayEspecialidade: Array<Speciality> = [
    { id: '1', description: 'Ortopedia muscular', name: 'Ortopedia' },
    { id: '2', description: 'Ortopedia da perna', name: 'Ortopedia' },
    { id: '3', description: 'Ortopedia do braço', name: 'Ortopedia' },
    { id: '4', description: 'Ortopedia do mão', name: 'Ortopedia' },
    { id: '5', description: 'Ortopedia do joelho', name: 'Ortopedia' },
  ];

  const deletes = (especialidade: Speciality) => {
    console.log(especialidade);
  };

  const edit = (especialidade: Speciality) => {
    router.push(`/medical/especialidades/nova-especialidade?id=${especialidade.id}`);
  };

  return (
    <Layout title="Especialidades">
      <S.Container>
        <S.NavContainer>
          <div>Especialidades</div>
          <Link href={'/medical/especialidades/nova-especialidade'}>
            <Button variant="contained" style={{ backgroundColor: '#659e6d' }}>
              Nova Especialidade
            </Button>
          </Link>
        </S.NavContainer>

        <TableEspecialidade
          onEdit={edit}
          onDelete={deletes}
          especialidade={arrayEspecialidade}
        ></TableEspecialidade>
      </S.Container>
    </Layout>
  );
}

export default Especialidade;

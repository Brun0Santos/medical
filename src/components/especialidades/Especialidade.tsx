import Button from '@mui/material/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Especialidade as EspecialidadeModel } from '../../models/especialidade/especialidadeModel';
import Layout from '../layout/Layout';
import * as S from './styles';
import TableEspecialidade from './table/TableEspecialidade';

function Especialidade() {
  const router = useRouter();
  const arrayEspecialidade: Array<EspecialidadeModel> = [
    { id: '1', descricao: 'Ortopedia muscular', especialidade: 'Ortopedia' },
    { id: '2', descricao: 'Ortopedia da perna', especialidade: 'Ortopedia' },
    { id: '3', descricao: 'Ortopedia do braço', especialidade: 'Ortopedia' },
    { id: '4', descricao: 'Ortopedia do mão', especialidade: 'Ortopedia' },
    { id: '5', descricao: 'Ortopedia do joelho', especialidade: 'Ortopedia' },
  ];

  const deletes = (especialidade: EspecialidadeModel) => {
    console.log(especialidade);
  };

  const edit = (especialidade: EspecialidadeModel) => {
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

import { Button } from '@mui/material';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import Layout from '../../layout/Layout';
import * as S from './styles';

function MedicoForm() {
  const { register, handleSubmit } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmitForm = (data: any) => {
    console.log('teste');
    console.log(data);
  };

  return (
    <Layout title="Painel de Administração">
      <S.Container>
        <S.NavContainer>
          <div>Novo Médico</div>
          <Link href={'/medical/medicos'}>
            <Button variant="contained" style={{ backgroundColor: '#659e6d' }}>
              Cancelar
            </Button>
          </Link>
        </S.NavContainer>

        <S.ContentContainer onSubmit={handleSubmit(handleSubmitForm)}>
          <S.InputBox>
            <S.LabelInput htmlFor="name">Nome:</S.LabelInput>
            <input type="text" id="name" placeholder="Nome do paciente" {...register('name')} />
          </S.InputBox>

          <S.InputBox>
            <S.LabelInput htmlFor="description">Descrição:</S.LabelInput>
            <input
              type="text"
              id="description"
              placeholder="Descrição"
              {...register('description')}
            />
          </S.InputBox>
          <Button
            type="submit"
            variant="contained"
            style={{ backgroundColor: '#4070f4', width: '100px' }}
          >
            Enviar
          </Button>
        </S.ContentContainer>
      </S.Container>
    </Layout>
  );
}

export default MedicoForm;

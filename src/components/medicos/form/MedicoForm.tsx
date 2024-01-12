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
            <S.LabelInput htmlFor="crm">CRM:</S.LabelInput>
            <input type="text" id="crm" placeholder="CRM" {...register('crm')} />
          </S.InputBox>

          <S.InputBox>
            <S.LabelInput htmlFor="contact">Contato:</S.LabelInput>
            <input type="text" id="contact" placeholder="Contato" {...register('contact')} />
          </S.InputBox>

          <S.InputBox>
            <S.LabelInput htmlFor="email">E-mail:</S.LabelInput>
            <input type="email" id="email" placeholder="E-mail" {...register('email')} />
          </S.InputBox>

          <S.InputBox>
            <S.LabelInput htmlFor="cpf">CPF:</S.LabelInput>
            <input type="number" id="cpf" placeholder="CPF" {...register('cpf')} />
          </S.InputBox>

          <div>
            <div>
              <label>Gênero</label>
            </div>
            <label>
              <input type="radio" id="options" value="MALE" {...register('gender')}></input>
              Masculino
            </label>

            <label>
              <input type="radio" id="options" value="FEMALE" {...register('gender')}></input>
              Feminino
            </label>

            <label>
              <input type="radio" id="options" value="OTHER" {...register('gender')}></input>
              Outro
            </label>
          </div>

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

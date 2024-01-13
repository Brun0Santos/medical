/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@mui/material';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

// import { Address } from '../../../models/especialidade/enderecoModel';
import { Doctor } from '../../../../models/especialidade/medicoModel';
import * as S from '../styles';

interface Testes {
  datas: Doctor;
  updateFiledHandler: any;
}

function MedicoFormTeste({ datas, updateFiledHandler }: Testes) {
  const { register, handleSubmit } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmitForm = (data: any) => {
    console.log('teste');
    console.log(data);
  };

  return (
    <S.Container>
      <S.NavContainer>
        <div>Novos Médico</div>
        <Link href={'/medical/medicos'}>
          <Button variant="contained" style={{ backgroundColor: '#659e6d' }}>
            Cancelar
          </Button>
        </Link>
      </S.NavContainer>

      <S.ContentContainer onSubmit={handleSubmit(handleSubmitForm)}>
        <S.InputBox>
          <S.LabelInput htmlFor="name">Nome:</S.LabelInput>
          <input
            type="text"
            id="name"
            {...register('name')}
            placeholder="Nome do paciente"
            value={datas.name}
            onChange={(e) => updateFiledHandler('name', e.target.value)}
          />
        </S.InputBox>

        <S.InputBox>
          <S.LabelInput htmlFor="crm">CRM:</S.LabelInput>
          <input
            type="text"
            id="crm"
            placeholder="CRM"
            {...register('crm')}
            value={datas.crm}
            onChange={(e) => updateFiledHandler('crm', e.target.value)}
          />
        </S.InputBox>

        <S.InputBox>
          <S.LabelInput htmlFor="contact">Contato:</S.LabelInput>
          <input
            type="text"
            id="contact"
            placeholder="Contato"
            {...register('contact')}
            value={datas.contact}
            onChange={(e) => updateFiledHandler('contact', e.target.value)}
          />
        </S.InputBox>

        <S.InputBox>
          <S.LabelInput htmlFor="email">E-mail:</S.LabelInput>
          <input
            type="email"
            id="email"
            placeholder="E-mail"
            {...register('email')}
            value={datas.email}
            onChange={(e) => updateFiledHandler('email', e.target.value)}
          />
        </S.InputBox>

        <S.InputBox>
          <S.LabelInput htmlFor="cpf">CPF:</S.LabelInput>
          <input
            type="number"
            id="cpf"
            placeholder="CPF"
            {...register('cpf')}
            value={datas.cpf}
            onChange={(e) => updateFiledHandler('cpf', e.target.value)}
          />
        </S.InputBox>

        <div>
          <div>
            <label>Gênero</label>
          </div>
          <label>
            <input
              type="radio"
              id="options"
              {...register('gender')}
              value={datas.gender}
              onChange={(e) => updateFiledHandler('gender', e.target.value)}
            />
            Masculino
          </label>

          <label>
            <input
              type="radio"
              id="options"
              {...register('gender')}
              value={datas.gender}
              onChange={(e) => updateFiledHandler('gender', e.target.value)}
            />
            Feminino
          </label>

          <label>
            <input
              type="radio"
              id="options"
              {...register('gender')}
              value={datas.gender}
              onChange={(e) => updateFiledHandler('gender', e.target.value)}
            />
            Outro
          </label>
        </div>
        {/* 
        <Button
          type="submit"
          variant="contained"
          style={{ backgroundColor: '#4070f4', width: '100px' }}
        >
          Enviar
        </Button> */}
      </S.ContentContainer>
    </S.Container>
  );
}

export default MedicoFormTeste;

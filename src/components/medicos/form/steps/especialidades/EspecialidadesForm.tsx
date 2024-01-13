/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@mui/material';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import * as S from '../../styles';

interface Testes {
  datas: any;
  updateFiledHandler: any;
}

export default function EspecialidadesForm({ datas, updateFiledHandler }: Testes) {
  const { register, handleSubmit } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmitForm = (data: any) => {
    console.log('teste');
    console.log(data);
  };

  return (
    <S.Container>
      <S.NavContainer>
        <h3>Especialidade</h3>
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
          <S.LabelInput htmlFor="crm">Descricao:</S.LabelInput>
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
          <S.LabelInput htmlFor="contact">Doutor:</S.LabelInput>
          <input
            type="text"
            id="contact"
            placeholder="Contato"
            {...register('contact')}
            value={datas.contact}
            onChange={(e) => updateFiledHandler('contact', e.target.value)}
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
  );
}

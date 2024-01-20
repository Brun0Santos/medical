/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@mui/material';
import Link from 'next/link';

import Gender from '../../../commom/Gender';
import * as S from './styles';

interface Testes {
  datas: any;
  updateFiledHandler: (fieldName: string, value: string) => void;
}

function MedicoFormTeste({ datas, updateFiledHandler }: Testes) {
  return (
    <S.Container>
      <S.NavContainer>
        <h3>Novos Médico</h3>
        <Link href={'/medical/pacientes'}>
          <Button variant="contained" style={{ backgroundColor: '#659e6d' }}>
            Cancelar
          </Button>
        </Link>
      </S.NavContainer>

      <S.ContentContainer>
        <S.InputBox>
          <S.LabelInput htmlFor="name">Nome:</S.LabelInput>
          <input
            type="text"
            id="name"
            placeholder="Nome do paciente"
            value={datas.name}
            onChange={(e) => updateFiledHandler('name', e.target.value)}
          />
        </S.InputBox>

        <S.CentroContainer>
          <S.InputBox>
            <S.LabelInput htmlFor="crm">CRM:</S.LabelInput>
            <input
              type="text"
              id="crm"
              placeholder="CRM"
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
              value={datas.contact}
              onChange={(e) => updateFiledHandler('contact', e.target.value)}
            />
          </S.InputBox>
        </S.CentroContainer>

        <S.CentroContainer>
          <S.InputBox>
            <S.LabelInput htmlFor="email">E-mail:</S.LabelInput>
            <input
              type="text"
              id="email"
              placeholder="E-mail"
              value={datas.email}
              onChange={(e) => updateFiledHandler('email', e.target.value)}
            />
          </S.InputBox>

          <S.InputBox>
            <S.LabelInput htmlFor="cpf">CPF:</S.LabelInput>
            <input
              type="text"
              id="cpf"
              placeholder="CPF"
              value={datas.cpf}
              onChange={(e) => updateFiledHandler('cpf', e.target.value)}
            />
          </S.InputBox>
        </S.CentroContainer>

        <Gender
          label="Gênero"
          options={[
            { label: 'Masculino', value: 'MALE' },
            { label: 'Feminino', value: 'FEMALE' },
            { label: 'Outro', value: 'OTHER' },
          ]}
          selectedValue={datas.gender}
          onChange={(value) => updateFiledHandler('gender', value)}
        />
      </S.ContentContainer>
    </S.Container>
  );
}

export default MedicoFormTeste;

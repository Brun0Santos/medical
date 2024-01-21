/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@mui/material';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';

import { Patient } from '../../../../models/paciente/pacienteModel';
import SelectOptions from '../../../commom/select/paciente/SelectOptions';
import Gender from '../../../medicos/commom/Gender';
import * as S from './styles';

interface Testes {
  data: Patient;
  updateFiledHandler: (fieldName: string, value: string) => void;
}

function PacienteForm({ data, updateFiledHandler }: Testes) {
  const [, setSelectedOption] = useState<string>('NENHUM');

  const options = [
    { value: 'NENHUM', label: 'Nenhum' },
    { value: 'INDIVIDUAL', label: 'Individual' },
    { value: 'FAMILIAR', label: 'Familiar' },
    { value: 'COLETIVO', label: 'Coletivo' },
    { value: 'EMPRESARIAL', label: 'Empresarial' },
  ];

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    updateFiledHandler('medicalInsurance', event.target.value);
  };

  return (
    <S.Container>
      <S.NavContainer>
        <h2>Novo Paciente</h2>
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
            value={data.name}
            onChange={(e) => updateFiledHandler('name', e.target.value)}
          />
        </S.InputBox>

        <S.CentroContainer>
          <S.InputBox>
            <S.LabelInput htmlFor="contact">Contato:</S.LabelInput>
            <input
              type="text"
              id="contact"
              placeholder="Contato"
              value={data.contact}
              onChange={(e) => updateFiledHandler('contact', e.target.value)}
            />
          </S.InputBox>

          <S.InputBox>
            <S.LabelInput htmlFor="email">Email:</S.LabelInput>
            <input
              type="text"
              id="email"
              placeholder="Contato"
              value={data.email}
              onChange={(e) => updateFiledHandler('email', e.target.value)}
            />
          </S.InputBox>
        </S.CentroContainer>

        <S.CentroContainer>
          <S.InputBox>
            <S.LabelInput htmlFor="cpf">CPF:</S.LabelInput>
            <input
              type="text"
              id="cpf"
              placeholder="CPF"
              value={data.cpf}
              onChange={(e) => updateFiledHandler('cpf', e.target.value)}
            />
          </S.InputBox>

          <S.InputBox>
            <S.LabelInput htmlFor="profession">Profissão:</S.LabelInput>
            <input
              type="text"
              id="profession"
              placeholder="Profissão"
              value={data.profession}
              onChange={(e) => updateFiledHandler('profession', e.target.value)}
            />
          </S.InputBox>
        </S.CentroContainer>

        <S.SelectContainer>
          <label>Plano de saúde</label>
          <SelectOptions
            options={options}
            value={String(data?.medicalInsurance)}
            onChange={handleSelectChange}
          />
        </S.SelectContainer>

        <Gender
          label="Gênero"
          options={[
            { label: 'Masculino', value: 'MALE' },
            { label: 'Feminino', value: 'FEMALE' },
            { label: 'Outro', value: 'OTHER' },
          ]}
          selectedValue={data.gender}
          onChange={(value) => updateFiledHandler('gender', value)}
        />
      </S.ContentContainer>
    </S.Container>
  );
}

export default PacienteForm;

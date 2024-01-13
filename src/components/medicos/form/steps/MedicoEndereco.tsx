/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@mui/material';
import Link from 'next/link';

import * as S from '../styles';

interface Testes {
  datas: any;
  updateFiledHandler: any;
}

function MedicoFormContato({ datas, updateFiledHandler }: Testes) {
  return (
    <S.Container>
      <S.NavContainer>
        <div>Endereço</div>
        <Link href={'/medical/medicos'}>
          <Button variant="contained" style={{ backgroundColor: '#659e6d' }}>
            Cancelar
          </Button>
        </Link>
      </S.NavContainer>

      <S.ContentContainer>
        <S.InputBox>
          <S.LabelInput htmlFor="zipCode">CEP:</S.LabelInput>
          <input
            type="text"
            id="zipCode"
            value={datas.zipCode}
            placeholder="CEP do paciente"
            onChange={(e) => updateFiledHandler('zipCode', e.target.value)}
          />
        </S.InputBox>

        <S.InputBox>
          <S.LabelInput htmlFor="crm">Número:</S.LabelInput>
          <input
            type="text"
            id="number"
            placeholder="Número"
            value={datas.number}
            onChange={(e) => updateFiledHandler('number', e.target.value)}
          />
        </S.InputBox>

        <S.InputBox>
          <S.LabelInput htmlFor="contact">Complemento:</S.LabelInput>
          <input
            type="text"
            id="complement"
            placeholder="Complemento"
            value={datas.complement}
            onChange={(e) => updateFiledHandler('complement', e.target.value)}
          />
        </S.InputBox>

        <S.InputBox>
          <S.LabelInput htmlFor="email">Bairro:</S.LabelInput>
          <input
            type="email"
            id="neighborhood"
            placeholder="Bairro"
            value={datas.neighborhood}
            onChange={(e) => updateFiledHandler('neighborhood', e.target.value)}
            disabled
          />
        </S.InputBox>

        <S.InputBox>
          <S.LabelInput htmlFor="cpf">Cidade:</S.LabelInput>
          <input
            type="number"
            id="city"
            placeholder="Cidade"
            value={datas.city}
            onChange={(e) => updateFiledHandler('city', e.target.value)}
            disabled
          />
        </S.InputBox>

        <S.InputBox>
          <S.LabelInput htmlFor="cpf">Estado:</S.LabelInput>
          <input
            type="number"
            id="state"
            placeholder="Estado"
            value={datas.state}
            onChange={(e) => updateFiledHandler('state', e.target.value)}
            disabled
          />
        </S.InputBox>
      </S.ContentContainer>
    </S.Container>
  );
}

export default MedicoFormContato;

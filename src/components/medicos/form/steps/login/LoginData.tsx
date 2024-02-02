/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@mui/material';
import Link from 'next/link';

import { LoginData as login } from '../../../../../models/login/loginModel';
import * as S from './styles';

interface Testes {
  data: login;
  updateFiledHandler: (fieldName: string, value: string) => void;
}

function LoginData({ data, updateFiledHandler }: Testes) {
  return (
    <S.Container>
      <S.NavContainer>
        <h3>Novos Médico</h3>
        <Link href={'/medical/medicos'}>
          <Button variant="contained" style={{ backgroundColor: '#659e6d' }}>
            Cancelar
          </Button>
        </Link>
      </S.NavContainer>

      <S.ContentContainer>
        <S.CentroContainer>
          <S.InputBox>
            <S.LabelInput htmlFor="login">Login:</S.LabelInput>
            <input
              type="text"
              id="login"
              placeholder="Nome para login"
              value={data?.login}
              onChange={(e) => updateFiledHandler('login', e.target.value)}
            />
          </S.InputBox>

          <S.InputBox>
            <S.LabelInput htmlFor="password">Senha:</S.LabelInput>
            <input
              type="password"
              id="password"
              placeholder="Senha"
              value={data?.password}
              onChange={(e) => updateFiledHandler('password', e.target.value)}
            />
          </S.InputBox>
        </S.CentroContainer>
      </S.ContentContainer>
    </S.Container>
  );
}

export default LoginData;

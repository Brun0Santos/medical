'use client';
import Link from 'next/link';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { ImFacebook2 } from 'react-icons/im';

import Inputlogin from './InputLogin';
import * as S from './styles';

function FormLogin() {
  return (
    <S.Container>
      <S.FormInput>
        <S.TitleForm>
          <S.TitleWith>M</S.TitleWith>
          <S.Title>edical</S.Title>
        </S.TitleForm>
        <div>
          <S.HeaderForm>Bem Vindo</S.HeaderForm>

          <S.FormContainer>
            <Inputlogin />

            {/* <div className="field button-field">
              <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <TbSend style={{ marginRight: '8px' }} />
                Enviar
              </button>
            </div> */}

            <S.LinkForm>
              <span>
                Tem uma conta?&nbsp;
                <Link href={'/medical/sign-up'}>Faça login agora</Link>
              </span>
            </S.LinkForm>
          </S.FormContainer>
        </div>
        <S.Line></S.Line>

        <S.LinkSocialMedia>
          <S.LinkGoogle href="#">
            <i>
              <FcGoogle />
            </i>
            <span>Login com Google</span>
          </S.LinkGoogle>
        </S.LinkSocialMedia>

        <S.LinkSocialMedia>
          <S.LinkGithub href="#">
            <i>
              <ImFacebook2 />
            </i>
            <span>Login com Facebook</span>
          </S.LinkGithub>
        </S.LinkSocialMedia>
      </S.FormInput>
    </S.Container>
  );
}

export default FormLogin;

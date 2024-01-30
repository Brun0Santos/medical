import Link from 'next/link';
import React from 'react';
import { BsFillTelephoneForwardFill } from 'react-icons/bs';
import {
  FaCheckCircle,
  FaEnvelope,
  FaLock,
  FaPlusCircle,
  FaRegAddressCard,
  FaUser,
} from 'react-icons/fa';
import { FaPersonCircleCheck } from 'react-icons/fa6';
import { MdOutlinePersonPin } from 'react-icons/md';
import { TbSend } from 'react-icons/tb';
import styled from 'styled-components';

import * as S from './styles';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`;

const InputContainer = styled.div`
  position: relative;
  width: 80%;

  &:focus-within {
    svg {
      color: #9ee4b9;
    }
  }
`;

const InputContainer2 = styled.div`
  position: relative;
  width: 100%;

  &:focus-within {
    svg {
      color: #9ee4b9;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 10px 10px 34px;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px solid #d3d3d3;
  outline: none;
  font-size: 14px;

  &:focus {
    border: 2px solid #95bda9;
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  color: #000;
`;

const Signup = () => {
  return (
    <S.Container>
      <S.FormInput>
        <div className="form-content">
          <S.HeaderForm>Crie sua conta</S.HeaderForm>

          <S.FormContainer>
            <Inputs />

            <div className="field button-field">
              <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <TbSend style={{ marginRight: '8px' }} />
                Enviar
              </button>
            </div>

            <S.LinkForm>
              <span>
                Tem uma conta?&nbsp;
                <Link href={'/medical/sign-in'} className="signup-link">
                  Faça login agora
                </Link>
              </span>
            </S.LinkForm>
          </S.FormContainer>
        </div>

        <S.Line></S.Line>
      </S.FormInput>
    </S.Container>
  );
};

export default Signup;

const Inputs = () => {
  return (
    <FormContainer>
      <Row>
        <InputContainer>
          <Icon>
            <FaUser />
          </Icon>
          <Input type="text" placeholder="Nome" />
        </InputContainer>

        <InputContainer>
          <Icon>
            <FaEnvelope />
          </Icon>
          <Input type="text" placeholder="Email" />
        </InputContainer>
      </Row>

      <Row>
        <InputContainer>
          <Icon>
            <FaCheckCircle />
          </Icon>
          <Input type="text" placeholder="Login" />
        </InputContainer>

        <InputContainer>
          <Icon>
            <FaLock />
          </Icon>
          <Input type="text" placeholder="Password" />
        </InputContainer>
      </Row>

      <Row>
        <InputContainer>
          <Icon>
            <BsFillTelephoneForwardFill />
          </Icon>
          <Input type="text" placeholder="Contatos" />
        </InputContainer>

        <InputContainer>
          <Icon>
            <FaRegAddressCard />
          </Icon>
          <Input type="tel" placeholder="CPF" />
        </InputContainer>
      </Row>

      <Row>
        <InputContainer>
          <Icon>
            <FaPersonCircleCheck />
          </Icon>
          <Input type="text" placeholder="Profissão" />
        </InputContainer>

        <InputContainer>
          <Icon>
            <FaPlusCircle />
          </Icon>
          <Input type="tel" placeholder="Plano de Saúde" />
        </InputContainer>
      </Row>

      <Row>
        <InputContainer2>
          <Icon>
            <MdOutlinePersonPin />
          </Icon>
          <Input type="tel" placeholder="Gênero" />
        </InputContainer2>
      </Row>
    </FormContainer>
  );
};

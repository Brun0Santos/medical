'use client';

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: #ffffff;
`;

export const FormInput = styled.div`
  max-width: 50rem;
  width: 100%;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const HeaderForm = styled.header`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

export const FormContainer = styled.form`
  margin-top: 40px;

  .field {
    height: 45px;
    width: 100%;
    margin-top: 30px;

    button {
      height: 100%;
      width: 100%;
      border: none;
      font-size: 18px;
      font-weight: 400;
      border-radius: 7px;

      color: #fff;
      background-color: #499265;
      transition: all 0.3 ease;
      cursor: pointer;

      &:hover {
        background-color: #61a37d;
      }
    }
  }
`;

export const LinkForm = styled.div`
  text-align: center;
  margin-top: 13px;

  > span,
  a {
    font-size: 16px;
    font-weight: 400;
  }

  a {
    color: #0171d3;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Line = styled.div`
  position: relative;
  height: 1px;
  width: 100%;
  margin: 35px 0;
  background-color: #d4d4d4;
`;

export const DivTeste = styled.div`
  display: flex;
  justify-content: space-between;
`;

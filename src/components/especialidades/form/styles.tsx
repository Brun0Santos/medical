'use client';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
`;

export const ContentContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 14px;

  input {
    height: 50px;
    margin-bottom: 20px;
    padding: 0 15px;
    border: 1px solid #ccc;
    transition: border-color 0.3s ease-in-out;
    outline: none;
    border-radius: 5px;
    margin-bottom: 0px;
  }

  .input-error {
    outline: 1px solid rgb(255, 72, 72);
  }
`;

export const LabelInput = styled.label`
  padding-bottom: 4px;
`;

export const ErrorMessage = styled.span`
  color: rgb(255, 72, 72);
  font-size: 0.8rem;
  padding-top: 1px;
`;

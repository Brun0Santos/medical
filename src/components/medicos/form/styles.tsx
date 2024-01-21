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

export const ContentContainer = styled.div`
  display: flex;
  padding: 0px 30px;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 40px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  input {
    height: 50px;
    margin-bottom: 20px;
    padding: 0 15px;
    border: 1px solid #ccc;
    transition: border-color 0.3s ease-in-out;
    outline: none;
    border-radius: 3px;
  }

  :focus {
    border-color: #1976d2;
  }
`;

export const LabelInput = styled.label`
  padding-bottom: 4px;
`;

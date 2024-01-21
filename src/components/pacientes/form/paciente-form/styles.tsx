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

  input {
    height: 50px;
    margin-bottom: 20px;
    padding: 0 15px;
    border: 1px solid #a5a5a5;
    transition: border-color 0.3s ease-in-out;
    outline: none;
    border-radius: 3px;
  }

  :focus {
    /* border-color: #1976d2; */
    border-color: green;
    background: #fafafa;
  }
`;

export const LabelInput = styled.label`
  padding-bottom: 4px;
`;

export const CentroContainer = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;

  input {
    width: 500px;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  label {
    /* margin-right: 7px; */
    margin: 0 7px 5px 0;
    font-size: 17px;
    border-radius: 4px;
  }

  select {
    border-radius: 4px;
    font-size: 15px;
    width: 100%;
    height: 35px;
    padding: 4px;
  }

  :focus {
    border: 1px solid green;
  }
`;

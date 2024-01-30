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
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;

export const FormContainer = styled.div`
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

export const LinkSocialMedia = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border-radius: 6px;
    margin-bottom: 20px;
    height: 40px;
    cursor: pointer;

    i {
      font-size: 22px;
      margin-right: 5px;
      padding-top: 7px;
    }
  }
`;

export const LinkGoogle = styled.a`
  color: #232836;
  height: 40px;
  width: 100%;
  border: 1px solid #cacaca;

  > span {
    font-weight: 500;
  }
`;

export const LinkGithub = styled.a`
  color: #fff;
  height: 40px;
  width: 100%;
  background-color: #016dcb;

  > span {
    font-weight: 400;
  }
`;

export const TitleForm = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-bottom: 13px;
`;
export const TitleWith = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 43px;
  height: 43px;
  color: green;
  font-size: 31px;
  font-weight: bold;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.span`
  margin-left: 5px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainers = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;
`;

export const InputContainer2 = styled.div`
  position: relative;
  width: 100%;

  &:focus-within {
    svg {
      color: #9ee4b9;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 10px 10px 34px;
  box-sizing: border-box;
  border-radius: 6px;
  border: 1px solid #d3d3d3;
  outline: none;
  font-size: 14px;

  &:focus {
    border: 2px solid #8ebda5;
  }

  .input-error {
    outline: 1px solid rgb(255, 72, 72);
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 53%;
  transform: translateY(-50%);
  left: 10px;
  color: #000;
`;

export const ErrorMessage = styled.span`
  color: rgb(255, 72, 72);
  font-size: 0.8rem;
  padding-top: 1px;
`;

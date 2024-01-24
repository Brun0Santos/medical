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

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 100px;
  border: 1px solid #d8d8d8;
  border-radius: 6px;
  margin: 0 40px;
`;

export const DivTeste = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  padding: 10px 100px;
  border: 1px solid #d8d8d8;
  border-radius: 6px;
  margin: 0 40px;

  svg {
    margin-right: 7px;
    fill: green;
    font-size: 20px;
  }
`;

export const EmailContainer = styled.div`
  margin: 18px 40px 0px;
  display: flex;
  justify-content: space-between;
  padding: 10px 100px;
  border: 1px solid #d8d8d8;
  border-radius: 6px;
  margin: 10 40px;
`;

export const Email = styled.div`
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #d8d8d8;
  border-radius: 6px;
`;

import styled from 'styled-components';

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  margin-top: 5px;

  ul {
    list-style: none;
  }

  svg {
    display: flex;
    font-size: 23px;
    text-align: center;
    justify-content: center;
    margin-right: 10px;
    border-radius: 7px;
    fill: #0088fe;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 70px;
  height: 26rem;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 43px;
`;

export const LiContainer = styled.li`
  display: flex;
  text-align: center;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  font-weight: 500;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
`;

export const Span = styled.span`
  margin-left: 6px;
`;

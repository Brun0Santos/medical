import styled from 'styled-components';

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  margin-top: 5px;
  padding-right: 110px;

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
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
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

'use client';
import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`;

export const MenuInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 190px;
  background: linear-gradient(to right, #3d3d3d, #575757);
  padding: 20px;
`;

export const Title = styled.div`
  color: #fff;
  font-size: 20px;
`;

export const MenuNavbar = styled.ul`
  display: flex;
  align-items: start;
  justify-content: end;
  list-style: none;
  display: flex;

  li {
    margin: 0 10px;
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
`;

export const NameText = styled.div`
  margin-right: 56px;
  color: #fff;
  cursor: pointer;
`;

export const NavImage = styled.span`
  display: flex;
  min-width: 55px;
  justify-content: center;

  img {
    height: 39px;
    width: 37px;
    border-radius: 50%;
    border: 1px solid green;
    object-fit: cover;
  }
`;

export const OverlayContainer = styled.div`
  position: absolute;
  padding: 20px;
  top: 10%;
  left: 25%;
  right: 25%;
  width: 60%;
  height: auto;
  background-color: white;
  z-index: 2;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const DropDownMenu = styled.div`
  width: 130px;
  height: 400px;
  color: #fff;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid #fff;
  padding: 4px;
  position: fixed;

  li {
    list-style: none;

    &:hover {
      color: #23a9f9;
    }
  }
`;

export const NumeroNotificacao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 21px;
  width: 21px;
  border-radius: 50%;
  background: #ed5564;
  font-size: 20px;
  color: #fff;
  font-size: 12px;

  position: absolute;
  top: -5px;
  right: -5px;
`;

export const ContainerNotificacao = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 22px;
  cursor: pointer;

  &:hover {
    > svg {
      fill: #000;
    }
  }
`;

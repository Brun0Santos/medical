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
  background-color: #9e9a9a;
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
    /* 
    &:hover {
      border-bottom: 3px solid #ffff;
    } */
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
    height: 35px;
    width: 35px;
    border-radius: 50%;
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

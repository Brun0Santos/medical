'use client';
import styled from 'styled-components';

export const ContentContainer = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export const MenuInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 0 0 30px;
  background-color: #4070f4;
  height: 247px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Title = styled.div`
  color: #fff;
  font-size: 20px;
`;

export const MenuNavbar = styled.ul`
  display: flex;
  align-items: start;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;

  li {
    margin: 0 10px;

    &:hover {
      border-bottom: 3px solid #ffff;
    }
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
`;

export const NameText = styled.div`
  margin-right: 30px;
  color: #fff;
`;

export const Content = styled.div`
  margin-top: 150px;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  padding: 20px;
  background-color: white;
  width: 90%;
  height: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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

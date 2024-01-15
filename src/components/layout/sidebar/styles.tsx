'use client';
import styled from 'styled-components';

export const SidebarMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 278px;
  background: #fff;
  padding: 15px 10px;
  border: 1px solid rgba(219, 219, 219, 0.933);
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 44px;
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

export const LogoName = styled.span`
  font-size: 22px;
  color: #333;
  font-weight: 500px;
  transition: all 0.3s ease;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

export const MenuTitle = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 55px;

  .title {
    margin-left: 15px;
    color: #000;
    font-size: 20px;
    transition: all 0.3s ease;
  }

  .line {
    opacity: 0;
  }
`;

export const LiContainer = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  border-radius: 8px;
  margin-bottom: 8px;
  color: #707070;
  width: 100%;

  cursor: pointer;

  &:hover {
    color: #fff;
    /* background-color: #4070f4; */
    background-color: #0c0b1a;
  }

  span {
    white-space: nowrap;
  }

  i {
    height: 50px;
    min-width: 55px;
    display: flex;
    font-size: 22px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
  }
`;

export const AccountContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 15px;
  margin-top: 15px;
  gap: 15px;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
`;

export const AccountImg = styled.span`
  display: flex;
  min-width: 55px;
  justify-content: center;

  img {
    height: 35px;
    width: 35px;
    border-radius: 50%;
  }
`;

export const DataText = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  color: #fff;
  cursor: pointer;

  .name {
    font-size: 18px;
    color: #333;
  }

  .email {
    font-size: 15px;
    color: #333;
  }
`;

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

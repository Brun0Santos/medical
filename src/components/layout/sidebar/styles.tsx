'use client';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fffe;
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const SidebarMenu = styled.nav`
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
  justify-content: space-between;
  margin-top: 40px;
`;

export const MenuTitle = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 55px;

  .title {
    margin-left: 15px;
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

  &:hover {
    color: #fff;
    background-color: #4070f4;
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
  margin-right: 30px;
  color: #fff;

  .name {
    font-size: 18px;
    color: #333;
  }

  .email {
    font-size: 15px;
    color: #333;
  }
`;

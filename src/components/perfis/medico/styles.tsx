'use client';
import styled from 'styled-components';

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
  /* color: #707070; */
  color: #000;
  width: 100%;

  cursor: pointer;

  &:hover {
    color: #000;
    /* background-color: #4070f4; */
    background-color: #cce6da;
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

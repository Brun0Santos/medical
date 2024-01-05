'use client';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fffe;
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const ContentContainer = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
  overflow: hidden;
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

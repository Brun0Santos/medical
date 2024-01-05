import React from 'react';

import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';
import * as S from './styles.layout';

interface LayoutProps {
  children?: React.ReactNode;
  title: string;
}

function Layout({ children, title }: LayoutProps) {
  return (
    <S.Container>
      <Sidebar></Sidebar>
      <Navbar title={title}>{children}</Navbar>
    </S.Container>
  );
}

export default Layout;

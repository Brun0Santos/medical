'use client';
import Image from 'next/image';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoNotificationsSharp } from 'react-icons/io5';

import Logo from '../../../../public/d.jpg';
import MenuDropDown from '../dropdown/menu/MenuDropDown';
import NotificacaoDropDown from '../dropdown/notificacao/NotificacaoDropDown';
import * as S from './styles';

interface Title {
  title: string;
  children?: React.ReactNode;
}

function Navbar({ title, children }: Title) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openNotification, setOpenNotification] = useState<boolean>(false);

  return (
    <S.ContentContainer>
      <S.MenuInfoContainer>
        <S.Title>{title}</S.Title>

        <S.MenuNavbar>
          <div style={{ display: 'flex' }} onClick={() => setOpenNotification(!openNotification)}>
            <S.ContainerNotificacao>
              <IoNotificationsSharp style={{ fontSize: '27px', color: '#fff' }} />
              <S.NumeroNotificacao>4</S.NumeroNotificacao>
              {openNotification && <NotificacaoDropDown />}
            </S.ContainerNotificacao>
          </div>

          <S.NavImage>
            <Image src={Logo} alt="Minha Imagem" width={300} height={300} />
          </S.NavImage>

          <S.NameText onClick={() => setOpenMenu(!openMenu)}>
            <h4>Bruno</h4>
            <div style={{ fontSize: '12px' }}>
              Administrador
              <IoIosArrowDown style={{ marginLeft: '10px', fontSize: '15px' }} />
              {openMenu && <MenuDropDown />}
            </div>
          </S.NameText>
        </S.MenuNavbar>
      </S.MenuInfoContainer>

      <S.OverlayContainer>{children}</S.OverlayContainer>
    </S.ContentContainer>
  );
}

export default Navbar;

'use client';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoNotificationsSharp } from 'react-icons/io5';

import Logo from '../../../../public/d.jpg';
import { LoginContext } from '../../../context/LoginContext';
import { useFileService } from '../../../http';
import { AvatarDoctor } from '../../../models/avatar/avatarModel';
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
  const { token } = useContext(LoginContext);
  const service = useFileService();
  const [registrosPorDoutor, setRegistroPorDoutor] = useState<AvatarDoctor>();

  useEffect(() => {
    if (token?.userId) {
      service.avatarFromDoutor(token.userId).then((data) => {
        setRegistroPorDoutor(data);
      });
    }
  }, [token]);

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
            <Image
              src={'data:image;base64, ' + registrosPorDoutor?.file}
              alt="Minha Imagem"
              width={300}
              height={300}
            />
          </S.NavImage>

          <S.NameText onClick={() => setOpenMenu(!openMenu)}>
            <h4>
              {token?.login !== undefined
                ? token.login.charAt(0).toUpperCase() + token.login.slice(1)
                : ''}
            </h4>
            <div style={{ fontSize: '12px' }}>
              {token?.role == 'ADMIN' && <span className="email">Administrador</span>}
              {token?.role == 'PATIENT' && <span className="email">Paciente</span>}
              {token?.role == 'DOCTOR' && <span className="email">Médico</span>}
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

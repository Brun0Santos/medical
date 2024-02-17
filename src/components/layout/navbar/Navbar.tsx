'use client';
import axios from 'axios';
import jwt, { JwtPayload } from 'jsonwebtoken';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoNotificationsSharp } from 'react-icons/io5';

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
  const service = useFileService();
  const [registrosPorDoutor, setRegistroPorDoutor] = useState<AvatarDoctor>();
  const [userId, setUserId] = useState<string>();
  const [tokens, setTokens] = useState<string>();
  const [login, setLogin] = useState<string>();
  const [role, setRole] = useState<string>();

  const { setToken } = useContext(LoginContext);

  const decodeToken = (token: string | null): JwtPayload | null => {
    try {
      if (!token) {
        throw new Error('Token não fornecido');
      }

      const decoded = jwt.decode(token);

      if (!decoded || typeof decoded === 'string') {
        throw new Error('Token inválido');
      }

      return decoded as JwtPayload;
    } catch (error) {
      console.error('Erro ao decodificar o token:', error);
      return null;
    }
  };

  useEffect(() => {
    if (userId) {
      service
        .avatarFromDoutor(userId)
        .then((data) => {
          setRegistroPorDoutor(data);
        })
        .catch(() => {});
    }
  }, [tokens]);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
      setTokens(storedToken);
      const decodedToken = decodeToken(storedToken);

      setUserId(decodedToken?.userId);
      setLogin(decodedToken?.sub);
      setRole(decodedToken?.role);

      setToken({
        userId: decodedToken?.userId,
        login: decodedToken?.login,
        email: decodedToken?.email,
        token: decodedToken?.token,
        role: decodedToken?.role,
      });

      axios.defaults.headers.common['Authorization'] = 'Bearer ' + storedToken;
    }
  }, []);

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
              src={registrosPorDoutor?.file ? `data:image;base64,${registrosPorDoutor.file}` : ''}
              alt="Minha Imagem"
              width={300}
              height={300}
              decoding="async"
            />
          </S.NavImage>

          <S.NameText onClick={() => setOpenMenu(!openMenu)}>
            <h4>{login !== undefined ? login.charAt(0).toUpperCase() + login.slice(1) : ''}</h4>
            <div style={{ fontSize: '12px' }}>
              {role == 'ADMIN' && <span className="email">Administrador</span>}
              {role == 'PATIENT' && <span className="email">Paciente</span>}
              {role == 'DOCTOR' && <span className="email">Médico</span>}
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

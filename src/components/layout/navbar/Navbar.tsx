'use client';
import axios from 'axios';
import jwt, { JwtPayload } from 'jsonwebtoken';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
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
  const [countMessage, setCountMessage] = useState<number>(0);

  const { setToken } = useContext(LoginContext);
  const [timeAgo, setTimeAgo] = useState<number>();
  const [nowNotification, setNowNotification] = useState<Date>(new Date());

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
        login: decodedToken?.sub ? decodedToken?.sub : '',
        email: decodedToken?.email,
        token: decodedToken?.token,
        role: decodedToken?.role,
      });

      axios.defaults.headers.common['Authorization'] = 'Bearer ' + storedToken;
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();

      const timeDifference = (currentTime.getTime() - nowNotification.getTime()) / 1000;

      setTimeAgo(timeDifference);
    }, 1000); // Atualiza a cada segundo

    return () => clearInterval(interval);
  });

  const [, setMessage] = useState('');

  useEffect(() => {
    const eventSource = new EventSource(`http://localhost:8080/sse/subscribe/${'1'}`);

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data);
      setMessage(data.message);
      console.log(countMessage);
      toast('Novo registro feito pelo paciente!', {
        icon: '👀',
      });

      setCountMessage((prevCount) => prevCount + 1);

      setNowNotification(new Date());
    };

    return () => {
      eventSource.close();
      // userId
    };
  }, []);

  const cleanNotifications = () => {
    setCountMessage(0);
  };

  return (
    <S.ContentContainer>
      <S.MenuInfoContainer>
        <S.Title>{title}</S.Title>

        <S.MenuNavbar>
          <div style={{ display: 'flex' }} onClick={() => setOpenNotification(!openNotification)}>
            <S.ContainerNotificacao>
              <IoNotificationsSharp style={{ fontSize: '27px', color: '#fff' }} />
              <S.NumeroNotificacao>{countMessage}</S.NumeroNotificacao>
              {openNotification && (
                <NotificacaoDropDown
                  count={countMessage}
                  cleanNotifications={cleanNotifications}
                  timeNotification={timeAgo ? timeAgo : 0}
                />
              )}
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
              {role == 'ADMIN' && <span className="email">Administradores</span>}
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

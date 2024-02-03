'use client';
import axios from 'axios';
import Cookies from 'js-cookie';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { HiOutlineUser } from 'react-icons/hi2';
import { IoCalendarNumberOutline, IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineLogout } from 'react-icons/md';

import * as S from './styles';

function MenuDropDown() {
  const disconect = () => {
    delete axios.defaults.headers.common['Authorization'];
    Cookies.remove('token');
    toast('Desconectado!', {
      icon: '👏',
    });
  };

  return (
    <S.MenuContainer>
      <ul>
        <Link href={'/medical/perfil'} legacyBehavior>
          <S.LiInfo>
            <S.NavImage>
              <i>
                <HiOutlineUser style={{ fontSize: '17px' }} />
              </i>
            </S.NavImage>
            <S.LiTitle>Perfil</S.LiTitle>
          </S.LiInfo>
        </Link>
        <S.LiInfo>
          <S.NavImage>
            <i>
              <IoCalendarNumberOutline style={{ fontSize: '17px' }} />
            </i>
          </S.NavImage>
          <S.LiTitle>Calendário</S.LiTitle>
        </S.LiInfo>

        <S.LiInfo>
          <S.NavImage>
            <i>
              <IoSettingsOutline style={{ fontSize: '17px' }} />
            </i>
          </S.NavImage>
          <S.LiTitle>Settings</S.LiTitle>
        </S.LiInfo>

        <Link href={'/medical/sign-in'} legacyBehavior>
          <S.LiInfo>
            <S.NavImage>
              <i>
                <MdOutlineLogout style={{ fontSize: '17px' }} />
              </i>
            </S.NavImage>
            <S.LiTitle onClick={disconect}>Logout</S.LiTitle>
          </S.LiInfo>
        </Link>
      </ul>
    </S.MenuContainer>
  );
}

export default MenuDropDown;

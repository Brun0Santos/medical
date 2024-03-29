'use client';
import { HiOutlineUser } from 'react-icons/hi2';
import { IoCalendarNumberOutline, IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineLogout } from 'react-icons/md';

import * as S from './styles';

function MenuDropDown() {
  return (
    <S.MenuContainer>
      <ul>
        <S.LiInfo>
          <S.NavImage>
            <i>
              <HiOutlineUser style={{ fontSize: '17px' }} />
            </i>
          </S.NavImage>
          <S.LiTitle>Perfil</S.LiTitle>
        </S.LiInfo>

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

        <S.LiInfo>
          <S.NavImage>
            <i>
              <MdOutlineLogout style={{ fontSize: '17px' }} />
            </i>
          </S.NavImage>
          <S.LiTitle>Logout</S.LiTitle>
        </S.LiInfo>
      </ul>
    </S.MenuContainer>
  );
}

export default MenuDropDown;

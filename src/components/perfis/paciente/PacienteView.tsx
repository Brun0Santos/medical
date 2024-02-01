import Link from 'next/link';
import React from 'react';
import { IoCalendarNumberOutline, IoSettingsOutline } from 'react-icons/io5';
import { MdOutlinePrivacyTip } from 'react-icons/md';
import { RxDashboard } from 'react-icons/rx';
import { RxCalendar } from 'react-icons/rx';

import * as S from './styles';

function PacienteView() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <S.MenuContainer>
        <ul>
          <S.MenuTitle>
            <span className="title">Gerenciamento</span>
            <span className="line"></span>
          </S.MenuTitle>

          <S.LiContainer>
            <Link href={'/medical/home'} legacyBehavior>
              <S.Link>
                <i>
                  <RxDashboard />
                </i>
                <span>Home</span>
              </S.Link>
            </Link>
          </S.LiContainer>
        </ul>

        <ul>
          <S.LiContainer>
            <S.Link href="/medical/registros">
              <i>
                <IoCalendarNumberOutline />
              </i>
              <span>Consultas Médicas</span>
            </S.Link>
          </S.LiContainer>
        </ul>

        <ul>
          <S.MenuTitle>
            <div className="menu_title flex">
              <span className="title">Relatórios</span>
              <span className="line"></span>
            </div>
          </S.MenuTitle>

          <S.LiContainer>
            <S.Link href="/medical/frequencia">
              <i>
                <RxCalendar />
              </i>
              <span>Frequência de consultas</span>
            </S.Link>
          </S.LiContainer>
        </ul>

        <ul>
          <S.MenuTitle>
            <div className="menu_title flex">
              <span className="title">Configurações</span>
              <span className="line"></span>
            </div>
          </S.MenuTitle>

          <S.LiContainer>
            <S.Link href="/medical/minha-conta">
              <i className="bx bx-award">
                <IoSettingsOutline />
              </i>
              <span>Minha Conta</span>
            </S.Link>
          </S.LiContainer>

          <S.LiContainer>
            <S.Link href="#">
              <i className="bx bx-award">
                <MdOutlinePrivacyTip />
              </i>
              <span>Políticas de Privacidade</span>
            </S.Link>
          </S.LiContainer>
        </ul>
      </S.MenuContainer>
    </div>
  );
}

export default PacienteView;

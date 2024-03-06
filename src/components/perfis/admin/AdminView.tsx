import Link from 'next/link';
import React from 'react';
import { BsGraphUpArrow } from 'react-icons/bs';
import { FaUserDoctor } from 'react-icons/fa6';
import { FaUsers } from 'react-icons/fa6';
import { FiGitBranch } from 'react-icons/fi';
import { IoCalendarNumberOutline, IoSettingsOutline } from 'react-icons/io5';
import { MdOutlinePrivacyTip } from 'react-icons/md';
import { RxDashboard } from 'react-icons/rx';
import { RxCalendar } from 'react-icons/rx';

import * as S from './styles';

function AdminView() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <S.MenuContainer>
        <ul>
          <S.MenuTitle>
            <span className="titles">Gerenciamentos</span>
            <span className="line"></span>
          </S.MenuTitle>

          <S.LiContainer>
            <Link href={'/medical/homeS'} legacyBehavior>
              <S.Link>
                <i>
                  <RxDashboard />
                </i>
                <span>Dashboard</span>
              </S.Link>
            </Link>
          </S.LiContainer>

          <S.LiContainer>
            <Link href={'/medical/especialidades'} legacyBehavior>
              <S.Link>
                <i>
                  <FiGitBranch />
                </i>
                <span>Especialidades</span>
              </S.Link>
            </Link>
          </S.LiContainer>
        </ul>

        <ul>
          <S.LiContainer>
            <Link href={'/medical/medicos'} legacyBehavior>
              <S.Link>
                <i>
                  <FaUserDoctor />
                </i>
                <span>Médicos</span>
              </S.Link>
            </Link>
          </S.LiContainer>

          <S.LiContainer>
            <Link href={'/medical/pacientes'} legacyBehavior>
              <S.Link>
                <i>
                  <FaUsers />
                </i>
                <span>Pacientes</span>
              </S.Link>
            </Link>
          </S.LiContainer>

          <S.LiContainer>
            <Link href={'/medical/registros'} legacyBehavior>
              <S.Link>
                <i>
                  <IoCalendarNumberOutline />
                </i>
                <span>Consultas Médicas</span>
              </S.Link>
            </Link>
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

          <S.LiContainer>
            <S.Link href="#">
              <i className="bx bx-award">
                <BsGraphUpArrow />
              </i>
              <span>Médicos mais ativos</span>
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

export default AdminView;

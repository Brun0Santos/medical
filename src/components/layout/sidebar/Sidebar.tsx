'use client';
import Image from 'next/image';
import React from 'react';
import { BsGraphUpArrow } from 'react-icons/bs';
import { FaUserDoctor } from 'react-icons/fa6';
import { FaUsers } from 'react-icons/fa6';
import { FiGitBranch } from 'react-icons/fi';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { RxDashboard } from 'react-icons/rx';
import { RxCalendar } from 'react-icons/rx';

import Logo from '../../../../public/d.jpg';
import * as S from './styles';

function Sidebar() {
  return (
    <>
      <S.SidebarMenu>
        <S.LogoContainer>
          <S.NavImage>
            <Image src={Logo} alt="Minha Imagem" width={300} height={300} />
          </S.NavImage>
          <S.LogoName>Brunos Medical</S.LogoName>
        </S.LogoContainer>

        <S.MenuContainer>
          <ul>
            <S.MenuTitle>
              <span className="title">Gerenciamento</span>
              <span className="line"></span>
            </S.MenuTitle>

            <S.LiContainer>
              <S.Link href="/medical/home">
                <i>
                  <RxDashboard />
                </i>
                <span>Dashboard</span>
              </S.Link>
            </S.LiContainer>

            <S.LiContainer>
              <S.Link href="/medical/especialidades">
                <i>
                  <FiGitBranch />
                </i>
                <span>Especialidades</span>
              </S.Link>
            </S.LiContainer>
          </ul>

          <ul>
            <S.LiContainer>
              <S.Link href="/medical/medicos">
                <i>
                  <FaUserDoctor />
                </i>
                <span>Médicos</span>
              </S.Link>
            </S.LiContainer>

            <S.LiContainer>
              <S.Link href="/medical/pacientes">
                <i>
                  <FaUsers />
                </i>
                <span>Pacientes</span>
              </S.Link>
            </S.LiContainer>

            <S.LiContainer>
              <S.Link href="#">
                <i>
                  <IoCalendarNumberOutline />
                </i>
                <span>Consultas Médicas </span>
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
              <S.Link href="#">
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
        </S.MenuContainer>

        <S.AccountContainer>
          <S.AccountImg>
            <Image src={Logo} alt="Minha Imagem" width={300} height={300} />
          </S.AccountImg>
          <S.DataText>
            <span className="name">Bruno</span>
            <span className="email">bruno@gmail.com</span>
          </S.DataText>
        </S.AccountContainer>
      </S.SidebarMenu>
    </>
  );
}

export default Sidebar;

import Image from 'next/image';
import React from 'react';

import * as S from './styles';

function Sidebar() {
  return (
    <S.Container>
      <S.SidebarMenu>
        <nav className="sidebar">
          <S.LogoContainer>
            <S.NavImage>
              <img src="../../../../public/d.jpg" alt="logo_img" />
            </S.NavImage>
            <S.LogoName>Brunos Medical</S.LogoName>
          </S.LogoContainer>

          <S.MenuContainer>
            <div>
              <ul>
                <S.MenuTitle>
                  <span className="title">Gerenciamento</span>
                  <span className="line"></span>
                </S.MenuTitle>

                <S.LiContainer>
                  <a href="#" className="link">
                    <i className="bx bx-home-alt"></i>
                    <span>Dashboard</span>
                  </a>
                </S.LiContainer>

                <S.LiContainer>
                  <a href="#" className="link">
                    <i className="bx bx-grid-alt"></i>
                    <span>Especialidades</span>
                  </a>
                </S.LiContainer>
              </ul>

              <ul>
                <S.LiContainer>
                  <a href="#" className="link flex">
                    <i className="bx bxs-magic-wand"></i>
                    <span>Médicos</span>
                  </a>
                </S.LiContainer>

                <S.LiContainer>
                  <a href="#" className="link">
                    <i className="bx bx-folder"></i>
                    <span>Pacientes</span>
                  </a>
                </S.LiContainer>

                <S.LiContainer>
                  <a href="#" className="link flex">
                    <i className="bx bx-cloud-upload"></i>
                    <span>Consultas Médicas </span>
                  </a>
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
                  <a href="#" className="link flex">
                    <i className="bx bx-flag"></i>
                    <span>Frequência de consultas</span>
                  </a>
                </S.LiContainer>

                <S.LiContainer>
                  <a href="#" className="link flex">
                    <i className="bx bx-award"></i>
                    <span>Médicos mais ativos</span>
                  </a>
                </S.LiContainer>
              </ul>
            </div>

            <S.AccountContainer>
              <S.AccountImg>
                <Image src="/public/d.jpg" width={500} height={500} alt="logo_img" />
              </S.AccountImg>
              <S.DataText>
                <span className="name">Bruno</span>
                <span className="email">bruno@gmail.com</span>
              </S.DataText>
            </S.AccountContainer>
          </S.MenuContainer>
        </nav>
      </S.SidebarMenu>
    </S.Container>
  );
}

export default Sidebar;

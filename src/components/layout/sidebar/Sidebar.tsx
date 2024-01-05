import Image from 'next/image';
import React from 'react';

import * as S from './styles';

function Sidebar() {
  return (
    <S.Container>
      <S.SidebarMenu>
        <S.LogoContainer>
          <S.NavImage>
            <Image src={'/public/d.jpg'} alt="Minha Imagem" width={300} height={300} />
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
              <S.Link href="#">
                <i className="bx bx-home-alt"></i>
                <span>Dashboard</span>
              </S.Link>
            </S.LiContainer>

            <S.LiContainer>
              <S.Link href="#">
                <i className="bx bx-grid-alt"></i>
                <span>Especialidades</span>
              </S.Link>
            </S.LiContainer>
          </ul>

          <ul>
            <S.LiContainer>
              <S.Link href="#">
                <i className="bx bxs-magic-wand"></i>
                <span>Médicos</span>
              </S.Link>
            </S.LiContainer>

            <S.LiContainer>
              <S.Link href="#">
                <i className="bx bx-folder"></i>
                <span>Pacientes</span>
              </S.Link>
            </S.LiContainer>

            <S.LiContainer>
              <S.Link href="#">
                <i className="bx bx-cloud-upload"></i>
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
                <i className="bx bx-flag"></i>
                <span>Frequência de consultas</span>
              </S.Link>
            </S.LiContainer>

            <S.LiContainer>
              <S.Link href="#">
                <i className="bx bx-award"></i>
                <span>Médicos mais ativos</span>
              </S.Link>
            </S.LiContainer>
          </ul>

          <S.AccountContainer>
            <S.AccountImg>
              <Image src={'/public/d.jpg'} alt="Logo" width={300} height={300} />
            </S.AccountImg>
            <S.DataText>
              <span className="name">Bruno</span>
              <span className="email">bruno@gmail.com</span>
            </S.DataText>
          </S.AccountContainer>
        </S.MenuContainer>
      </S.SidebarMenu>

      <S.ContentContainer>
        <S.MenuInfoContainer>
          <S.Title>
            <div className="titulo">Painel Administrativo</div>
          </S.Title>

          <S.MenuNavbar>
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Serviços</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>

            <div>
              <S.NavImage>
                <Image src={'/public/d.jpg'} alt="Minha Imagem" width={300} height={300} />
              </S.NavImage>
            </div>

            <S.NameText>
              <span>Bruno</span>
            </S.NameText>
          </S.MenuNavbar>

          <S.Content>
            <div className="conteudo">
              <p>Teste</p>
            </div>
          </S.Content>
        </S.MenuInfoContainer>
      </S.ContentContainer>
    </S.Container>
  );
}

export default Sidebar;

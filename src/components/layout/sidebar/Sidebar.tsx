import Image from 'next/image';
import React from 'react';

import Logo from '../../../../public/d.jpg';
import AdminView from '../../perfis/admin/AdminView';
import * as S from './styles';

function Sidebar() {
  return (
    <>
      <S.SidebarMenu>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <S.LogoContainer>
            <S.NavImage>
              <Image src={Logo} alt="Minha Imagem" width={300} height={300} />
            </S.NavImage>

            <S.LogoName>Brunos Medical</S.LogoName>
          </S.LogoContainer>

          <AdminView />
        </div>

        <S.AccountContainer>
          <S.AccountImg>
            <Image src={Logo} alt="Minha Imagem" width={300} height={300} />
          </S.AccountImg>
          <S.DataText>
            <span className="name">Bruno</span>
            <span className="email">Administrador</span>
          </S.DataText>
        </S.AccountContainer>
      </S.SidebarMenu>
    </>
  );
}

export default Sidebar;

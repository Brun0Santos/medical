import Image from 'next/image';
import React, { useContext } from 'react';

import Logo from '../../../../public/d.jpg';
import { LoginContext } from '../../../context/LoginContext';
import AdminView from '../../perfis/admin/AdminView';
import MedicoView from '../../perfis/medico/MedicoView';
import PacienteView from '../../perfis/paciente/PacienteView';
import * as S from './styles';

function Sidebar() {
  const { token } = useContext(LoginContext);

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

          {token?.role == 'ADMIN' && <AdminView />}
          {token?.role == 'PATIENT' && <PacienteView />}
          {token?.role == 'DOCTOR' && <MedicoView />}
        </div>

        <S.AccountContainer>
          <S.AccountImg>
            <Image src={Logo} alt="Minha Imagem" width={300} height={300} />
          </S.AccountImg>
          <S.DataText>
            <span className="name">{token?.login}</span>
            {token?.role == 'ADMIN' && <span className="email">Administrador</span>}
            {token?.role == 'PATIENT' && <span className="email">Paciente</span>}
            {token?.role == 'DOCTOR' && <span className="email">Médico</span>}
          </S.DataText>
        </S.AccountContainer>
      </S.SidebarMenu>
    </>
  );
}

export default Sidebar;

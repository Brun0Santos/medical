import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 181px;
  height: 260px;
  border-radius: 10px;
  position: fixed;
  color: #000000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background: #fff;
  padding-right: 11px;
`;

export const NavImage = styled.span`
  display: flex;
  min-width: 30px;
  justify-content: center;
  align-items: center;
  height: 37px;
  width: 37px;
  border-radius: 50%;
  background-color: #f1f1f1;
  box-shadow: 0 0 10px rgba(0, 0, 1, 0.2);

  i {
    font-size: 17px;
  }
`;

export const LiTitle = styled.span`
  color: #000;
  margin-left: 14px;
  font-size: 14px;
  font-weight: 300;
`;

export const LiInfo = styled.li`
  display: flex;
  align-items: center;
  padding: 13px 6px 5px;
  width: 100%;

  &:hover {
    ${NavImage} {
      background-color: #5584fc; /* Cor azul para o círculo */

      i {
        color: white; /* Cor branca para o ícone dentro do círculo */
      }
    }

    ${LiTitle} {
      color: #5584fc; /* Cor azul para o texto */
    }
  }
`;

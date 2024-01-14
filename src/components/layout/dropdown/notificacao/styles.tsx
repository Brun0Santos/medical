import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 248px;
  height: 390px;
  border-radius: 10px;
  position: fixed;
  color: #000000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background: #fff;
  padding-right: 11px;
  margin-top: 11px;
  z-index: 8;
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
  font-size: 14px;
  font-weight: 300;
`;

export const SmsContainer = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-left: 14px;
`;

export const Sms = styled.span`
  color: #555555;
  font-size: 12px;
  font-weight: 300;
`;

export const LiInfo = styled.li`
  display: flex;
  align-items: center;
  padding: 13px 6px 5px;
  width: 100%;
  cursor: pointer;

  &:hover {
    ${NavImage} {
      background-color: #5584fc;

      i {
        color: white;
      }
    }

    ${LiTitle} {
      color: #5584fc;
    }

    ${Sms} {
      color: #5584fc;
    }
  }
`;

export const ButtonContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;

export const SmsTitle = styled.span`
  display: flex;
  justify-content: space-between;
  padding: 14px;
  font-weight: 400;

  span {
    color: red;
    font-size: 14px;
    font-weight: 300;
    cursor: pointer;
  }
`;

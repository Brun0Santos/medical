import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
`;

export const ModalWrapper = styled.div`
  background-color: #ffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  z-index: 1001;
  width: 35rem;
`;

export const TitleModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconModal = styled.div`
  font-size: 26px;
  cursor: pointer;
`;

export const InfoModal = styled.div`
  margin-top: 27px;
  padding-left: 10px;
`;

export const ContentModal = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    font-weight: 500;
    font-size: 19px;
  }

  span {
    font-size: 14px;
    margin-top: 1px;
  }

  svg {
    margin-left: 4px;
    font-size: 16px;
  }
`;

export const ContentButtonModal = styled.div`
  display: flex;

  div {
    cursor: pointer;
    margin-top: 13px;
    padding: 10px;
    border: 1px solid #e0e0e0ec;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 1, 0, 0.1);
  }
`;

export const ButtonConfirmar = styled.div`
  display: flex;
  margin-right: 13px;
  color: green;

  &:hover {
    background-color: #f6f6f6;
  }
`;
export const ButtonRejeitar = styled.div`
  display: flex;
  color: red;

  &:hover {
    background-color: #f6f6f6;
  }
`;

export const StatusContainer = styled.span`
  border-radius: 7px;
  padding: 3px;
  background: #e9e9e9;
  box-shadow: 0 0 10px rgba(1, 1, 0, 0.1);
  width: 120px;
`;

export const InfoContainer = styled.span`
  color: #fff;
  background: #4764e9;
  border-radius: 7px;
  padding: 3px;
  width: 120px;
`;

export const TitleContainer = styled.span`
  color: #fff;
  background: #4764e9;
  border-radius: 7px;
  padding: 3px;
  width: 120px;
`;

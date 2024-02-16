import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .slow {
    &:hover {
      background-color: #f9f9f9;
      border: 0 solid #f9f9f9;
      box-shadow: 0 0 10px rgba(0, 1, 0, 0.2);
    }
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
`;

export const CalendarContainer = styled.div`
  border-radius: 4px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  box-shadow: 0 0 10px rgba(0, 1, 0, 0.1);
  border-radius: 6px;

  .rbc-event {
    background-color: green;
    font-weight: 200;
    font-size: 14px;
  }

  .rbc-day-bg {
    &:hover {
      background-color: #f3f3f3;
    }
  }
`;

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

export const StatusContainer = styled.span`
  border-radius: 7px;
  padding: 3px;
  background: #e9e9e9;
  box-shadow: 0 0 10px rgba(1, 1, 0, 0.1);
  width: 120px;
`;

export const InfoContainer = styled.div`
  color: #fff;
  background: #4764e9;
  border-radius: 7px;
  padding: 3px 5px;
`;

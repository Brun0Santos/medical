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

export const DivSelect = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LabelSelect = styled.label`
  font-weight: 500;
  margin-bottom: 4px;
`;

export const Select = styled.select`
  border-radius: 5px;
  padding-left: 4px;
  font-size: 15px;
  width: 180px;
  height: 30px;

  &:focus {
    border: 2px solid green;
  }
`;

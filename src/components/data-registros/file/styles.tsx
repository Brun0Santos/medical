import styled from 'styled-components';

export const AnexoFile = styled.div`
  width: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 1, 0, 0.2);
  cursor: pointer;
  border-radius: 5px;

  svg {
    font-size: 30px;
  }

  button {
    border: none;
    cursor: pointer;
  }

  span {
    font-size: 15px;
  }
`;

export const Icon = styled.div`
  padding-top: 4px;
`;

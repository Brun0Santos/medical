'use client';
import styled from 'styled-components';

export const StepsContainer = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  max-width: 400px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 1rem;

  .active {
    font-weight: 500;

    > svg {
      fill: #4e9f3d;
    }
  }

  .step {
    text-align: center;
    background-color: #fff;
    z-index: 1;
    width: 250px;
    padding: 0.5rem;
  }

  &:not(:last-child)::after {
    content: '';
    /* margin-left: 30px; */
    border-bottom: 1px solid #000000;
    position: absolute;
    top: 20px;
    width: 290px;
  }

  svg {
    font-size: 1.6rem;
    margin-bottom: 0.2rem;
  }
`;

export const Actionbutton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  margin: 5px;

  span {
    padding: 0 5px;
  }
`;

export const ButtonDelete = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #afafaf;
  cursor: pointer;
  margin-right: 10px;
`;

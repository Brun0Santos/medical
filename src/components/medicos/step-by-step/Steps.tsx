'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaRegAddressCard } from 'react-icons/fa6';
import { FaRegUser } from 'react-icons/fa6';
import { GoGitMerge } from 'react-icons/go';
import { RiCalendarCheckLine } from 'react-icons/ri';

import * as S from './styles';

function Steps({ currentStep }: any) {
  return (
    <S.StepsContainer>
      <div className="step active">
        <FaRegUser />
        <p>Médico</p>
      </div>

      <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
        <FaRegAddressCard />
        <p>Endereço</p>
      </div>

      <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
        <GoGitMerge />
        <p>Especialidade</p>
      </div>

      <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
        <RiCalendarCheckLine />
        <p>Dias de Trabalho</p>
      </div>
    </S.StepsContainer>
  );
}

export default Steps;

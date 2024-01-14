import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { FaArrowTrendUp } from 'react-icons/fa6';

import * as S from './styles';

function ChartPacientes() {
  return (
    <S.ContainerEstatisticas>
      <S.ContainerNovosPacientes>
        <S.NavImage>
          <AiOutlineUser style={{ color: '#a1d9fc', fontSize: '36px' }} />
        </S.NavImage>

        <S.DivInfo>
          <S.DivTitle>24.4k</S.DivTitle>
          <div>Novos Pacientes</div>
        </S.DivInfo>

        <S.PercentualContainer>
          <S.DivIcon>
            <FaArrowTrendUp style={{ color: '#928aff', fontSize: '15px' }} />
          </S.DivIcon>
          11%
        </S.PercentualContainer>
      </S.ContainerNovosPacientes>

      <S.ContainerVelhosPacientes>
        <S.ImgPaciente>
          <AiOutlineUser style={{ color: '#ffd586', fontSize: '36px' }} />
        </S.ImgPaciente>

        <S.DivInfo>
          <S.DivTitle>190.49k</S.DivTitle>
          <div>Pacientes Antigos</div>
        </S.DivInfo>

        <S.PercentualContainer>
          <S.DivIcon>
            <FaArrowTrendUp style={{ color: '#928aff', fontSize: '15px' }} />
          </S.DivIcon>
          8%
        </S.PercentualContainer>
      </S.ContainerVelhosPacientes>
    </S.ContainerEstatisticas>
  );
}

export default ChartPacientes;

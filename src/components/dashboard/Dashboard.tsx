// import Image from 'next/image';
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { CiPhone } from 'react-icons/ci';
import { FcCalendar } from 'react-icons/fc';

// import logo from '../../../public/calendar.png';
import Layout from '../layout/Layout';
import * as S from './styles';

function Dashboard() {
  return (
    <Layout title="Bem Vindo">
      <S.Title>👋Bem vindo, Bruno</S.Title>
      <S.ContainerEstatisticas>
        <S.ContainerVendas>
          <S.NavImage>
            <FcCalendar style={{ color: '#fff', fontSize: '36px' }} />
          </S.NavImage>

          <S.DivInfo>
            <S.DivTitle>24.4k</S.DivTitle>
            <div>Agendas</div>
          </S.DivInfo>
        </S.ContainerVendas>

        <S.ContainerPacientes>
          <S.ImgPaciente>
            <AiOutlineUser style={{ color: '#fff', fontSize: '36px' }} />
          </S.ImgPaciente>

          <S.DivInfo>
            <S.DivTitle>190.49k</S.DivTitle>
            <div>Pacientes</div>
          </S.DivInfo>
        </S.ContainerPacientes>

        <S.ContainerConsultoria>
          <S.ImgConsultoria>
            <CiPhone style={{ color: '#fff', fontSize: '36px' }} />
          </S.ImgConsultoria>

          <S.DivInfo>
            <S.DivTitle>30.12k</S.DivTitle>
            <div>Consultória</div>
          </S.DivInfo>
        </S.ContainerConsultoria>

        <S.ContainerVideo>
          <S.ImgVideo>
            <CiPhone style={{ color: '#fff', fontSize: '36px' }} />
          </S.ImgVideo>

          <S.DivInfo>
            <S.DivTitle>11.19k</S.DivTitle>
            <div>Consulta/Vídeo</div>
          </S.DivInfo>
        </S.ContainerVideo>
      </S.ContainerEstatisticas>
    </Layout>
  );
}

export default Dashboard;

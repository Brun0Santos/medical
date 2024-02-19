// import Image from 'next/image';
import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { CiPhone } from 'react-icons/ci';
import { FcCalendar } from 'react-icons/fc';
import { GoDeviceCameraVideo } from 'react-icons/go';

import { LoginContext } from '../../context/LoginContext';
// import logo from '../../../public/calendar.png';
import Layout from '../layout/Layout';
// import DadosAntedimento from './chart/atendimento/DadosAtendimento';
// import DadosMedicos from './chart/dados-medicos/DadosMedicos';
// import DadosPacientes from './chart/dados-pacientes/DadosPacientes';
// import ChartPacientes from './chart/pacientes/ChartPacientes';
// import Pesquisas from './chart/pesquisas/Pesquisas';
import * as S from './styles';

function Dashboard() {
  const { token } = useContext(LoginContext);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      console.log(token);
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + storedToken;
    }
  }, []);

  return (
    <Layout title="Painel Administrativo">
      <S.Title>
        👋Bem vindo,
        {token?.login !== undefined
          ? token?.login.charAt(0).toUpperCase() + token.login.slice(1)
          : ''}
      </S.Title>
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
            <GoDeviceCameraVideo style={{ color: '#fff', fontSize: '36px' }} />
          </S.ImgVideo>

          <S.DivInfo>
            <S.DivTitle>11.19k</S.DivTitle>
            <div>Consulta/Vídeo</div>
          </S.DivInfo>
        </S.ContainerVideo>
      </S.ContainerEstatisticas>

      {/* <S.ContainerGrafico>
        <Pesquisas />
        <ChartPacientes />
      </S.ContainerGrafico>

      <S.ContainerGraficoPizza>
        <S.DivTitleGraficoPizza>
          <div>Médicos</div>
          <DadosPacientes />
        </S.DivTitleGraficoPizza>

        <S.DivTitleGraficoPizza>
          <span>Pacientes</span>
          <DadosMedicos />
        </S.DivTitleGraficoPizza>

        <S.DivTitleGraficoPizza>
          <span>Atendimento</span>
          <DadosAntedimento />
        </S.DivTitleGraficoPizza>
      </S.ContainerGraficoPizza> */}
    </Layout>
  );
}

export default Dashboard;

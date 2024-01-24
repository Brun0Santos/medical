'use client';
import { Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { BiBadgeCheck } from 'react-icons/bi';
import { BsTelephone } from 'react-icons/bs';
import { MdAlternateEmail, MdOutlineLocationOn } from 'react-icons/md';
import { PiIdentificationBadge, PiIdentificationCard, PiUserCirclePlus } from 'react-icons/pi';

import Br from '../../../../../public/br.jpeg';
import { usePatienteService } from '../../../../http';
import { Patient } from '../../../../models/paciente/pacienteModel';
import Layout from '../../../layout/Layout';
import * as S from './styles';

function PacienteInfo() {
  const [patient, setPatient] = useState<Patient>({});
  const searchParams = useSearchParams();
  const searchId = searchParams.get('id');
  const patientService = usePatienteService();

  useEffect(() => {
    if (searchId) {
      patientService.getPatientFromId(String(searchId)).then((patients) => {
        setPatient(patients);
      });
    }
  }, []);

  return (
    <Layout title="Painel Administrativo">
      <S.NavContainer>
        <h3>Informações do Paciente</h3>
        <Link href={'/medical/pacientes'}>
          <Button variant="contained" style={{ backgroundColor: '#659e6d' }}>
            Voltar
          </Button>
        </Link>
      </S.NavContainer>

      <S.InfoContainer>
        <S.ImageContainer>
          <Image src={Br} width={100} height={100} alt="Bruno" />
        </S.ImageContainer>

        <S.DataContainer>
          <ul>
            <S.LiContainer>
              <BiBadgeCheck />
              <S.Label>Nome do Paciente:</S.Label>
              <S.Span>{patient?.name}</S.Span>
            </S.LiContainer>

            <S.LiContainer>
              <PiIdentificationBadge />
              <S.Label>CPF:</S.Label>
              <S.Span>{patient?.cpf}</S.Span>
            </S.LiContainer>

            <S.LiContainer>
              <PiIdentificationCard />
              <S.Label>Plano de Saúde:</S.Label>
              <S.Span>{patient?.medicalInsurance}</S.Span>
            </S.LiContainer>

            <S.LiContainer>
              <MdAlternateEmail />
              <S.Label>Email:</S.Label>
              <S.Span>{patient?.email}</S.Span>
            </S.LiContainer>

            <S.LiContainer>
              <BsTelephone />
              <S.Label>Telefone:</S.Label>
              <S.Span>{patient?.contact}</S.Span>
            </S.LiContainer>

            <S.LiContainer>
              <PiUserCirclePlus />
              <S.Label>Profissão:</S.Label>
              <S.Span>{patient.profession}</S.Span>
            </S.LiContainer>

            <S.LiContainer>
              <MdOutlineLocationOn />
              <S.Label>Endereço:</S.Label>
              <S.Span>
                {patient.address?.city}, {patient?.address?.state}
              </S.Span>
            </S.LiContainer>
          </ul>
        </S.DataContainer>
      </S.InfoContainer>
    </Layout>
  );
}

export default PacienteInfo;

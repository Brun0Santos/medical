'use client';
import { Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { BiBadgeCheck, BiBookmarks } from 'react-icons/bi';
import { BsTelephone } from 'react-icons/bs';
import { MdAlternateEmail, MdOutlineLocationOn } from 'react-icons/md';
import { PiIdentificationBadge, PiIdentificationCard } from 'react-icons/pi';

import Br from '../../../../public/br.jpeg';
import { useDoctorService } from '../../../http/index';
import { Doctor } from '../../../models/medico/medicoModel';
import Layout from '../../layout/Layout';
import * as S from './styles';

function MedicoInfo() {
  const [doctor, setDoctor] = useState<Doctor>({});
  const searchParams = useSearchParams();
  const searchId = searchParams.get('id');
  const doctorService = useDoctorService();

  useEffect(() => {
    if (searchId) {
      doctorService.getDoctorFromId(String(searchId)).then((doctor) => {
        setDoctor(doctor);
      });
    }
  }, []);

  return (
    <Layout title="Painel Administrativo">
      <S.NavContainer>
        <h3>Informações do Médico</h3>
        <Link href={'/medical/medicos'}>
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
              <S.Label htmlFor="">Nome do Médico:</S.Label>
              <S.Span>{doctor?.name}</S.Span>
            </S.LiContainer>

            <S.LiContainer>
              <PiIdentificationBadge />
              <S.Label htmlFor="">CPF:</S.Label>
              <S.Span>{doctor?.cpf}</S.Span>
            </S.LiContainer>

            <S.LiContainer>
              <PiIdentificationCard />
              <S.Label htmlFor="">CRM:</S.Label>
              <S.Span>{doctor?.crm}</S.Span>
            </S.LiContainer>

            <S.LiContainer>
              <MdAlternateEmail />
              <S.Label htmlFor="">Email:</S.Label>
              <S.Span>{doctor?.email}</S.Span>
            </S.LiContainer>

            <S.LiContainer>
              <BsTelephone />
              <S.Label htmlFor="">Telefone:</S.Label>
              <S.Span>{doctor?.contact}</S.Span>
            </S.LiContainer>

            <S.LiContainer>
              <BiBookmarks />
              <S.Label htmlFor="">Ocupação:</S.Label>
              <S.Span>{doctor?.specialities?.map((e) => e.name)}</S.Span>
            </S.LiContainer>

            <S.LiContainer>
              <MdOutlineLocationOn />
              <S.Label htmlFor="">Endereço:</S.Label>
              <S.Span>
                {doctor.address?.city}, {doctor?.address?.state}
              </S.Span>
            </S.LiContainer>
          </ul>
        </S.DataContainer>
      </S.InfoContainer>
    </Layout>
  );
}

export default MedicoInfo;

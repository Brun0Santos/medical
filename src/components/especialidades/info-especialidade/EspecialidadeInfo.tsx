import { Button } from '@mui/material';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { BiBadgeCheck } from 'react-icons/bi';
import { MdOutlineDescription, MdOutlineSummarize } from 'react-icons/md';
import { PiCalendarCheckBold } from 'react-icons/pi';

import { useSpecialityService } from '../../../http/index';
import { Speciality } from '../../../models/especialidade/especialidadeModel';
import Layout from '../../layout/Layout';
import * as S from './styles';

function EspecialidadeInfo() {
  const [speciality, setSpeciality] = useState<Speciality>({
    id: '',
    description: '',
    name: '',
    summary: '',
    registrationDate: '',
  });
  const searchParams = useSearchParams();
  const searchId = searchParams.get('id');
  const specialityService = useSpecialityService();

  useEffect(() => {
    if (searchId) {
      specialityService.getSpecialityFromId(searchId).then((res) => {
        setSpeciality(res);
      });
    }
  }, []);

  return (
    <Layout title="Painel Administrativo">
      <S.NavContainer>
        <h3>Informações das Especialidade</h3>
        <Link href={'/medical/especialidades'}>
          <Button variant="contained" style={{ backgroundColor: '#659e6d' }}>
            Voltar
          </Button>
        </Link>
      </S.NavContainer>

      <S.InfoContainer>
        <S.ImageContainer></S.ImageContainer>
        <S.DataContainer>
          <ul>
            <S.LiContainer>
              <BiBadgeCheck />
              <S.Label htmlFor="">Nome da Especialidade::</S.Label>
              <S.Span>{speciality?.name}</S.Span>
            </S.LiContainer>

            <S.LiContainer>
              <MdOutlineSummarize />
              <S.Label htmlFor="">Resumo da Especialidade:</S.Label>
              <S.Span>{speciality?.summary}</S.Span>
            </S.LiContainer>

            <S.LiContainer>
              <MdOutlineDescription />
              <S.Label htmlFor="">Descrição da Especialidade:</S.Label>
              <S.Span>{speciality?.description}</S.Span>
            </S.LiContainer>

            <S.LiContainer>
              <PiCalendarCheckBold />
              <S.Label htmlFor="">Data de cadastro da Especialidade:</S.Label>
              <S.Span>{speciality?.registrationDate}</S.Span>
            </S.LiContainer>
          </ul>
        </S.DataContainer>
      </S.InfoContainer>
    </Layout>
  );
}

export default EspecialidadeInfo;

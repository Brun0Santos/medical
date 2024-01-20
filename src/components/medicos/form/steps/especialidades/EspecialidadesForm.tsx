/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';

import { useSpecialityService } from '../../../../../http';
import { Speciality } from '../../../../../models/especialidade/especialidadeModel';
import { Page } from '../../../../commom/pageable/especialidade/Speciality';
import * as S from '../../styles';

interface Testes {
  speciality?: Speciality;
  updateFiledHandler: (fieldName: string, value: string) => void;
}

export default function EspecialidadesForm({ updateFiledHandler }: Testes) {
  const [especialidades, setEspecialidades] = useState<Page<Speciality>>({
    content: [],
    first: 0,
    number: 0,
    size: 0,
    totalElements: 0,
    totalPages: 0,
  });

  const specialityService = useSpecialityService();

  useEffect(() => {
    try {
      specialityService.getPageSpeciality('', 0, 6).then((res) => {
        setEspecialidades(res);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const testess = (_: any, newValue: any) => {
    console.log('oi');
    console.log(newValue);

    const testes = especialidades.content.find((e) => e.name == newValue);
    console.log(testes);
    if (testes) {
      updateFiledHandler('name', String(testes.name));
      updateFiledHandler('summary', String(testes.summary));
      updateFiledHandler('description', String(testes.description));
      updateFiledHandler('registrationDate', String(testes.registrationDate));
    }
  };

  return (
    <S.Container>
      <S.NavContainer>
        <h3>Especialidade</h3>
      </S.NavContainer>

      <S.ContentContainer>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={especialidades?.content.map((e) => e?.name)}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Especialidades" />}
          fullWidth
          onChange={testess}
        />
      </S.ContentContainer>
    </S.Container>
  );
}

import { Button } from '@mui/material';
import Link from 'next/link';
import React, { ChangeEvent, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { useRegisterService, useSpecialityService } from '../../../http';
import { Speciality } from '../../../models/especialidade/especialidadeModel';
import { DoctorBySpeciality } from '../../../models/medico/medicoModel';
import { Registro } from '../../../models/registro/registroModel';
import SelectOptionsAtividade from '../../commom/select/atividade/SelectOptionsAtividade';
import SelectOptionsDoctorBySpeciality from '../../commom/select/atividade/SelectOptionsDoctorBySpeciality';
import SelectOptions from '../../commom/select/paciente/SelectOptions';
import Layout from '../../layout/Layout';
import * as S from './styles';

function RegistroForm() {
  const specialityService = useSpecialityService();
  const registerService = useRegisterService();
  const [speciality, setSpeciality] = useState<Array<Speciality>>([]);
  const [doctorBySpeciality, setDoctorBySpeciality] = useState<Array<DoctorBySpeciality>>([]);

  const [consulta, setConsulta] = useState<boolean>(false);
  const [profession, setProfession] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [serviceDateTime, SetServiceDateTime] = useState<string>('');
  const [specialityId, setSpecialityId] = useState<string>('');
  const [doctorId, setDoctorId] = useState<string>('');
  const [, setTypeMedicalAppointment] = useState<string>('');

  useEffect(() => {
    try {
      specialityService
        .getPageSpeciality('', 0, 5)
        .then((data) => {
          setSpeciality(data.content);
        })
        .catch(() => toast.error('Error!'));
    } catch (error) {
      toast.error('Um erro inesperado aconteceu!');
    }
  }, []);

  useEffect(() => {
    setConsulta(false);
    try {
      registerService
        .getAllDoctorsBySpeciality(specialityId)
        .then((data) => {
          setDoctorBySpeciality(data);
        })
        .catch(() => {
          setDoctorBySpeciality([]);
        });
    } catch (error) {
      toast.error('Um erro inesperado aconteceu!');
    }
  }, [consulta]);

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value !== '') {
      setSpecialityId(String(e.target.value));
      setConsulta(true);
    }
  };

  const handleSelectChangeDoctor = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value !== '') {
      setDoctorId(String(e.target.value));
    }
  };

  const registrar = () => {
    const appointment: Registro = {
      description,
      specialityId,
      doctorId,
      patientId: '1',
      serviceDateTime: '2024-01-23T10:30:00',
      typeMedicalAppointment: 'CONSULTA',
    };
    registerService.saveRegister(appointment).then(() => {
      toast.success('Registro realizado com sucesso!');
    });
  };

  const options = [
    { value: 'NENHUM', label: 'Nenhum' },
    { value: 'CONSULTA', label: 'Consulta' },
    { value: 'EXAME', label: 'Exame' },
    { value: 'OPERACAO', label: 'Operação' },
    { value: 'OUTROS', label: 'Outros' },
  ];

  return (
    <Layout title="Painel Administrativo">
      <S.Container>
        <S.NavContainer>
          <h2>Registrar Atividade</h2>
          <Link href={'/medical/registros'}>
            <Button variant="contained" style={{ backgroundColor: '#659e6d' }}>
              Cancelar
            </Button>
          </Link>
        </S.NavContainer>

        <S.ContentContainer>
          <S.InputBox>
            <S.LabelInput htmlFor="name">Descrição</S.LabelInput>
            <input
              type="text"
              id="name"
              placeholder="Decrição do atividade"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </S.InputBox>

          <S.SelectContainer>
            <S.LabelInput htmlFor="name">Especialidade</S.LabelInput>
            <SelectOptionsAtividade
              options={speciality}
              value={specialityId}
              onChange={handleSelectChange}
            />
          </S.SelectContainer>

          <S.SelectContainer>
            <S.LabelInput htmlFor="name">Profissional</S.LabelInput>
            <SelectOptionsDoctorBySpeciality
              options={doctorBySpeciality}
              value={doctorId}
              onChange={handleSelectChangeDoctor}
            />
          </S.SelectContainer>

          <S.CentroContainer>
            <S.InputBox>
              <S.LabelInput htmlFor="cpf">Data</S.LabelInput>
              <input
                type="date"
                id="cpf"
                placeholder="Data"
                value={serviceDateTime}
                onChange={(e) => SetServiceDateTime(e.target.value)}
              />
            </S.InputBox>

            <S.InputBox>
              <S.LabelInput htmlFor="profession">Atividade:</S.LabelInput>
              <input
                type="text"
                id="profession"
                placeholder="Profissão"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
              />
            </S.InputBox>
          </S.CentroContainer>

          <S.SelectContainer>
            <label>Categoria</label>
            <SelectOptions
              options={options}
              // value={String(data?.medicalInsurance)}
              onChange={(e) => setTypeMedicalAppointment(e.target.value)}
            />
          </S.SelectContainer>

          <Button
            type="submit"
            variant="contained"
            style={{ backgroundColor: '#4070f4', width: '100px', marginTop: '16px' }}
            onClick={registrar}
          >
            Registrar
          </Button>
        </S.ContentContainer>
      </S.Container>
    </Layout>
  );
}

export default RegistroForm;

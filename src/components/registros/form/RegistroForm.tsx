import { Button } from '@mui/material';
import moment from 'moment';
import Link from 'next/link';
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { LoginContext } from '../../../context/LoginContext';
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
  const [typeMedicalAppointment, setTypeMedicalAppointment] = useState<string>('');
  const { token } = useContext(LoginContext);

  const [selectedFileName, setSelectedFileName] = useState<File | null>();

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
    const horaAtual = moment().format('HH:mm:ss.SSS');
    const appointment: Registro = {
      description,
      specialityId,
      doctorId,
      patientId: String(token?.userId),
      serviceDateTime: serviceDateTime + 'T' + horaAtual,
      typeMedicalAppointment: typeMedicalAppointment,
    };

    registerService
      .saveRegister(appointment)
      .then(() => {
        toast.success('Registro realizado com sucesso!');
        saveFile();
      })
      .catch(() => toast.error('Error'));
  };

  const options = [
    { value: 'NENHUM', label: 'Nenhum' },
    { value: 'CONSULTA', label: 'Consulta' },
    { value: 'EXAME', label: 'Exame' },
    { value: 'OPERACAO', label: 'Operação' },
    { value: 'OUTROS', label: 'Outros' },
  ];

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFileName(event.target.files[0]);
    }
  };

  const saveFile = () => {
    try {
      if (selectedFileName) {
        const formData = new FormData();
        formData.append('id', String(token?.userId));
        formData.append('file', selectedFileName);
        registerService.saveFile(formData).then(() => console.log('sucesso'));
      }
    } catch (_) {
      toast.error('Um erro inesperado aconteceu');
    }
  };

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

          <S.SelectContainer>
            <div
              style={{
                width: '100%',
                border: '1px solid #ccc',
                height: '43px',
              }}
            >
              <input
                type="file"
                id="fileInput"
                onChange={handleFileChange}
                style={{ display: 'none', textAlign: 'center', alignItems: 'center' }}
                multiple
              />
              <label
                htmlFor="fileInput"
                style={{
                  cursor: 'pointer',
                  fontSize: '13px',
                }}
              >
                Selecionar Laudo
              </label>
              <span
                style={{
                  paddingLeft: '7px',
                  fontSize: '13px',

                  margin: '1px solid #fefefe',
                }}
              ></span>
            </div>
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

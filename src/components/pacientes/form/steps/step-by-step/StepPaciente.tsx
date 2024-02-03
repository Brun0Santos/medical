'use client';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FcNext, FcPrevious } from 'react-icons/fc';
import { MdOutlineSend } from 'react-icons/md';

import { useLoginService, usePatienteService } from '../../../../../http';
import { Address } from '../../../../../models/endereco/enderecoModel';
import { LoginData as Login } from '../../../../../models/login/loginModel';
import { Patient } from '../../../../../models/paciente/pacienteModel';
import Layout from '../../../../layout/Layout';
import DiasTrabalhoForm from '../../../../medicos/form/steps/dados-form/EnviarDadosBack';
import MedicoFormContato from '../../../../medicos/form/steps/endereco-form/MedicoEndereco';
import { useHookForm } from '../../../../medicos/hooks/UseHookForm';
import LoginData from '../../login/LoginData';
import PacienteForm from '../../paciente-form/PacienteForm';
import Steps from './Steps';
import * as S from './styles';

function StepPaciente() {
  const router = useRouter();
  const service = usePatienteService();
  const loginServicePatient = useLoginService();
  const [login, setLogin] = useState<Login>({
    login: '',
    email: '',
    password: '',
  });

  const [data, setData] = useState<Patient>({
    id: '',
    name: '',
    contact: '',
    gender: 'OTHER',
    email: '',
    cpf: '',
    profession: '',
    medicalInsurance: 'NENHUM',
    address: {
      city: '',
      complement: '',
      neighborhood: '',
      state: '',
      number: '',
      zipCode: '',
      id: '',
    },
  });

  const [address, setAddress] = useState<Address>({
    id: '',
    city: '',
    complement: '',
    neighborhood: '',
    state: '',
    number: '',
    zipCode: '',
  });

  const updateFiledHandler = (key: string, value: string) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const updateFiledHandlerAddress = (key: string, value: string) => {
    setAddress((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const updateFiledHandlerDataLogin = (key: string, value: string) => {
    setLogin((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formsComponents = [
    <PacienteForm data={data} updateFiledHandler={updateFiledHandler} key={0} />,
    <LoginData data={login} updateFiledHandler={updateFiledHandlerDataLogin} key={6} />,
    <MedicoFormContato datas={address} updateFiledHandler={updateFiledHandlerAddress} key={1} />,
    <DiasTrabalhoForm key={3} />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useHookForm(formsComponents);

  const teste = () => {
    const paciente: Patient = {
      id: data.id,
      name: data.name,
      contact: data.contact,
      gender: data.gender,
      email: data.email,
      cpf: data.cpf,
      profession: data.profession,
      medicalInsurance: data.medicalInsurance,
      address: {
        city: address.city,
        complement: address.complement,
        neighborhood: address.neighborhood,
        state: address.state,
        number: address.number,
        zipCode: address.zipCode,
      },
    };

    const dadosLogin: Login = {
      email: data.email ? data.email : '',
      login: login.login,
      password: login.password,
      cpf: data.cpf,
    };

    try {
      service
        .savePatient(paciente)
        .then(() => {
          toast.success('Paciente cadastrado!');
          router.push('/medical/pacientes');
          loginServicePatient
            .createLoginPatient(dadosLogin)
            .then(() => {
              toast.success('Sucesso!');
            })
            .catch(() => {});
        })
        .catch(() => toast.error('Erro ao cadastrar o paciente'));
    } catch (error) {
      toast.error('Algum erro inesperado aconteceu!');
    }
  };

  return (
    <Layout title="Painel Administrativo">
      <Steps currentStep={currentStep} />
      <div onSubmit={(e) => changeStep(currentStep + 1, e)}>
        <div className="inputs-container">{currentComponent}</div>

        <S.Actionbutton>
          {!isFirstStep && (
            <S.ButtonContainer>
              <Button variant="outlined" onClick={() => changeStep(currentStep - 1)}>
                <FcPrevious />
                <span>Voltar</span>
              </Button>
            </S.ButtonContainer>
          )}

          {isLastStep ? (
            <S.ButtonContainer>
              <Button variant="contained" onClick={teste}>
                <span>Enviar</span>
                <MdOutlineSend />
              </Button>
            </S.ButtonContainer>
          ) : (
            <S.ButtonContainer>
              <Button variant="outlined" onClick={() => changeStep(currentStep + 1)}>
                <span>Avançar</span>
                <FcNext />
              </Button>
            </S.ButtonContainer>
          )}
        </S.Actionbutton>
      </div>
    </Layout>
  );
}

export default StepPaciente;

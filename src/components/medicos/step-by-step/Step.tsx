import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FcNext, FcPrevious } from 'react-icons/fc';
import { MdOutlineSend } from 'react-icons/md';

import { useDoctorService, useLoginService } from '../../../http';
import { Address } from '../../../models/endereco/enderecoModel';
import { Speciality } from '../../../models/especialidade/especialidadeModel';
import { LoginData as Login } from '../../../models/login/loginModel';
import { Doctor } from '../../../models/medico/medicoModel';
import Layout from '../../layout/Layout';
import EnviarDadosBack from '../form/steps/dados-form/EnviarDadosBack';
import MedicoFormContato from '../form/steps/endereco-form/MedicoEndereco';
import EspecialidadesForm from '../form/steps/especialidades/EspecialidadesForm';
import LoginData from '../form/steps/login/LoginData';
import MedicoFormTeste from '../form/steps/medico-form/MedicoFormTest';
import { useHookForm } from '../hooks/UseHookForm';
import Steps from './Steps';
import * as S from './styles';

function Step() {
  const router = useRouter();
  const [data, setData] = useState<Doctor>({
    id: '',
    name: '',
    crm: '',
    contact: '',
    gender: 'OTHER',
    email: '',
    cpf: '',
    specialities: [
      {
        name: '',
        id: '',
        description: '',
        registrationDate: '',
        summary: '',
      },
    ],

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

  const [speciality, setSpeciality] = useState<Speciality>({
    id: '',
    name: '',
    description: '',
    registrationDate: '',
    summary: '',
  });

  const [login, setLogin] = useState<Login>({
    login: '',
    email: '',
    password: '',
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

  const updateFiledHandlerSpeciality = (key: string, value: string) => {
    setSpeciality((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const updateFiledHandlerDataLogin = (key: string, value: string) => {
    setLogin((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formsComponents = [
    <MedicoFormTeste datas={data} updateFiledHandler={updateFiledHandler} key={0} />,
    <LoginData data={login} updateFiledHandler={updateFiledHandlerDataLogin} key={5} />,
    <MedicoFormContato datas={address} updateFiledHandler={updateFiledHandlerAddress} key={1} />,
    <EspecialidadesForm
      speciality={data}
      updateFiledHandler={updateFiledHandlerSpeciality}
      key={2}
    />,
    <EnviarDadosBack key={3} />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useHookForm(formsComponents);

  const doctorService = useDoctorService();
  const dataLoginService = useLoginService();

  const teste = () => {
    const pessoa: Doctor = {
      id: data.id,
      name: data.name,
      crm: data.crm,
      gender: data.gender,
      email: data.email,
      cpf: data.cpf,
      contact: data.contact,
      address: {
        city: address.city,
        complement: address.complement,
        neighborhood: address.neighborhood,
        state: address.state,
        number: address.number,
        zipCode: address.zipCode,
      },
      specialities: [
        {
          id: speciality.id,
          name: speciality.name,
          description: speciality.description,
          registrationDate: speciality.registrationDate,
          summary: speciality.summary,
        },
      ],
    };

    const dadosLogin: Login = {
      email: data.email ? data.email : '',
      login: login.login,
      password: login.password,
      cpf: data.cpf,
    };

    try {
      doctorService.salvarMedico(pessoa).then(() => {
        toast.success('Médico cadastrado com sucesso!');
        dataLoginService
          .createLogin(dadosLogin)
          .then(() => {
            router.push(`/medical/medicos`);
          })
          .catch(() => toast.error('Um erro inesperado aconteceu'));
      });
    } catch (_) {
      toast.error('Erro ao salvar doutor');
    }
    console.log(pessoa);
    console.log(dadosLogin);
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

export default Step;

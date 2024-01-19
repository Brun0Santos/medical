/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
import { Button } from '@mui/material';
import { useState } from 'react';
import { FcNext, FcPrevious } from 'react-icons/fc';
import { MdOutlineSend } from 'react-icons/md';

import { Address } from '../../../models/endereco/enderecoModel';
import { Doctor } from '../../../models/medico/medicoModel';
import Layout from '../../layout/Layout';
import DiasTrabalhoForm from '../form/steps/dias-trabalho/DiasTrabalhoForm';
import MedicoFormContato from '../form/steps/endereco-form/MedicoEndereco';
import EspecialidadesForm from '../form/steps/especialidades/EspecialidadesForm';
import MedicoFormTeste from '../form/steps/medico-form/MedicoFormTest';
import { useHookForm } from '../hooks/UseHookForm';
import Steps from './Steps';
import * as S from './styles';

// const formTemplate = {
//   name: '',
//   crm: '',
//   contact: '',
//   gender: 'OTHER',
//   email: '',
//   cpf: '',
//   specialities: [],

//   zipCode: '',
//   number: '',
//   complement: '',
//   neighborhood: '',
//   city: '',
//   state: '',

//   workSchedules: [],
// };

function Step() {
  // const [data, setData] = useState(formTemplate);
  const [data, setData] = useState<Doctor>({
    id: '',
    name: '',
    crm: '',
    contact: '',
    gender: 'OTHER',
    email: '',
    cpf: '',
    specialities: [],
    address: {
      city: '',
      complement: '',
      neighborhood: '',
      state: '',
      number: '',
      zipCode: '',
      id: '',
    },
    workSchedules: [],
  });

  const [address, setAddress] = useState<Address>({
    city: '',
    complement: '',
    neighborhood: '',
    state: '',
    number: '',
    zipCode: '',
    id: '',
  });

  const updateFiledHandler = (key: string, value: any) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const updateFiledHandlerAddress = (key: string, value: any) => {
    setAddress((prev) => {
      return { ...prev, [key]: value };
    });
  };

  // eslint-disable-next-line react/jsx-key
  const formsComponents = [
    <MedicoFormTeste datas={data} updateFiledHandler={updateFiledHandler} />,
    <MedicoFormContato datas={address} updateFiledHandler={updateFiledHandlerAddress} />,
    <EspecialidadesForm datas={data} updateFiledHandler={updateFiledHandler} />,
    <DiasTrabalhoForm />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useHookForm(formsComponents);

  const teste = () => {
    const pessoa: Doctor = {
      id: data.id,
      name: data.name,
      crm: data.crm,
      gender: 'OTHER',
      email: '',
      cpf: '',
      address: {
        city: address.city,
        complement: address.complement,
        neighborhood: address.neighborhood,
        state: address.state,
        number: address.number,
        zipCode: address.zipCode,
      },
    };

    console.log(pessoa);
  };

  return (
    <Layout title="Tela de cadastros">
      <Steps currentStep={currentStep} />
      <div onSubmit={(e) => changeStep(currentStep + 1, e)}>
        <div className="inputs-container">{currentComponent}</div>

        <S.Actionbutton>
          {!isFirstStep && (
            <S.ButtonContainer>
              <Button
                variant="outlined"
                onClick={() => changeStep(currentStep - 1)}
                // style={{ backgroundColor: '#838383' }}
              >
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

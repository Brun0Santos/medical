/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
import { Button } from '@mui/material';
import { useState } from 'react';
import { FcNext, FcPrevious } from 'react-icons/fc';
import { MdOutlineSend } from 'react-icons/md';

import Layout from '../../layout/Layout';
import MedicoFormContato from '../form/steps/endereco-form/MedicoEndereco';
import EspecialidadesForm from '../form/steps/especialidades/EspecialidadesForm';
import { useHookForm } from '../hooks/UseHookForm';
import Steps from './Steps';
import * as S from './styles';
import UserForm from './UserForm';

const formTemplate = {
  name: '',
  crm: '',
  contact: '',
  gender: 'OTHER',
  email: '',
  cpf: '',
  specialities: [],

  zipCode: '',
  number: '',
  complement: '',
  neighborhood: '',
  city: '',
  state: '',

  workSchedules: [],
};

function Step() {
  const [data, setData] = useState(formTemplate);

  const updateFiledHandler = (key: number, value: any) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  // eslint-disable-next-line react/jsx-key
  const formsComponents = [
    <UserForm datas={data} updateFiledHandler={updateFiledHandler} />,
    <MedicoFormContato datas={data} updateFiledHandler={updateFiledHandler} />,
    <EspecialidadesForm datas={data} updateFiledHandler={updateFiledHandler} />,
    <EspecialidadesForm datas={data} updateFiledHandler={updateFiledHandler} />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useHookForm(formsComponents);

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
              <Button variant="contained">
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

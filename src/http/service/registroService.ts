import { AxiosResponse } from 'axios';

import { DoctorBySpeciality } from '../../models/medico/medicoModel';
import { Registro } from '../../models/registro/registroModel';
import { httpCliente } from '../routes/routes';

const resourceUrl: string = '/api/v1/appointment';

export const useRegisterService = () => {
  const getAllDoctorsBySpeciality = async (
    name: string = '',
  ): Promise<Array<DoctorBySpeciality>> => {
    const url: string = `${resourceUrl}/${name}`;
    const response: AxiosResponse<Array<DoctorBySpeciality>> =
      await httpCliente.get<Array<DoctorBySpeciality>>(url);
    return response.data;
  };

  const getALlRegister = async (): Promise<Array<Registro>> => {
    const response: AxiosResponse<Array<Registro>> =
      await httpCliente.get<Array<Registro>>(resourceUrl);
    return response.data;
  };

  const saveRegister = async (registro: Registro): Promise<Registro> => {
    const response: AxiosResponse<Registro> = await httpCliente.post<Registro>(
      resourceUrl,
      registro,
    );
    return response.data;
  };

  return {
    getAllDoctorsBySpeciality,
    getALlRegister,
    saveRegister,
  };
};

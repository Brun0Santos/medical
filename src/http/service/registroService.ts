import { AxiosResponse } from 'axios';

import { DoctorBySpeciality } from '../../models/medico/medicoModel';
import { Registro, RegistroFromId } from '../../models/registro/registroModel';
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

  const getALlRegisterFromId = async (id: string): Promise<Array<RegistroFromId>> => {
    const url: string = `/api/v1/appointments/${id}`;
    const response: AxiosResponse<Array<RegistroFromId>> =
      await httpCliente.get<Array<RegistroFromId>>(url);
    return response.data;
  };

  const updatelRegisterFromId = async (id: string) => {
    const url: string = `/api/v1/appointmentFromId/${id}`;
    await httpCliente.post<string>(url);
  };

  const rejectAppointmentRegisterFromId = async (id: string) => {
    const url: string = `/api/v1/reproveAppointmentFromId/${id}`;
    await httpCliente.post<string>(url);
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
    getALlRegisterFromId,
    rejectAppointmentRegisterFromId,
    saveRegister,
    updatelRegisterFromId,
  };
};

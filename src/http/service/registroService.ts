import axios, { AxiosResponse } from 'axios';

import { DoctorBySpeciality } from '../../models/medico/medicoModel';
import { Registro, RegistroFromDoutor, RegistroFromId } from '../../models/registro/registroModel';
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

  const getAllRegisterByDoctorId = async (id: string): Promise<Array<RegistroFromId>> => {
    const url: string = `/api/v1/appointments/doctor/${id}`;
    const response: AxiosResponse<Array<RegistroFromId>> =
      await httpCliente.get<Array<RegistroFromId>>(url);
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

  const saveFile = async (file: FormData) => {
    const url: string = `http://localhost:8080/api/v1/file/patient`;
    httpCliente.post(url, file, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };

  const getALlRegisterFromDoctor = async (id: string): Promise<Array<RegistroFromDoutor>> => {
    const url: string = `/api/v1/appointmentFromDoctor/${id}`;
    const response: AxiosResponse<Array<RegistroFromDoutor>> =
      await httpCliente.get<Array<RegistroFromDoutor>>(url);
    return response.data;
  };

  // const saveRegister = async (registro: Registro): Promise<Registro> => {
  //   const response: AxiosResponse<Registro> = await httpCliente.post<Registro>(
  //     resourceUrl,
  //     registro,
  //   );
  //   return response.data;
  // };

  const getALlRegisterFromDoctorFilter = async (
    id: string,
    dataInicio: string = '',
    dataFim: string = '',
    serviceType: string = '',
    status: string = '',
  ): Promise<Array<Registro>> => {
    const url: string = `/api/v1/file?id=${id}&dataInicio=${dataInicio}&dataFim=${dataFim}&serviceType=${serviceType}&status=${status}`;
    const response: AxiosResponse<Array<Registro>> = await httpCliente.get<Array<Registro>>(url);
    return response.data;
  };

  const saveRegister = async (formData: FormData): Promise<void> => {
    const url: string = `http://localhost:8080/api/v1/appointment`;
    await axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };

  return {
    getAllDoctorsBySpeciality,
    getALlRegister,
    getALlRegisterFromId,
    rejectAppointmentRegisterFromId,
    saveRegister,
    getALlRegisterFromDoctor,
    updatelRegisterFromId,
    getALlRegisterFromDoctorFilter,
    saveFile,
    getAllRegisterByDoctorId,
  };
};

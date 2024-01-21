import { AxiosResponse } from 'axios';

import { Doctor } from '../../models/medico/medicoModel';
import { httpCliente } from '../routes/routes';

const resourceUrl: string = '/api/v1/doctor';

export const useDoctorService = () => {
  const salvarMedico = async (doctor: Doctor): Promise<Doctor> => {
    const response: AxiosResponse<Doctor> = await httpCliente.post<Doctor>(resourceUrl, doctor);
    return response.data;
  };

  return {
    salvarMedico,
  };
};

import { AxiosResponse } from 'axios';

import { Patient } from '../../models/paciente/pacienteModel';
import { httpCliente } from '../routes/routes';

const resourceUrl: string = '/api/v1/patient';

export const usePatienteService = () => {
  const savePatient = async (patient: Patient): Promise<Patient> => {
    const reponse: AxiosResponse<Patient> = await httpCliente.post<Patient>(resourceUrl, patient);
    return reponse.data;
  };

  return {
    savePatient,
  };
};

import { AxiosResponse } from 'axios';

import { Page } from '../../components/commom/pageable/especialidade/Speciality';
import { Patient } from '../../models/paciente/pacienteModel';
import { httpCliente } from '../routes/routes';

const resourceUrl: string = '/api/v1/patient';

export const usePatienteService = () => {
  const getAllPacients = async (
    name: string,
    page: number = 0,
    size: number = 7,
  ): Promise<Page<Patient>> => {
    const url: string = `${resourceUrl}?name=${name}&&page=${page}&size=${size}`;
    const response: AxiosResponse<Page<Patient>> = await httpCliente.get<Page<Patient>>(url);
    return response.data;
  };

  const getPatientFromId = async (id: string): Promise<Patient> => {
    const url: string = `${resourceUrl}/${id}`;
    const response: AxiosResponse<Patient> = await httpCliente.get<Patient>(url);
    return response.data;
  };

  const savePatient = async (patient: Patient): Promise<Patient> => {
    const reponse: AxiosResponse<Patient> = await httpCliente.post<Patient>(resourceUrl, patient);
    return reponse.data;
  };

  return {
    getAllPacients,
    getPatientFromId,
    savePatient,
  };
};

import { AxiosResponse } from 'axios';

import { Page } from '../../components/commom/pageable/especialidade/Speciality';
import { Doctor } from '../../models/medico/medicoModel';
import { httpCliente } from '../routes/routes';

const resourceUrl: string = '/api/v1/doctor';

export const useDoctorService = () => {
  const getAllDoctors = async (
    name: string,
    page: number = 0,
    size: number = 7,
  ): Promise<Page<Doctor>> => {
    const url: string = `${resourceUrl}?name=${name}&&page=${page}&size=${size}`;
    const response: AxiosResponse<Page<Doctor>> = await httpCliente.get<Page<Doctor>>(url);
    return response.data;
  };

  const getDoctorFromId = async (id: string): Promise<Doctor> => {
    const url: string = `${resourceUrl}/${id}`;
    const response: AxiosResponse<Doctor> = await httpCliente.get<Doctor>(url);
    return response.data;
  };

  const salvarMedico = async (doctor: Doctor): Promise<Doctor> => {
    const response: AxiosResponse<Doctor> = await httpCliente.post<Doctor>(resourceUrl, doctor);
    return response.data;
  };

  return {
    getAllDoctors,
    getDoctorFromId,
    salvarMedico,
  };
};

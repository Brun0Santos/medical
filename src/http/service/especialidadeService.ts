import { AxiosResponse } from 'axios';

import { Page } from '../../components/commom/pageable/especialidade/Speciality';
import { Speciality } from '../../models/especialidade/especialidadeModel';
import { httpCliente } from '../routes/routes';

const resourceUrl: string = '/api/v1/speciality';

export const useSpecialityService = () => {
  const salvarEspecialidade = async (speciality: Speciality): Promise<Speciality> => {
    const response: AxiosResponse<Speciality> = await httpCliente.post<Speciality>(
      resourceUrl,
      speciality,
    );
    return response.data;
  };

  const getPageSpeciality = async (
    name: string = '',
    page: number = 0,
    size: number = 7,
  ): Promise<Page<Speciality>> => {
    const url: string = `${resourceUrl}?name=${name}&&page=${page}&size=${size}`;
    const response: AxiosResponse<Page<Speciality>> = await httpCliente.get<Page<Speciality>>(url);
    return response.data;
  };

  const getSpecialityFromId = async (id: string): Promise<Speciality> => {
    const url: string = `${resourceUrl}/${id}`;
    const response: AxiosResponse<Speciality> = await httpCliente.get(url);
    return response.data;
  };

  const deleteSpecialityFromId = async (id: string): Promise<void> => {
    const url: string = `${resourceUrl}/${id}`;
    await httpCliente.delete(url);
  };

  return {
    salvarEspecialidade,
    getPageSpeciality,
    getSpecialityFromId,
    deleteSpecialityFromId,
  };
};

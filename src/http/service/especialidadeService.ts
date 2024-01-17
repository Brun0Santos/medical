import { AxiosResponse } from 'axios';

import { Speciality } from '../../models/especialidade/especialidadeModel';
import { httpCliente } from '../routes/routes';

const resourceUrl: string = '/api/v1/speciality';

export const useClienteService = () => {
  const salvarEspecialidade = async (speciality: Speciality): Promise<Speciality> => {
    const response: AxiosResponse<Speciality> = await httpCliente.post<Speciality>(
      resourceUrl,
      speciality,
    );
    return response.data;
  };

  return {
    salvarEspecialidade,
  };
};

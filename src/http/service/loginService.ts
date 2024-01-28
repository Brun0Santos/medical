import { AxiosResponse } from 'axios';

import { Login } from '../../models/login/loginModel';
import { httpCliente } from '../routes/routes';

const resourceUrl: string = '/api/v1/auth';

export const useLoginService = () => {
  const login = async (login: Login): Promise<Login> => {
    const response: AxiosResponse<Login> = await httpCliente.post<Login>(resourceUrl, login);
    return response.data;
  };

  return {
    login,
  };
};

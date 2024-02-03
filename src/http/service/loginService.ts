import { AxiosResponse } from 'axios';

import { Login, LoginData } from '../../models/login/loginModel';
import { httpCliente } from '../routes/routes';

const resourceUrl: string = '/api/v1/auth';

interface LoginProps {
  login?: string;
  password?: string;
}

export const useLoginService = () => {
  const login = async (login: LoginProps): Promise<Login> => {
    const response: AxiosResponse<Login> = await httpCliente.post<Login>(resourceUrl, login);
    return response.data;
  };

  const createLogin = async (dataLogin: LoginData): Promise<void> => {
    const url = '/api/v1/loginDoctor';
    await httpCliente.post<Login>(url, dataLogin);
  };

  const createLoginPatient = async (dataLogin: LoginData): Promise<void> => {
    const url = '/api/v1/loginPatient';
    await httpCliente.post<Login>(url, dataLogin);
  };

  return {
    login,
    createLogin,
    createLoginPatient,
  };
};

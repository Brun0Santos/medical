import axios from 'axios';
import { AxiosResponse } from 'axios';

import { AvatarDoctor } from '../../models/avatar/avatarModel';
import { httpCliente } from '../routes/routes';

const resourceUrl: string = '/api/v1/avatar/doctor';

export const useFileService = () => {
  const saveRegister = async (formData: FormData): Promise<void> => {
    const url: string = `http://localhost:8080/api/v1/avatar/doctor`;
    await axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };

  const avatarFromDoutor = async (id: string): Promise<AvatarDoctor> => {
    const response: AxiosResponse<AvatarDoctor> = await httpCliente.get<AvatarDoctor>(
      `${resourceUrl}/${id}`,
    );
    return response.data;
  };

  return {
    saveRegister,
    avatarFromDoutor,
  };
};

import { Address } from '../endereco/enderecoModel';

export interface Patient {
  id?: string;
  name?: string;
  contact?: string;
  gender?: 'MALE' | 'FEMALE' | 'OTHER';
  email?: string;
  cpf?: string;
  profession?: string;
  medicalInsurance?: 'INDIVIDUAL' | 'FAMILIAR' | 'COLETIVO' | 'EMPRESARIAL' | 'NENHUM';
  address?: Address;
}

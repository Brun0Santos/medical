import { Address } from './enderecoModel';
import { Speciality } from './especialidadeModel';
import { WorkSchedule } from './workScheduleModel';

export interface Doctor {
  id?: string;
  name?: string;
  crm?: string;
  contact?: string;
  sex?: 'MALE' | 'FEMALE' | 'OTHER';
  email?: string;
  cpf?: string;
  specialities?: Array<Speciality>;
  address?: Array<Address>;
  workSchedules?: Array<WorkSchedule>;
}

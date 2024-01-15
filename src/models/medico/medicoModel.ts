import { Address } from '../endereco/enderecoModel';
import { Speciality } from '../especialidade/especialidadeModel';
import { WorkSchedule } from '../work/workScheduleModel';

export interface Doctor {
  id?: string;
  name?: string;
  crm?: string;
  contact?: string;
  gender?: 'MALE' | 'FEMALE' | 'OTHER';
  email?: string;
  cpf?: string;
  specialities?: Array<Speciality>;
  address?: Address;
  workSchedules?: Array<WorkSchedule>;
}

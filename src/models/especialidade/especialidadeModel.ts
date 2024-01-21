import { Doctor } from '../medico/medicoModel';

export interface Speciality {
  id?: string;
  name?: string;
  summary?: string;
  description?: string;
  registrationDate?: string;
  doctor?: Array<Doctor>;
}

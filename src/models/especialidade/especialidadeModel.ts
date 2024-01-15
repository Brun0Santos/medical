import { Doctor } from '../medico/medicoModel';

export interface Speciality {
  id?: string;
  name?: string;
  description?: string;
  doctor?: Array<Doctor>;
}

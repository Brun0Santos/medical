import { Doctor } from './medicoModel';

export interface Speciality {
  id?: string;
  name?: string;
  description?: string;
  doctor?: Array<Doctor>;
}

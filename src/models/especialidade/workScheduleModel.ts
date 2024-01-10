import { Doctor } from './medicoModel';

export interface WorkSchedule {
  id?: string;
  doctor?: Doctor;
  daysOfWeek?:
    | 'SEGUNDA_FEIRA'
    | 'TERCA_FEIRA'
    | 'QUARTA_FEIRA'
    | 'QUINTA_FERIRA'
    | 'SEXTA_FEIRA'
    | 'SABADO'
    | 'DOMINGO';
}

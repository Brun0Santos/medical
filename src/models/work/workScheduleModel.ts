import { Doctor } from '../medico/medicoModel';
import { TimeInterval } from '../time-interval/timeIntervalModel';

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
  timeIntervals: Array<TimeInterval>;
}

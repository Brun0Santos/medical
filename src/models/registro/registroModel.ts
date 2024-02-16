/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Registro {
  id?: string;
  description?: string;
  specialityId?: string;
  doctorId?: string;
  patientId?: string;
  serviceDateTime?: string;
  appointmentStatus?: string;
  typeMedicalAppointment?: string;
}

export interface RegistroFromId {
  id?: string;
  description?: string;
  name?: string;
  serviceDateTime?: string;
  appointmentStatus?: string;
  typeMedicalAppointment?: string;
}

export interface RegistroFromDoutor {
  id?: string;
  name: string;
  description: string;
  typeMedicalAppointment: string;
  email: string;
  serviceDateTime: string;
  appointmentStatus: string;
  namePatient: string;
  data?: any;
  file: string;
}

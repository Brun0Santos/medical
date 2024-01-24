'use client';

import { Avatar, TableCell, TableRow } from '@mui/material';
import { GrStatusInfo } from 'react-icons/gr';
import { MdDelete, MdModeEdit } from 'react-icons/md';

import { Patient } from '../../../models/paciente/pacienteModel';
import * as S from './styles';

interface PatientRowProps {
  patient: Patient;
  onEdit: (patient: Patient) => void;
  onDelete: (patient: Patient) => void;
  onInfo: (patient: Patient) => void;
}

const RowPaciente = ({ patient, onEdit, onDelete, onInfo }: PatientRowProps) => {
  return (
    <TableRow key={patient.id}>
      <TableCell align="left">
        <Avatar alt="luciano" src={`https://randomuser.me/api/portraits/men/${patient.id}.jpg`} />
      </TableCell>

      <TableCell align="center">{patient.name}</TableCell>
      <TableCell align="center">{patient.medicalInsurance}</TableCell>
      <TableCell align="center">{patient.contact}</TableCell>
      <TableCell align="center">{patient.cpf}</TableCell>
      <TableCell align="left">
        <S.ButtonGroup>
          <S.ButtonEdit onClick={() => onEdit(patient)}>
            <MdModeEdit style={{ color: '#25435b', fontSize: '17px' }} />
          </S.ButtonEdit>

          <S.ButtonDelete onClick={() => onDelete(patient)}>
            <MdDelete style={{ color: '#fce0e3', fontSize: '17px' }} />
          </S.ButtonDelete>

          <S.ButtonInfo onClick={() => onInfo(patient)}>
            <GrStatusInfo style={{ color: '#fff', fontSize: '17px' }} />
          </S.ButtonInfo>
        </S.ButtonGroup>
      </TableCell>
    </TableRow>
  );
};

export default RowPaciente;

'use client';

import {
  Avatar,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { MdDelete, MdModeEdit } from 'react-icons/md';

import { Patient } from '../../../models/paciente/pacienteModel';
import * as S from './styles';

interface PatientList {
  patient: Array<Patient>;
  onEdit: (patient: Patient) => void;
  onDelete: (patient: Patient) => void;
}

interface PatientRowProps {
  patient: Patient;
  onEdit: (patient: Patient) => void;
  onDelete: (patient: Patient) => void;
}

function TablePacientes({ patient, onEdit, onDelete }: PatientList) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow style={{ backgroundColor: '#e8e8e8' }}>
            <TableCell align="left">Img</TableCell>
            <TableCell align="center">Nome</TableCell>
            <TableCell align="center">CRM</TableCell>
            <TableCell align="center">Especialidade</TableCell>
            <TableCell align="center">Contato</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">CPF</TableCell>
            <TableCell align="center">Opções</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patient.map((patient) => (
            <RowPaciente key={patient.id} patient={patient} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const RowPaciente = ({ patient, onEdit, onDelete }: PatientRowProps) => {
  return (
    <TableRow key={patient.id}>
      <TableCell align="left">
        <Avatar alt="luciano" src={`https://randomuser.me/api/portraits/men/${patient.id}.jpg`} />
      </TableCell>

      <TableCell align="center">{patient.name}</TableCell>
      <TableCell align="center">{patient.cpf}</TableCell>
      <TableCell align="center">{patient.address?.state}</TableCell>
      <TableCell align="center">{patient.contact}</TableCell>
      <TableCell align="center">{patient.email}</TableCell>
      <TableCell align="center">{patient.cpf}</TableCell>
      <TableCell align="left">
        <S.ButtonGroup>
          <S.ButtonEdit onClick={() => onEdit(patient)}>
            <MdModeEdit style={{ color: '#25435b', fontSize: '17px' }} />
          </S.ButtonEdit>

          <S.ButtonDelete onClick={() => onDelete(patient)}>
            <MdDelete style={{ color: '#fce0e3', fontSize: '17px' }} />
          </S.ButtonDelete>
        </S.ButtonGroup>
      </TableCell>
    </TableRow>
  );
};

export default TablePacientes;

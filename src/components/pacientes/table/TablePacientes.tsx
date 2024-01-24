'use client';

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { Patient } from '../../../models/paciente/pacienteModel';
import RowPaciente from './RowPaciente';

interface PatientList {
  patient: Array<Patient>;
  onEdit: (patient: Patient) => void;
  onDelete: (patient: Patient) => void;
  onInfo: (patient: Patient) => void;
}

function TablePacientes({ patient, onEdit, onDelete, onInfo }: PatientList) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow style={{ backgroundColor: '#e8e8e8' }}>
            <TableCell align="left">Img</TableCell>
            <TableCell align="center">Nome</TableCell>
            <TableCell align="center">Plano</TableCell>
            <TableCell align="center">Contato</TableCell>
            <TableCell align="center">CPF</TableCell>
            <TableCell align="center">Opções</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {patient.map((patient) => (
            <RowPaciente
              key={patient.id}
              patient={patient}
              onEdit={onEdit}
              onDelete={onDelete}
              onInfo={onInfo}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TablePacientes;

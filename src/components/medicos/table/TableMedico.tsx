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

import { Doctor } from '../../../models/medico/medicoModel';
import RowMedicos from './RowMedicos';

interface DoctorList {
  doctor: Array<Doctor>;
  onEdit: (doctor: Doctor) => void;
  onDelete: (doctor: Doctor) => void;
  onInfo: (doctor: Doctor) => void;
}

function TableMedico({ doctor, onEdit, onDelete, onInfo }: DoctorList) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow style={{ backgroundColor: '#e8e8e8' }}>
            <TableCell align="left">Img</TableCell>
            <TableCell align="center">Nome</TableCell>
            <TableCell align="center">CRM</TableCell>
            <TableCell align="center">Especialidade</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">CPF</TableCell>
            <TableCell align="center">Opções</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {doctor.map((doctor) => (
            <RowMedicos
              key={doctor.id}
              doctor={doctor}
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

export default TableMedico;

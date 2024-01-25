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
import { Registro } from '../../../models/registro/registroModel';
import RowRegistros from './RowRegistros';

interface PatientList {
  registro: Array<Registro>;
  onEdit: (patient: Patient) => void;
  onDelete: (patient: Patient) => void;
  onInfo: (patient: Patient) => void;
}

function TabelaRegistro({ registro, onEdit, onDelete, onInfo }: PatientList) {
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
          {registro.map((registro) => (
            <RowRegistros
              key={registro.id}
              registro={registro}
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

export default TabelaRegistro;

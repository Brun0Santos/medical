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

import { Speciality } from '../../../models/especialidade/especialidadeModel';
import RowEspecialidade from './RowEspecialidade';

interface ListaEspecialidade {
  especialidade: Array<Speciality>;
  onEdit: (especialidade: Speciality) => void;
  onDelete: (especialidade: Speciality) => void;
  onInfo: (especialidade: Speciality) => void;
}

function TableEspecialidade({ especialidade, onEdit, onDelete, onInfo }: ListaEspecialidade) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow style={{ backgroundColor: '#e8e8e8' }}>
            <TableCell align="left">Img</TableCell>
            <TableCell align="center">Nome</TableCell>
            <TableCell align="center">Resumo</TableCell>
            <TableCell align="center">Opções</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {especialidade.map((especialidade) => (
            <RowEspecialidade
              key={especialidade.id}
              especialidade={especialidade}
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

export default TableEspecialidade;

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

import { RegistroFromId } from '../../../../models/registro/registroModel';
import RowRegistrosFromId from './RowRegistrosFromId';

interface PatientList {
  registro: Array<RegistroFromId>;
  onEdit: (registro: RegistroFromId) => void;
  onDelete?: (registro: RegistroFromId) => void;
  onInfo: (registro: RegistroFromId) => void;
}

function TabelaRegistroFromId({ registro, onEdit, onInfo }: PatientList) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow style={{ backgroundColor: '#d4d4d4' }}>
            <TableCell align="left">#</TableCell>
            <TableCell align="center">Descrição</TableCell>
            <TableCell align="center">Data</TableCell>
            <TableCell align="center">Categoria</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Ações</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {registro.map((registro) => (
            <RowRegistrosFromId
              key={registro.id}
              registro={registro}
              onEdit={onEdit}
              onInfo={onInfo}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TabelaRegistroFromId;

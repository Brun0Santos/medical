'use client';
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Link from 'next/link';

import { Especialidade } from '../../../models/especialidade/especialidadeModel';

interface ListaEspecialidade {
  especialidade: Array<Especialidade>;
  onEdit: (especialidade: Especialidade) => void;
  onDelete: (especialidade: Especialidade) => void;
}

interface EspecialidadeRowProps {
  especialidade: Especialidade;
  onEdit: (especialidade: Especialidade) => void;
  onDelete: (especialidade: Especialidade) => void;
}

function TableEspecialidade({ especialidade, onEdit, onDelete }: ListaEspecialidade) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Nome</TableCell>
            <TableCell align="center">Descrição</TableCell>
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
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const RowEspecialidade = ({ especialidade, onEdit, onDelete }: EspecialidadeRowProps) => {
  return (
    <TableRow key={especialidade.id}>
      <TableCell align="left">{especialidade.especialidade}</TableCell>
      <TableCell align="center">{especialidade.descricao}</TableCell>
      <TableCell align="center">
        <Link href={'/medical/especialidades'}>
          <Button
            variant="contained"
            style={{ backgroundColor: '#658eff', marginRight: '10px' }}
            onClick={() => onEdit}
          >
            Editar
          </Button>
        </Link>

        <Link href={'/medical/especialidades1'}>
          <Button
            variant="contained"
            style={{ backgroundColor: '#fd4444' }}
            onClick={() => onDelete}
          >
            Deletar
          </Button>
        </Link>
      </TableCell>
    </TableRow>
  );
};

export default TableEspecialidade;

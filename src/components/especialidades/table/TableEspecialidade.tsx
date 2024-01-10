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
import { MdDelete } from 'react-icons/md';
import { MdModeEdit } from 'react-icons/md';

import { Speciality } from '../../../models/especialidade/especialidadeModel';
import * as S from './styles';

interface ListaEspecialidade {
  especialidade: Array<Speciality>;
  onEdit: (especialidade: Speciality) => void;
  onDelete: (especialidade: Speciality) => void;
}

interface EspecialidadeRowProps {
  especialidade: Speciality;
  onEdit: (especialidade: Speciality) => void;
  onDelete: (especialidade: Speciality) => void;
}

function TableEspecialidade({ especialidade, onEdit, onDelete }: ListaEspecialidade) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow style={{ backgroundColor: '#e8e8e8' }}>
            <TableCell align="left">Img</TableCell>
            <TableCell align="center">Nome</TableCell>
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
      <TableCell align="left">
        <Avatar alt="luciano" src={'https://randomuser.me/api/portraits/men/52.jpg'} />
      </TableCell>
      <TableCell align="center">{especialidade.name}</TableCell>
      <TableCell align="center">{especialidade.description}</TableCell>
      <TableCell align="left">
        <S.ButtonGroup>
          <S.ButtonEdit onClick={() => onEdit(especialidade)}>
            <MdModeEdit style={{ color: '#25435b', fontSize: '17px' }} />
          </S.ButtonEdit>

          <S.ButtonDelete onClick={() => onDelete(especialidade)}>
            <MdDelete style={{ color: '#fce0e3', fontSize: '17px' }} />
          </S.ButtonDelete>
        </S.ButtonGroup>
      </TableCell>
    </TableRow>
  );
};

export default TableEspecialidade;

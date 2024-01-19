import { Avatar, TableCell, TableRow } from '@mui/material';
import { GrStatusInfo } from 'react-icons/gr';
import { MdDelete } from 'react-icons/md';
import { MdModeEdit } from 'react-icons/md';

import { Speciality } from '../../../models/especialidade/especialidadeModel';
import * as S from './styles';

interface EspecialidadeRowProps {
  especialidade: Speciality;
  onEdit: (especialidade: Speciality) => void;
  onDelete: (especialidade: Speciality) => void;
  onInfo: (especialidade: Speciality) => void;
}

const RowEspecialidade = ({ especialidade, onEdit, onDelete, onInfo }: EspecialidadeRowProps) => {
  return (
    <TableRow key={especialidade.id}>
      <TableCell align="left">
        <Avatar alt="img" sx={{ bgcolor: '#659e6d' }}>
          {especialidade.name?.substring(0, 2).toLocaleLowerCase()}
        </Avatar>
      </TableCell>
      <TableCell align="center">
        <S.InfoContainer>{especialidade.name}</S.InfoContainer>
      </TableCell>
      <TableCell align="center">{especialidade.summary}</TableCell>
      <TableCell align="left">
        <S.ButtonGroup>
          <S.ButtonEdit onClick={() => onEdit(especialidade)}>
            <MdModeEdit style={{ color: '#25435b', fontSize: '17px' }} />
          </S.ButtonEdit>

          <S.ButtonDelete onClick={() => onDelete(especialidade)}>
            <MdDelete style={{ color: '#fce0e3', fontSize: '17px' }} />
          </S.ButtonDelete>

          <S.ButtonInfo onClick={() => onInfo(especialidade)}>
            <GrStatusInfo style={{ color: '#fff', fontSize: '17px' }} />
          </S.ButtonInfo>
        </S.ButtonGroup>
      </TableCell>
    </TableRow>
  );
};

export default RowEspecialidade;

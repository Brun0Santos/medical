'use client';

import { Avatar, TableCell, TableRow } from '@mui/material';
import { GrStatusInfo } from 'react-icons/gr';
import { MdDelete, MdModeEdit } from 'react-icons/md';

import { Registro } from '../../../models/registro/registroModel';
import * as S from './styles';

interface PatientRowProps {
  registro: Registro;
  onEdit: (registro: Registro) => void;
  onDelete: (registro: Registro) => void;
  onInfo: (registro: Registro) => void;
}

const RowRegistros = ({ registro, onEdit, onDelete, onInfo }: PatientRowProps) => {
  return (
    <TableRow key={registro.id}>
      <TableCell align="left">
        <Avatar alt="luciano" src={`https://randomuser.me/api/portraits/men/${registro.id}.jpg`} />
      </TableCell>

      <TableCell align="center">{registro.doctorId}</TableCell>
      <TableCell align="center">{registro.description}</TableCell>
      <TableCell align="center">{registro.serviceDateTime}</TableCell>
      <TableCell align="center">{registro.specialityId}</TableCell>
      <TableCell align="left">
        <S.ButtonGroup>
          <S.ButtonEdit onClick={() => onEdit(registro)}>
            <MdModeEdit style={{ color: '#25435b', fontSize: '17px' }} />
          </S.ButtonEdit>

          <S.ButtonDelete onClick={() => onDelete(registro)}>
            <MdDelete style={{ color: '#fce0e3', fontSize: '17px' }} />
          </S.ButtonDelete>

          <S.ButtonInfo onClick={() => onInfo(registro)}>
            <GrStatusInfo style={{ color: '#fff', fontSize: '17px' }} />
          </S.ButtonInfo>
        </S.ButtonGroup>
      </TableCell>
    </TableRow>
  );
};

export default RowRegistros;

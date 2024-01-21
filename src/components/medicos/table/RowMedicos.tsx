'use client';

import { Avatar, TableCell, TableRow } from '@mui/material';
import { GrStatusInfo } from 'react-icons/gr';
import { MdDelete, MdModeEdit } from 'react-icons/md';

import { Doctor } from '../../../models/medico/medicoModel';
import * as S from './styles';

interface DoctorRowProps {
  doctor: Doctor;
  onEdit: (doctor: Doctor) => void;
  onDelete: (doctor: Doctor) => void;
  onInfo: (doctor: Doctor) => void;
}

const RowMedicos = ({ doctor, onEdit, onDelete, onInfo }: DoctorRowProps) => {
  return (
    <TableRow key={doctor.id}>
      <TableCell align="left">
        <Avatar alt="luciano" src={`https://randomuser.me/api/portraits/men/${doctor.id}.jpg`} />
      </TableCell>
      <TableCell align="center">{doctor.name}</TableCell>
      <TableCell align="center">{doctor.crm}</TableCell>
      <TableCell align="center">{doctor.specialities?.map((e) => e.name)}</TableCell>
      <TableCell align="center">{doctor.email}</TableCell>
      <TableCell align="center">{doctor.cpf}</TableCell>
      <TableCell align="left">
        <S.ButtonGroup>
          <S.ButtonEdit onClick={() => onEdit(doctor)}>
            <MdModeEdit style={{ color: '#25435b', fontSize: '17px' }} />
          </S.ButtonEdit>

          <S.ButtonDelete onClick={() => onDelete(doctor)}>
            <MdDelete style={{ color: '#fce0e3', fontSize: '17px' }} />
          </S.ButtonDelete>

          <S.ButtonInfo onClick={() => onInfo(doctor)}>
            <GrStatusInfo style={{ color: '#fff', fontSize: '17px' }} />
          </S.ButtonInfo>
        </S.ButtonGroup>
      </TableCell>
    </TableRow>
  );
};

export default RowMedicos;

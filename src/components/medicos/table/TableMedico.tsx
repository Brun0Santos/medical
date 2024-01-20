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
import { MdDelete, MdModeEdit } from 'react-icons/md';

import { Doctor } from '../../../models/medico/medicoModel';
import * as S from './styles';
interface DoctorList {
  doctor: Array<Doctor>;
  onEdit: (doctor: Doctor) => void;
  onDelete: (doctor: Doctor) => void;
}

interface DoctorRowProps {
  doctor: Doctor;
  onEdit: (doctor: Doctor) => void;
  onDelete: (doctor: Doctor) => void;
}

function TableMedico({ doctor, onEdit, onDelete }: DoctorList) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow style={{ backgroundColor: '#e8e8e8' }}>
            <TableCell align="left">Img</TableCell>
            <TableCell align="center">Nome</TableCell>
            <TableCell align="center">CRM</TableCell>
            <TableCell align="center">Especialidade</TableCell>
            <TableCell align="center">Contato</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">CPF</TableCell>
            <TableCell align="center">Opções</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {doctor.map((doctor) => (
            <RowEspecialidade key={doctor.id} doctor={doctor} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const RowEspecialidade = ({ doctor, onEdit, onDelete }: DoctorRowProps) => {
  return (
    <TableRow key={doctor.id}>
      <TableCell align="left">
        <Avatar alt="luciano" src={`https://randomuser.me/api/portraits/men/${doctor.id}.jpg`} />
      </TableCell>
      <TableCell align="center">{doctor.name}</TableCell>
      <TableCell align="center">{doctor.crm}</TableCell>
      <TableCell align="center">{doctor.specialities?.map((e) => e.name)}</TableCell>
      <TableCell align="center">{doctor.contact}</TableCell>
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
        </S.ButtonGroup>
      </TableCell>
    </TableRow>
  );
};

export default TableMedico;

'use client';

import { Avatar, TableCell, TableRow } from '@mui/material';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { GrStatusInfo } from 'react-icons/gr';
import { MdModeEdit } from 'react-icons/md';

import { Registro } from '../../../models/registro/registroModel';
import * as S from './styles';

interface PatientRowProps {
  registro: Registro;
  onEdit: (registro: Registro) => void;
  onDelete?: (registro: Registro) => void;
  onInfo: (registro: Registro) => void;
}

type RegistrosCores = {
  [key: string]: string;
};

const registroCores: RegistrosCores = {
  AGUARDANDO: '#ff2f00',
  CONFIRMADO: '#0e8027',
  Ortopedia: '#5733FF',
  REJEITADO: '#ffa052',
};

const registroCoresCategoria: RegistrosCores = {
  CONSULTA: '#ff4188',
  EXAME: '#00b8e7',
  OPERACAO: '#5733FF',
  OUTROS: '#ffa052',
};

const RowRegistros = ({ registro, onEdit, onInfo }: PatientRowProps) => {
  const [date, setDate] = useState<string>('');
  // const [isVisibleInfo, setIsVisibleInfo] = useState<boolean>(false);

  // const t = () => {
  //   setIsVisibleInfo(true);
  // };

  // const out = () => {
  //   setIsVisibleInfo(false);
  // };

  useEffect(() => {
    if (registro.serviceDateTime) {
      setDate(moment(registro.serviceDateTime).format('DD/MM/YYYY HH:mm'));
    }
  }, []);

  return (
    <TableRow key={registro.id} className="slow">
      <TableCell align="left">
        <Avatar alt="luciano" src={`https://randomuser.me/api/portraits/men/${registro.id}.jpg`} />
      </TableCell>

      <TableCell align="center">
        <S.Shadow>{registro.description}</S.Shadow>
      </TableCell>

      <TableCell align="center">
        <S.Shadow>{date}</S.Shadow>
      </TableCell>

      <TableCell align="center">
        <S.InfoContainer
          style={{
            color:
              registro.typeMedicalAppointment !== undefined
                ? `${registroCoresCategoria[registro.typeMedicalAppointment]}`
                : '#f3f3f3',
          }}
        >
          {registro.typeMedicalAppointment}
        </S.InfoContainer>
      </TableCell>

      <TableCell align="center">
        <S.StatusContainer
          style={{
            color:
              registro.appointmentStatus !== undefined
                ? `${registroCores[registro.appointmentStatus]}`
                : '#f3f3f3',
          }}
        >
          {registro.appointmentStatus}
        </S.StatusContainer>
      </TableCell>
      <TableCell align="left">
        <S.ButtonGroup>
          <S.ButtonEdit onClick={() => onEdit(registro)}>
            <MdModeEdit style={{ color: '#25435b', fontSize: '17px' }} />
          </S.ButtonEdit>

          <S.ButtonInfo onClick={() => onInfo(registro)}>
            <GrStatusInfo style={{ color: '#fff', fontSize: '17px' }} />
          </S.ButtonInfo>
        </S.ButtonGroup>
      </TableCell>
    </TableRow>
  );
};

export default RowRegistros;

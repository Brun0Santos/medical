'use client';

import { Avatar, TableCell, TableRow } from '@mui/material';
import { GrStatusInfo } from 'react-icons/gr';
import { MdModeEdit } from 'react-icons/md';

import { RegistroFromId } from '../../../../models/registro/registroModel';
import * as S from '../styles';

interface PatientRowProps {
  registro: RegistroFromId;
  onEdit: (registro: RegistroFromId) => void;
  onDelete?: (registro: RegistroFromId) => void;
  onInfo: (registro: RegistroFromId) => void;
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

const RowRegistrosFromId = ({ registro, onEdit, onInfo }: PatientRowProps) => {
  return (
    <TableRow key={registro.id} className="slow">
      <TableCell align="left">
        <Avatar alt="luciano" src={`https://randomuser.me/api/portraits/men/${registro.id}.jpg`} />
      </TableCell>

      <TableCell align="center">{registro.description}</TableCell>
      <TableCell align="center">{registro.serviceDateTime}</TableCell>
      <TableCell align="center">
        <S.InfoContainer>{registro.typeMedicalAppointment}</S.InfoContainer>
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

export default RowRegistrosFromId;

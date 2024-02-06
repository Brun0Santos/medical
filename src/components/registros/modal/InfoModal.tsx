import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { MdOutlineDescription } from 'react-icons/md';
import { TbFileDescription } from 'react-icons/tb';
import { TiTag } from 'react-icons/ti';

import { LoginContext } from '../../../context/LoginContext';
import { Patient } from '../../../models/paciente/pacienteModel';
import { Registro } from '../../../models/registro/registroModel';
import * as S from './styles';

interface ModalProps {
  closeModal: () => void;
  confirmAppointment: (patient: Patient) => void;
  rejectAppointment: (patient: Patient) => void;
  categoria?: string;
  descricao?: string;
  data?: string;
  status?: string;
  registro?: Registro;
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

function InfoModal({ closeModal, registro, confirmAppointment, rejectAppointment }: ModalProps) {
  const { token } = useContext(LoginContext);
  const [date, setDate] = useState<string>('');

  useEffect(() => {
    if (registro?.serviceDateTime) {
      setDate(moment(registro?.serviceDateTime).format('DD/MM/YYYY HH:mm'));
    }
  }, []);

  return (
    <div>
      <S.TitleModal>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h2>Detalhes da Atividade</h2>
          <MdOutlineDescription />
        </div>

        <S.IconModal onClick={closeModal}>
          <IoMdClose />
        </S.IconModal>
      </S.TitleModal>

      <S.InfoModal>
        <S.ContentModal>
          <label htmlFor="">
            Categoria
            <HiOutlineClipboardList />
          </label>
          <S.InfoContainer>{registro?.typeMedicalAppointment}</S.InfoContainer>
        </S.ContentModal>

        <S.ContentModal>
          <label htmlFor="">
            Descrição
            <TbFileDescription />
          </label>
          <span>{registro?.description}</span>
        </S.ContentModal>

        <S.ContentModal>
          <label htmlFor="">
            Data
            <IoCalendarNumberOutline />
          </label>
          <span>{date}</span>
        </S.ContentModal>

        <S.ContentModal>
          <label htmlFor="">
            Status
            <TiTag />
          </label>
          <span
            style={{
              color:
                registro?.appointmentStatus !== undefined
                  ? `${registroCores[registro.appointmentStatus]}`
                  : '#f3f3f3',
            }}
          >
            {registro?.appointmentStatus}
          </span>

          {registro?.appointmentStatus == 'AGUARDANDO' && (
            <S.ContentButtonModal>
              {token?.role !== 'PATIENT' && (
                <S.ButtonConfirmar onClick={() => confirmAppointment(registro)}>
                  Confirmar
                </S.ButtonConfirmar>
              )}
              <S.ButtonRejeitar onClick={() => rejectAppointment(registro)}>
                {token?.role == 'PATIENT' ? 'Cancelar' : 'Rejeitar'}
              </S.ButtonRejeitar>
            </S.ContentButtonModal>
          )}
        </S.ContentModal>
      </S.InfoModal>
    </div>
  );
}

export default InfoModal;

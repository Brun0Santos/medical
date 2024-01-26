import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { MdOutlineDescription } from 'react-icons/md';

import { Registro } from '../../../models/registro/registroModel';
import * as S from './styles';

interface ModalProps {
  closeModal: () => void;
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

function InfoModal({ closeModal, registro }: ModalProps) {
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
          <label htmlFor="">Categoria</label>
          <span>{registro?.typeMedicalAppointment}</span>
        </S.ContentModal>

        <S.ContentModal>
          <label htmlFor="">Descrição</label>
          <span>{registro?.description}</span>
        </S.ContentModal>

        <S.ContentModal>
          <label htmlFor="">Data</label>
          <span>{registro?.serviceDateTime}</span>
        </S.ContentModal>

        <S.ContentModal>
          <label htmlFor="">Status</label>
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
              <S.ButtonConfirmar>Confirmar</S.ButtonConfirmar>
              <S.ButtonRejeitar>Rejeitar</S.ButtonRejeitar>
            </S.ContentButtonModal>
          )}
        </S.ContentModal>
      </S.InfoModal>
    </div>
  );
}

export default InfoModal;

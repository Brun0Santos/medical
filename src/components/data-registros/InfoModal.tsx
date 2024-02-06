import moment from 'moment';
import { FaRegUserCircle } from 'react-icons/fa';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { MdOutlineDescription } from 'react-icons/md';
import { TbFileDescription } from 'react-icons/tb';
import { TiTag } from 'react-icons/ti';

import { RegistroFromDoutor } from '../../models/registro/registroModel';
import * as S from './styles';

interface ModalProps {
  closeModal?: () => void;
  registro?: RegistroFromDoutor;
}

type RegistrosCores = {
  [key: string]: string;
};

type EspecialidadesCores = {
  [key: string]: string;
};

const registroCores: RegistrosCores = {
  AGUARDANDO: '#ff2f00',
  CONFIRMADO: '#0e8027',
  Ortopedia: '#5733FF',
  REJEITADO: '#ffa052',
};

const especialidadesCores: EspecialidadesCores = {
  Cardiologia: '#FF5733',
  Dermatologia: '#158374',
  Ortopedia: '#5733FF',
  Odontologia: '#ffa052',
};

function InfoModalCalendar({ closeModal, registro }: ModalProps) {
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
            Paciente
            <FaRegUserCircle />
          </label>
          <S.InfoContainer>{registro?.namePatient}</S.InfoContainer>
        </S.ContentModal>

        <S.ContentModal>
          <label>
            Descrição do caso
            <HiOutlineClipboardList />
          </label>
          <div>{registro?.description}</div>
        </S.ContentModal>

        <S.ContentModal>
          <label htmlFor="">
            Tipo do registro
            <TbFileDescription />
          </label>
          <span>{registro?.typeMedicalAppointment}</span>
        </S.ContentModal>

        <S.ContentModal>
          <label htmlFor="">
            Especialidade
            <TbFileDescription />
          </label>
          <div
            style={{
              width: '9rem',
              borderRadius: '5px',
              color: '#fff',
              paddingLeft: '5px',
              background: registro?.name !== undefined ? especialidadesCores[registro?.name] : 0,
            }}
          >
            {registro?.name}
          </div>
        </S.ContentModal>

        <S.ContentModal>
          <label htmlFor="">
            Data
            <IoCalendarNumberOutline />
          </label>
          <span>{moment(registro?.serviceDateTime).format('DD/MM/YYYY HH:mm')}</span>
        </S.ContentModal>

        <S.ContentModal>
          <label htmlFor="">
            Status
            <TiTag />
          </label>
          <div
            style={{
              color:
                registro?.appointmentStatus !== undefined
                  ? `${registroCores[registro.appointmentStatus]}`
                  : '#f3f3f3',
            }}
          >
            {registro?.appointmentStatus}
          </div>
        </S.ContentModal>
      </S.InfoModal>
    </div>
  );
}

export default InfoModalCalendar;

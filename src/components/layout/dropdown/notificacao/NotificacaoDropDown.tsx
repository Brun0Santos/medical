'use client';
import { Button } from '@mui/material';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { BiMessageSquareDots } from 'react-icons/bi';
import { FaClipboardList } from 'react-icons/fa';
import { GrFlag } from 'react-icons/gr';
import { IoIosHeart } from 'react-icons/io';

import * as S from './styles';

function NotificacaoDropDown() {
  return (
    <S.MenuContainer>
      <S.SmsTitle>
        <label>Notificações</label>
        <span>Limpar</span>
      </S.SmsTitle>
      <ul>
        <S.LiInfo>
          <S.NavImage>
            <i>
              <IoIosHeart style={{ fontSize: '17px' }} />
            </i>
          </S.NavImage>
          <S.SmsContainer>
            <S.LiTitle>Bom atendimento</S.LiTitle>
            <S.Sms>17 minutos atrás</S.Sms>
          </S.SmsContainer>
        </S.LiInfo>

        <S.LiInfo>
          <S.NavImage>
            <i>
              <AiOutlineUsergroupAdd style={{ fontSize: '17px' }} />
            </i>
          </S.NavImage>

          <S.SmsContainer>
            <S.LiTitle>Novo Registro</S.LiTitle>
            <S.Sms>7 minutos atrás</S.Sms>
          </S.SmsContainer>
        </S.LiInfo>

        <S.LiInfo>
          <S.NavImage>
            <i>
              <BiMessageSquareDots style={{ fontSize: '17px' }} />
            </i>
          </S.NavImage>

          <S.SmsContainer>
            <S.LiTitle>Nova Mensagem</S.LiTitle>
            <S.Sms>22 minutos atrás</S.Sms>
          </S.SmsContainer>
        </S.LiInfo>

        <S.LiInfo>
          <S.NavImage>
            <i>
              <GrFlag style={{ fontSize: '17px' }} />
            </i>
          </S.NavImage>

          <S.SmsContainer>
            <S.LiTitle>Nova Consulta</S.LiTitle>
            <S.Sms>2 minutos atrás</S.Sms>
          </S.SmsContainer>
        </S.LiInfo>
      </ul>
      <S.ButtonContainer>
        <Button variant="contained">
          Todas Notificações
          <FaClipboardList style={{ paddingLeft: '4px', fontSize: '15px' }} />
        </Button>
      </S.ButtonContainer>
    </S.MenuContainer>
  );
}

export default NotificacaoDropDown;

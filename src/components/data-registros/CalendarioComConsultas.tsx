import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/pt-br';

import { Button } from '@mui/material';
import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { Event as CalendarEvent } from 'react-big-calendar';

import { LoginContext } from '../../context/LoginContext';
import { useRegisterService } from '../../http';
import { RegistroFromDoutor } from '../../models/registro/registroModel';
import Layout from '../layout/Layout';
import Modal from './ConsultaModal';
import InfoModalCalendar from './InfoModal';
import * as S from './styles';

function CalendarioComConsultas() {
  const localizer = momentLocalizer(moment);
  const { token } = useContext(LoginContext);
  const [registrosPorDoutor, setRegistroPorDoutor] = useState<Array<RegistroFromDoutor>>();
  const [registroFromDoutor, setRegistroFromDoutor] = useState<RegistroFromDoutor>();
  const service = useRegisterService();
  const [showModal, setShowModal] = useState<boolean>(false);

  const result = () => {
    if (registrosPorDoutor) {
      const eventosConsultas: CalendarEvent[] = registrosPorDoutor.map((consulta) => ({
        title: consulta.description,
        start: new Date(consulta.serviceDateTime),
        end: new Date(consulta.serviceDateTime),
        data: consulta,
      }));

      return eventosConsultas;
    }
  };

  const eventosConsultas: CalendarEvent[] = result() || [];

  useEffect(() => {
    if (token?.userId) {
      service.getALlRegisterFromDoctor(token.userId).then((data) => {
        setRegistroPorDoutor(data);
      });
    }
  }, []);

  const abrirModalConsulta = (data: RegistroFromDoutor) => {
    console.log(data);
    setRegistroFromDoutor(data.data);

    setShowModal(true);
  };

  const onClose = () => {
    setShowModal(false);
  };

  return (
    <Layout title="Painel Administrativo">
      <S.NavContainer>
        <h3>Registro de consultas</h3>
        <Button variant="contained" style={{ backgroundColor: '#659e6d' }}>
          Novo Registro
        </Button>
      </S.NavContainer>

      <S.CalendarContainer>
        <Calendar
          localizer={localizer}
          events={eventosConsultas}
          startAccessor="start"
          endAccessor="end"
          style={{
            height: 500,
            opacity: 0.8,
            color: 'black',
          }}
          messages={{
            next: 'Próximo',
            previous: 'Anterior',
            today: 'Hoje',
            month: 'Mês',
            week: 'Semana',
            day: 'Dia',
            agenda: 'Agenda',
            date: 'Data',
            time: 'Hora',
            event: 'Registro do paciente',
            noEventsInRange: 'Não há registro de pacientes neste intervalo.',
          }}
          formats={{
            dayFormat: 'ddd D',
            monthHeaderFormat: 'MMMM YYYY',
          }}
          onSelectEvent={(event) => abrirModalConsulta(event as RegistroFromDoutor)}
        />
      </S.CalendarContainer>
      {showModal && (
        <Modal onClose={onClose}>
          <InfoModalCalendar closeModal={onClose} registro={registroFromDoutor} />
        </Modal>
      )}
    </Layout>
  );
}

export default CalendarioComConsultas;

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
import * as S from './styles';

function CalendarioComConsultas() {
  const localizer = momentLocalizer(moment);
  const { token } = useContext(LoginContext);
  const [registrosPorDoutor, setRegistroPorDoutor] = useState<Array<RegistroFromDoutor>>();
  const service = useRegisterService();

  const result = () => {
    if (registrosPorDoutor) {
      const eventosConsultas: CalendarEvent[] = registrosPorDoutor.map((consulta) => ({
        title: consulta.description,
        start: new Date(consulta.serviceDateTime),
        end: new Date(consulta.serviceDateTime),
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

  const abrirModalConsulta = (data: string) => {
    console.log(data);
  };

  return (
    <Layout title="Painel Administrativo">
      <S.NavContainer>
        <h3>Registro de consultas</h3>
        <Button variant="contained" style={{ backgroundColor: '#659e6d' }}>
          Novo Registro
        </Button>
      </S.NavContainer>

      <div>
        <Calendar
          localizer={localizer}
          events={eventosConsultas}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
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
          onSelectEvent={(event) => abrirModalConsulta(event as string)}
        />
      </div>
    </Layout>
  );
}

export default CalendarioComConsultas;

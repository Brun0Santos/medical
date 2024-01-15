'use client';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import Layout from '../../../layout/Layout';
import * as S from './styles';

function FrequenciaConsulta() {
  const data = [
    { name: 'Jan', consultas: 11 },
    { name: 'Feb', consultas: 43, pv: 1398, amt: 2210 },
    { name: 'Mar', consultas: 22, pv: 9800, amt: 2290 },
    { name: 'Apr', consultas: 19, pv: 3908, amt: 2000 },
    { name: 'May', consultas: 9, pv: 4800, amt: 2181 },
    { name: 'Jun', consultas: 15, pv: 3800, amt: 2500 },
    { name: 'Jul', consultas: 29, pv: 4300, amt: 2100 },
    { name: 'Ago', consultas: 33, pv: 4300, amt: 2100 },
    { name: 'Set', consultas: 52, pv: 4300, amt: 2100 },
  ];

  return (
    <Layout title="Painel Administrativo">
      <h4>Frequência de consultas</h4>
      <S.DivTitleGraficoPizza>
        <span>Consultas registradas mensalmente</span>
        <ResponsiveContainer width="80%" height={400}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="consultas" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </S.DivTitleGraficoPizza>
    </Layout>
  );
}

export default FrequenciaConsulta;

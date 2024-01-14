'use client';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';

function DadosAntedimento() {
  const data1 = [
    { name: 'Aceito', value: 128 },
    { name: 'Rejeitado', value: 7 },
    { name: 'Espera', value: 29 },
  ];

  const COLORS = ['#00C49F', '#ff5263', '#9966FF'];

  return (
    <div>
      <PieChart width={260} height={260}>
        <Pie data={data1} cx={100} cy={100} outerRadius={80} fill="#8884d8" dataKey="value">
          {data1.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />

        <Legend />
      </PieChart>
    </div>
  );
}

export default DadosAntedimento;

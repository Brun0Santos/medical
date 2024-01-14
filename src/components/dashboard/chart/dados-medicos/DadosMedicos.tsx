'use client';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';

function DadosMedicos() {
  const data1 = [
    { name: 'Homens', value: 182 },
    { name: 'Mulheres', value: 236 },
    { name: 'Outros', value: 72 },
  ];

  const COLORS = ['#FF5733', '#FFC300', '#FF33FF'];

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

export default DadosMedicos;

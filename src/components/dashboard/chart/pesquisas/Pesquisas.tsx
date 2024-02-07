'use client';

import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

function Pesquisas() {
  const data = [
    { name: 'January', Pesquisas: 12 },
    { name: 'February', Pesquisas: 19 },
    { name: 'March', Pesquisas: 3 },
    { name: 'April', Pesquisas: 5 },
    { name: 'May', Pesquisas: 2 },
    { name: 'June', Pesquisas: 3 },
    { name: 'July', Pesquisas: 10 },
  ];

  return (
    <div>
      <LineChart width={670} height={250} data={data} margin={{ top: 20, right: 20 }} id="1">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Pesquisas" stroke="#e20447" />
      </LineChart>
    </div>
  );
}

export default Pesquisas;

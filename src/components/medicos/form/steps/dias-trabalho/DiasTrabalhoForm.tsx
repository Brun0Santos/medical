/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Paper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

// interface Testes {
//   data: any;
//   updateFiledHandler: any;
// }

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Segunda-Feira', 159, 6.0, 24, 4.0),
  createData('Terça-Feira', 237, 9.0, 37, 4.3),
  createData('Quarta-Feira', 262, 16.0, 24, 6.0),
  createData('Quinta-Feira', 305, 3.7, 67, 4.3),
  createData('Sexta-Feira', 356, 16.0, 49, 3.9),
  createData('Sábado', 356, 16.0, 49, 3.9),
  createData('Domingo', 356, 16.0, 49, 3.9),
];

function DiasTrabalhoForm() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow style={{ backgroundColor: '#e8e8e8' }}>
            <TableCell align="left">Dia da Semana</TableCell>
            <TableCell align="center">Ativar</TableCell>
            <TableCell align="center">Intervalo pela Manhã</TableCell>
            <TableCell align="right">Intervalo pela Tarde</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">
                <Switch defaultChecked />
              </TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DiasTrabalhoForm;

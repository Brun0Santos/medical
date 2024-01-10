import { Box, Button } from '@mui/material';

import Layout from '../layout/Layout';

function Medicos() {
  return (
    <Layout title="Especialidades">
      <Box display={'flex'} justifyContent={'space-between'}>
        <div>Médicos</div>
        <Button variant="contained" style={{ backgroundColor: '#659e6d' }}>
          Novo Médico
        </Button>
      </Box>
    </Layout>
  );
}

export default Medicos;

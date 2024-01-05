import { Box } from '@mui/material';
import Button from '@mui/material/Button';

import Layout from '../layout/Layout';

function Especialidade() {
  return (
    <Layout title="Especialidades">
      <Box display={'flex'} justifyContent={'space-between'}>
        <div>Especialidades</div>
        <Button variant="contained" style={{ backgroundColor: '#659e6d' }}>
          Nova Especialidade
        </Button>
      </Box>
    </Layout>
  );
}

export default Especialidade;

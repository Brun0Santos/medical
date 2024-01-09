import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Link from 'next/link';

import Layout from '../layout/Layout';

function Especialidade() {
  return (
    <Layout title="Especialidades">
      <Box display={'flex'} justifyContent={'space-between'}>
        <div>Especialidades</div>
        <Link href={'/medical/especialidades/nova-especialidade'}>
          <Button variant="contained" style={{ backgroundColor: '#659e6d' }}>
            Nova Especialidade
          </Button>
        </Link>
      </Box>
    </Layout>
  );
}

export default Especialidade;

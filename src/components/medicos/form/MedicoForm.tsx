import { Button, TextField } from '@mui/material';
import Link from 'next/link';

import Layout from '../../layout/Layout';
import * as S from './styles';

function MedicoForm() {
  return (
    <Layout title="Painel de Administração">
      <S.Container>
        <S.NavContainer>
          <div>Novo Médico</div>
          <Link href={'/medical/medicos'}>
            <Button variant="contained" style={{ backgroundColor: '#659e6d' }}>
              Cancelar
            </Button>
          </Link>
        </S.NavContainer>

        <S.ContentContainer>
          <TextField
            fullWidth
            id="fullWidth"
            variant="outlined"
            type="text"
            label="Nome"
            placeholder="Nome do médico"
            // onChange={(e) => setEspecialidade(e.target.value)}
            // value={especialidade}
          />

          <TextField
            fullWidth
            label="Descrição do Produto"
            placeholder="Descrição da especialidade"
            multiline
            rows={4}
            style={{ marginTop: '30px' }}
            // onChange={(e) => setDescricao(e.target.value)}
            // value={descricao}
          />
          <Link href={'/medical/medicos'}>
            <Button
              variant="contained"
              style={{ backgroundColor: '#4070f4', width: '100px', marginTop: '10px' }}
            >
              Salvar
            </Button>
          </Link>
        </S.ContentContainer>
      </S.Container>
    </Layout>
  );
}

export default MedicoForm;

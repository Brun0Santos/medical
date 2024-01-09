'use client';
import { Button, TextField } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';

import { Especialidade } from '../../../models/especialidade/especialidadeModel';
import Layout from '../../layout/Layout';
import * as S from './styles';

function EspecialidadeForm() {
  const [especialidade, setEspecialidade] = useState<string>('');
  const [descricao, setDescricao] = useState<string>('');

  const sendDadosEspecialidade = () => {
    const especialidades: Especialidade = {
      especialidade,
      descricao,
    };
    console.log(especialidades);
  };

  return (
    <Layout title="Painel de Administração">
      <S.Container>
        <S.NavContainer>
          <div>Nova Especialidade</div>
          <Link href={'/medical/especialidades'}>
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
            label="Especialidade"
            placeholder="Testes"
            onChange={(e) => setEspecialidade(e.target.value)}
          />

          <TextField
            fullWidth
            label="Descrição do Produto"
            placeholder="Descrição da especialidade"
            multiline
            rows={4}
            style={{ marginTop: '30px' }}
            onChange={(e) => setDescricao(e.target.value)}
          />
          <Link href={'/medical/especialidades'}>
            <Button
              variant="contained"
              style={{ backgroundColor: '#4070f4', width: '80px', marginTop: '10px' }}
              onClick={sendDadosEspecialidade}
            >
              Salvar
            </Button>
          </Link>
        </S.ContentContainer>
      </S.Container>
    </Layout>
  );
}

export default EspecialidadeForm;

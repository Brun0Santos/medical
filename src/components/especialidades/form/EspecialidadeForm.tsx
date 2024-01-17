'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { useClienteService } from '../../../http/index';
import { Speciality } from '../../../models/especialidade/especialidadeModel';
import { specialittValidationSchema } from '../../../validation/especialidade/specialityValidation';
import Layout from '../../layout/Layout';
import * as S from './styles';

function EspecialidadeForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(specialittValidationSchema),
  });

  const service = useClienteService();
  const searchParams = useSearchParams();
  const searchId = searchParams.get('id');

  useEffect(() => {
    if (searchId) {
      setValue('name', 'Nova especialidade de teste');
      setValue('description', 'Uma descricao de teste apos o edit');
    }
  }, [searchId]);

  const handleSubmitForm = async (data: Speciality) => {
    try {
      const result = await toast.promise(service.salvarEspecialidade(data), {
        loading: 'Salvando especialidade...',
        success: () => 'Especialidade cadastrada!',
        error: 'Erro ao cadastrar especialidade!',
      });
      setValue('name', '');
      setValue('summary', '');
      setValue('description', '');

      console.log('Dados enviados:', result);
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <Layout title="Painel de Administração">
      <S.NavContainer>
        <h4>Cadastros de Especialidade</h4>
        <Link href={'/medical/especialidades'}>
          <Button variant="contained" style={{ backgroundColor: '#659e6d' }}>
            Voltar
          </Button>
        </Link>
      </S.NavContainer>

      <S.ContentContainer onSubmit={handleSubmit(handleSubmitForm)}>
        <div>
          <S.InputBox>
            <S.LabelInput htmlFor="name">Nome da Especialidade:</S.LabelInput>

            <input
              type="text"
              id="name"
              className={errors?.name?.message && 'input-error'}
              {...register('name', { required: true })}
              placeholder="Nome da especialidade"
            />
            {errors?.name?.message && <S.ErrorMessage>{errors?.name?.message}</S.ErrorMessage>}
          </S.InputBox>
        </div>

        <S.InputBox>
          <S.LabelInput htmlFor="resumo">Resumo:</S.LabelInput>
          <input
            type="text"
            id="summary"
            className={errors?.summary?.message && 'input-error'}
            placeholder="Resumo da especialidade"
            {...register('summary')}
          />
          {errors?.summary?.message && <S.ErrorMessage>{errors?.summary?.message}</S.ErrorMessage>}
        </S.InputBox>

        <S.InputBox>
          <S.LabelInput htmlFor="description">Descrição:</S.LabelInput>
          <input
            type="text"
            id="description"
            className={errors?.description?.message && 'input-error'}
            placeholder="Descrição mais detalhada"
            {...register('description')}
          />
          {errors?.description?.message && (
            <S.ErrorMessage>{errors?.description?.message}</S.ErrorMessage>
          )}
        </S.InputBox>

        <Button
          type="submit"
          variant="contained"
          style={{ backgroundColor: '#4070f4', width: '100px', marginTop: '16px' }}
        >
          {searchId ? 'Atualizar' : 'Salvar'}
        </Button>
      </S.ContentContainer>
    </Layout>
  );
}

export default EspecialidadeForm;

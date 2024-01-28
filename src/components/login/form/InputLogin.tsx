'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaLock, FaUser } from 'react-icons/fa';
import { TbSend } from 'react-icons/tb';

import { useLoginService } from '../../../http';
import { Login } from '../../../models/login/loginModel';
import { loginValidationSchema } from '../../../validation/login/loginValidation';
import * as S from './styles';

const Inputlogin = () => {
  const router = useRouter();

  const service = useLoginService();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
  });

  const handleSubmitForm = async (data: Login) => {
    try {
      await toast.promise(service.login(data), {
        loading: 'Salvando especialidade...',
        success: () => 'Login realizado com sucesso!',
        error: 'Erro ao realizar o login!',
      });
      setValue('login', '');
      setValue('password', '');
      router.push('/medical/home');
    } catch (_) {
      console.error('Erro:');
    }
  };

  return (
    <S.FormContainers onSubmit={handleSubmit(handleSubmitForm)}>
      <S.Row>
        <S.InputContainer2>
          <S.Icon>
            <FaUser />
          </S.Icon>
          <S.Input
            type="text"
            placeholder="Login"
            id="login"
            className={errors?.login?.message && 'input-error'}
            {...register('login', { required: true })}
          />
        </S.InputContainer2>
        {errors?.login?.message && <S.ErrorMessage>{errors?.login?.message}</S.ErrorMessage>}
      </S.Row>

      <S.Row>
        <S.InputContainer2>
          <S.Icon>
            <FaLock />
          </S.Icon>
          <S.Input
            type="password"
            placeholder="Login"
            id="password"
            className={errors?.login?.message && 'input-error'}
            {...register('password', { required: true })}
          />
        </S.InputContainer2>
        {errors?.password?.message && <S.ErrorMessage>{errors?.password?.message}</S.ErrorMessage>}
      </S.Row>

      <div className="field button-field">
        <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <TbSend style={{ marginRight: '8px' }} />
          Enviar
        </button>
      </div>
    </S.FormContainers>
  );
};

export default Inputlogin;

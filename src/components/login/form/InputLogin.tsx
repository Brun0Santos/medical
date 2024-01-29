/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaLock, FaUser } from 'react-icons/fa';
import { TbSend } from 'react-icons/tb';

import { useLoginService } from '../../../http';
import { loginValidationSchema } from '../../../validation/login/loginValidation';
import * as S from './styles';

interface Teste {
  login?: string;
  password?: string;
}

const Inputlogin = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const service = useLoginService();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
  });

  const handleSubmitForm = async (data: Teste) => {
    await signIn('login', {
      login: data.login,
      password: data.password,
      redirect: false,
    }).then((data) => {
      console.log('sucesso');
      // console.log(data);
      // router.replace('/medical/home');
    });
    console.log(data.password);

    // try {
    //   await toast.promise(service.login(data), {
    //     loading: 'Salvando especialidade...',
    //     success: () => 'Login realizado com sucesso!',
    //     error: 'Erro ao realizar o login!',
    //   });
    //   setValue('login', '');
    //   setValue('password', '');
    //   // router.push('/medical/home');
    // } catch (_) {
    //   console.error('Erro:');
    // }
  };

  useEffect(() => {
    if (session) {
      console.log(session?.token);
      console.log(session?.role);
    }
  }, [session]);

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

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useForm } from 'react-hook-form';

import * as S from '../../styles';

interface Testes {
  datas: any;
  updateFiledHandler: any;
}

export default function EspecialidadesForm({ datas, updateFiledHandler }: Testes) {
  const { register, handleSubmit } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmitForm = (data: any) => {
    console.log('teste');
    console.log(data);
  };

  return (
    <S.Container>
      <S.NavContainer>
        <h3>Especialidade</h3>
      </S.NavContainer>

      <S.ContentContainer onSubmit={handleSubmit(handleSubmitForm)}>
        <S.InputBox>
          <S.LabelInput htmlFor="name">Nome da Especialidade:</S.LabelInput>
          <input
            type="text"
            id="name"
            {...register('name')}
            placeholder="Especialidade"
            value={datas.name}
            onChange={(e) => updateFiledHandler('name', e.target.value)}
          />
        </S.InputBox>
      </S.ContentContainer>
    </S.Container>
  );
}

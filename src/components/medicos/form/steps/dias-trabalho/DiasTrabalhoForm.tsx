'use client';
import Image from 'next/image';

import Send from '../../../../../../public/Mail.svg';
import * as S from './styles';

function DiasTrabalhoForm() {
  return (
    <S.ImgContainer>
      <Image src={Send} alt="Meu Ícone" width={270} height={270} />
    </S.ImgContainer>
  );
}

export default DiasTrabalhoForm;

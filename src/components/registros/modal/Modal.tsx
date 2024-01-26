'use client';
import * as S from './styles';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

function Modal({ onClose, children }: ModalProps) {
  return (
    <div>
      <S.Backdrop onClick={onClose}>
        <S.ModalWrapper onClick={(e) => e.stopPropagation()}>{children}</S.ModalWrapper>
      </S.Backdrop>
    </div>
  );
}

export default Modal;

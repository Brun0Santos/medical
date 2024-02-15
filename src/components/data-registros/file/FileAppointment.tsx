'use client';
import { FaFileDownload } from 'react-icons/fa';

import { RegistroFromDoutor } from '../../../models/registro/registroModel';
import * as S from './styles';

interface RegistroProps {
  registro?: RegistroFromDoutor;
}

function FileAppointment({ registro }: RegistroProps) {
  const handleDownloadOrDisplayImage = (consultaId: number, file: string) => {
    // Converta a string base64 para Blob
    const byteCharacters = atob(file);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'image/png' });

    // Crie um link para download
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `documento-${consultaId}.png`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <S.AnexoFile>
      <S.Icon>
        <FaFileDownload />
      </S.Icon>
      <div key={1}>
        <span
          onClick={() =>
            handleDownloadOrDisplayImage(
              registro?.id ? Number(registro?.id) : 1,
              registro?.file ? registro?.file : '',
            )
          }
        >
          Anexo {registro?.id}
        </span>
      </div>
    </S.AnexoFile>
  );
}

export default FileAppointment;

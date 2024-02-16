import { Avatar, Button } from '@mui/material';
// import axios from 'axios';
import Link from 'next/link';
import { ChangeEvent, useContext, useState } from 'react';
// import React, { ChangeEvent, useState } from 'react';
import { GoVerified } from 'react-icons/go';

import { LoginContext } from '../../../context/LoginContext';
import { useFileService } from '../../../http';
import Layout from '../../layout/Layout';
import * as S from './styles';

function PerfilAvatar() {
  // const [selectedFile, setSelectedFile] = useState<File | null>(null);
  // const [preview, setPreview] = useState<string | null>(null);

  // const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.files && event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     setSelectedFile(file);

  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setPreview(reader.result as string);
  //     };

  //     reader.readAsDataURL(file);

  //     // Limpar o valor do input para permitir a seleção do mesmo arquivo novamente
  //     event.target.value = '';
  //   }
  // };

  // const handleRemoveFile = () => {
  //   setSelectedFile(null);
  //   setPreview(null);
  // };

  // const handleFileUpload = async () => {
  //   if (!selectedFile) {
  //     console.error('Nenhum arquivo selecionado.');
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append('file', selectedFile);

  //   try {
  //     await axios.post('http://seu-backend.com/upload', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });

  //     console.log('Upload bem-sucedido!');
  //   } catch (error) {
  //     console.error('Erro no upload:', error);
  //   }
  // };
  const { token } = useContext(LoginContext);

  const [, setSelectedFileName] = useState<File | null>();

  const service = useFileService();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFileName(event.target.files[0]);
      const file = event.target.files[0];

      const formData = new FormData();

      formData.append('id', String(token?.userId));
      formData.append('avatar', file);

      service
        .saveRegister(formData)
        .then(() => console.log('sucesso'))
        .catch(() => {});
    }
  };

  return (
    <Layout title="Painel Administrativo">
      <S.Container>
        <S.NavContainer>
          <h2>Perfil</h2>
          <Link href={'/medical/pacientes/novo-paciente'}>
            <Button variant="contained" style={{ backgroundColor: '#659e6d' }}>
              Voltar
            </Button>
          </Link>
        </S.NavContainer>

        <S.AvatarContainer>
          <div>
            <h4>Seu avatar</h4>
            <p>Este é o seu avatar, clique nele para modificá-lo.</p>
          </div>

          <div style={{ display: 'flex' }}>
            <label htmlFor="fileInput">
              <Avatar
                className="fileInput"
                alt="luciano"
                src={`https://randomuser.me/api/portraits/men/2.jpg`}
                style={{
                  cursor: 'pointer',
                  fontSize: '13px',
                }}
              />
            </label>
            <input
              type="file"
              id="fileInput"
              onChange={handleFileChange}
              style={{ display: 'none' }}
              multiple
            />

            <span
              style={{
                paddingLeft: '7px',
                fontSize: '13px',

                margin: '1px solid #fefefe',
              }}
            ></span>
          </div>
        </S.AvatarContainer>
        <S.DivTeste>Um avatar é opcional, mas fortemente recomendado.</S.DivTeste>

        <S.EmailContainer>
          <div>
            <h4>Seu e-mail</h4>
            <p>Esse é o seu e-mail utilizado no cadastro.</p>
            <S.Email>bruno@gmail.com</S.Email>
          </div>
        </S.EmailContainer>
        <S.DivTeste>
          <GoVerified />
          E-mail verificado
        </S.DivTeste>
      </S.Container>
    </Layout>
  );
}

export default PerfilAvatar;

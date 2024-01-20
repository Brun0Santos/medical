'use client';
import { Button } from '@mui/material';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FiSearch } from 'react-icons/fi';

import { Address } from '../../../../../models/endereco/enderecoModel';
import * as S from './styles';

interface MedicoFormContatoProps {
  datas: Address;
  updateFiledHandler: (fieldName: string, value: string) => void;
}

function MedicoFormContato({ datas, updateFiledHandler }: MedicoFormContatoProps) {
  const getCep = async () => {
    try {
      await axios.get(`https://viacep.com.br/ws/${datas.zipCode}/json/`).then((info) => {
        updateFiledHandler('neighborhood', info.data.bairro);
        updateFiledHandler('city', info.data.localidade);
        updateFiledHandler('state', info.data.uf);
      });
      toast.success('Endereço encontrado!');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Container>
      <S.NavContainer>
        <h3>Endereço</h3>
        <Button variant="contained" style={{ backgroundColor: '#659e6d' }} onClick={getCep}>
          Buscar CEP
          <span>
            <FiSearch />
          </span>
        </Button>
      </S.NavContainer>

      <S.ContentContainer>
        <S.CentroContainer>
          <S.InputBox>
            <S.LabelInput htmlFor="zipCode">CEP:</S.LabelInput>
            <input
              type="text"
              id="zipCode"
              value={datas.zipCode}
              placeholder="CEP"
              onChange={(e) => updateFiledHandler('zipCode', e.target.value)}
            />
          </S.InputBox>

          <S.InputBox>
            <S.LabelInput htmlFor="crm">Número:</S.LabelInput>
            <input
              type="text"
              id="number"
              placeholder="Número"
              value={datas.number}
              onChange={(e) => updateFiledHandler('number', e.target.value)}
            />
          </S.InputBox>
        </S.CentroContainer>

        <S.CentroContainer>
          <S.InputBox>
            <S.LabelInput htmlFor="contact">Complemento:</S.LabelInput>
            <input
              type="text"
              id="complement"
              placeholder="Complemento"
              value={datas.complement}
              onChange={(e) => updateFiledHandler('complement', e.target.value)}
            />
          </S.InputBox>

          <S.InputBox>
            <S.LabelInput htmlFor="email">Bairro:</S.LabelInput>
            <input
              type="text"
              id="neighborhood"
              placeholder="Bairro"
              value={datas.neighborhood}
              onChange={(e) => updateFiledHandler('neighborhood', e.target.value)}
              disabled
            />
          </S.InputBox>
        </S.CentroContainer>

        <S.CentroContainer>
          <S.InputBox>
            <S.LabelInput htmlFor="cpf">Cidade:</S.LabelInput>
            <input
              type="text"
              id="city"
              placeholder="Cidade"
              value={datas.city}
              onChange={(e) => updateFiledHandler('city', e.target.value)}
              disabled
            />
          </S.InputBox>

          <S.InputBox>
            <S.LabelInput htmlFor="cpf">Estado:</S.LabelInput>
            <input
              type="text"
              id="state"
              placeholder="Estado"
              value={datas.state}
              onChange={(e) => updateFiledHandler('state', e.target.value)}
              disabled
            />
          </S.InputBox>
        </S.CentroContainer>
      </S.ContentContainer>
    </S.Container>
  );
}

export default MedicoFormContato;

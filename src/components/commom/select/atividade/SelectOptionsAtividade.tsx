import React, { ChangeEvent, FC } from 'react';

import { Speciality } from '../../../../models/especialidade/especialidadeModel';

// interface OptionsSelect {
//   value: string;
//   label: string;
// }

interface SelectProps {
  options: Array<Speciality>;
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectOptionsAtividade: FC<SelectProps> = ({ options, value, onChange }) => {
  return (
    <select value={value} onChange={onChange}>
      <option value="">Escolha uma especialidade</option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default SelectOptionsAtividade;

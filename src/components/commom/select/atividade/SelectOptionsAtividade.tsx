import React, { ChangeEvent, FC } from 'react';

import { Doctor } from '../../../../models/medico/medicoModel';

// interface OptionsSelect {
//   value: string;
//   label: string;
// }

interface SelectProps {
  options: Array<Doctor>;
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectOptionsAtividade: FC<SelectProps> = ({ options, value, onChange }) => {
  return (
    <select value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.id} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default SelectOptionsAtividade;

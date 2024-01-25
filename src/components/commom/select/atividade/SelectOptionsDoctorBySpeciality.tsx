import React, { ChangeEvent, FC } from 'react';

import { DoctorBySpeciality } from '../../../../models/medico/medicoModel';

interface SelectProps {
  options: Array<DoctorBySpeciality>;
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectOptionsDoctorBySpeciality: FC<SelectProps> = ({ options, value, onChange }) => {
  return (
    <select value={value} onChange={onChange}>
      <option value="">Escolha um profissional da saúde</option>
      {options.map((option) => (
        <option key={option.doctorId} value={option.doctorId}>
          {option.nameDoctor}
        </option>
      ))}
    </select>
  );
};

export default SelectOptionsDoctorBySpeciality;

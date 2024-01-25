import React, { ChangeEvent, FC } from 'react';

interface OptionsSelect {
  value: string;
  label: string;
}

interface SelectProps {
  options: Array<OptionsSelect>;
  value?: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectOptions: FC<SelectProps> = ({ options, value, onChange }) => {
  return (
    <select value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectOptions;

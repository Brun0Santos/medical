import * as S from './styles';

interface RadioGroupProps {
  label: string;
  options: { label: string; value: string }[];
  selectedValue?: string;
  onChange: (value: string) => void;
}

function Gender({ label, options, selectedValue, onChange }: RadioGroupProps) {
  return (
    <S.ContainerRadio>
      <div>
        <label>{label}</label>
      </div>
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            id={`option-${option.value}`}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
          />
          {option.label}
        </label>
      ))}
    </S.ContainerRadio>
  );
}

export default Gender;

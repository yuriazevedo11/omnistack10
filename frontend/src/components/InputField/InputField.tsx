import React from 'react';

import './InputField.scss';

interface Props {
  id: string;
  name: string;
  type?: string;
  value: string;
  onChange: any;
  label?: string;
  required?: boolean;
}

const InputField: React.FC<Props> = ({
  id,
  name,
  type,
  value,
  onChange,
  label,
  required,
}) => {
  return (
    <div className="input-field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
      />
    </div>
  );
};

export default InputField;

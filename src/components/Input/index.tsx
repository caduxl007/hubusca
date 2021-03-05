import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = ({ name, placeholder, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isError={!!error}>
      <span>{placeholder}</span>
      <input
        name={name}
        placeholder={placeholder}
        {...rest}
        defaultValue={defaultValue}
        ref={inputRef}
      />
      {error && <p>{error}</p>}
    </Container>
  );
};

export default Input;

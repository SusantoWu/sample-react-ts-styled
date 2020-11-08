import React, { FunctionComponent, useCallback, useState } from 'react';
import styled from 'styled-components';

const FieldControl = styled('div')`
  margin-bottom: 1em;

  & > label {
    margin-right: 0.5em;
  }
`;

const FieldError = styled('span')`
  color: red;
  margin-left: 0.5em;
`;

interface FieldProps {
  name: string;
  value?: any;
  onChange: (name: string, value: any, valid: boolean) => void;
  validator?: (name: string, value: any) => boolean;
  validationMessage?: string;
}

const useValidate = (
  value: any,
  onChange: (name: string, value: any, valid: boolean) => void,
  validator?: (name: string, value: any) => boolean) => {
  const [innerValue, setInnerValue] = useState(value);
  const [valid, setValid] = useState(true);

  const validate = useCallback((name: string, newValue: any) => {
    setInnerValue(newValue);

    let newValid = true;
    if (validator) {
      newValid = validator(name, newValue);
      setValid(newValid);
    }

    onChange(name, newValue, newValid);
  }, [setInnerValue, setValid, validator, onChange]);

  return [innerValue, valid, validate];
}

const Field: FunctionComponent<FieldProps> = ({ children, name, value, onChange, validator, validationMessage }) => {
  const [innerValue, valid, validate] = useValidate(value, onChange, validator);
  return (
    <FieldControl>
      {children && <label>{children}</label>}
      <input type="number" value={innerValue} onChange={(event) => validate(name, Number(event.target.value))} />
      {!valid && <FieldError>{validationMessage}</FieldError>}
    </FieldControl>
  );
}

export default Field;

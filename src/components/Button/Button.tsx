import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { variable, Color, ColorType } from '../../styles';

const getColor = (prop: keyof Color, colorType?: ColorType) => (colorType ? variable[colorType] : variable.primary)[prop];

const ButtonButton = styled('button') <{ colorType?: ColorType }>`
  font-size: inherit;
  border: none;
  padding: 0.8em 2em;
  color: #ffffff;
  background-color:${props => getColor('color', props.colorType)};

  :focus,
  :active {
    outline: none;
  }

  :hover {
    cursor: pointer;
  }

  :active {
    background-color:${props => getColor('dark', props.colorType)};
  }

  :disabled {
    background-color:${props => getColor('light', props.colorType)};
  }
`;

interface ButtonProps {
  color?: ColorType;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: FunctionComponent<ButtonProps> = ({ color, disabled, onClick, children }) => {
  return (
    <ButtonButton colorType={color} disabled={disabled} onClick={onClick}>
      {children}
    </ButtonButton>
  );
}

export default Button;

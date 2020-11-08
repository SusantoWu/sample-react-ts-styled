import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { variable } from '../../styles';

const StepperContainer = styled('div')`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StepperStep = styled('div') <{ active?: boolean }>`
  position: relative;
  font-size: 2em;
  line-height: 1;
  width: 2em;
  padding: 0.5em;
  margin: 0 1em;
  text-align: center;
  color: #ffffff;
  border-radius: 50%;
  background-color: ${props => variable.primary[props.active ? 'color' : 'light']};

  :not(:first-child):after {
    content: "";
    position: absolute;
    right: 2em;
    top: 50%;
    width: 2em;
    height: 5px;
    background-color: inherit;
  }
`;

export interface Step<T = {}> {
  key: string;
  component: FunctionComponent<T>;
}

interface StepperProps {
  steps: Step[];
  active: string;
}

const Stepper: FunctionComponent<StepperProps> = ({ steps, active }) => {
  const activeIndex = steps.findIndex((step) => step.key === active);
  return (
    <StepperContainer>
      {steps.map((step, i) =>
        <StepperStep active={i <= activeIndex} key={step.key}>{i + 1}</StepperStep>
      )}
    </StepperContainer>
  );
}

export default Stepper;

import styled from 'styled-components';

export const ButtonGroup = styled('div')`
  position: absolute;
  bottom: 1.5em;
  right: 1.5em;

  button + button {
    margin-left: 1em;
  }
`;

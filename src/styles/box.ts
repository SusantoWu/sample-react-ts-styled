import styled from 'styled-components';
import { fullScreenMixin } from './mixins';

export const FullScreenBox = styled('div') <{ direction?: string; align?: string }>`
  ${fullScreenMixin}
  display: flex;
  justify-content: ${props => props.align ? props.align : 'center'};
  align-items: center;
  flex-direction: ${props => props.direction ? props.direction : 'row'};
`;

export const Scrollable = styled('div')`
  overflow-y: auto;
  margin: 2em auto;
  height: 70%;
  width: 70%;
`;

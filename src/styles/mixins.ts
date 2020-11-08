import { css } from 'styled-components';

export const fullScreenMixin = css`
  display: block;
  width: 100%;
  height: 100%;
`;

export const mediaQueryMixin = (props: { min?: number, max?: number, style: string }) => css`
  @media 
  ${props.max && `(max-width: ${props.max}px)`} 
  ${props.max && props.min && 'and'} 
  ${props.min && `(min-width: ${props.min}px)`} {
    ${props.style}
  }
`;

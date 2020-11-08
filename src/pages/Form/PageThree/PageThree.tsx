import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../../components/Button';
import { FullScreenBox, variable } from '../../../styles';

export const PAGE_THREE_KEY = 'page-3';

const Message = styled('h1')`
  display: block;
  font-size: 4em;
  line-height: 1;
  margin: 0;
  color: ${variable.primary.color};
`;

const PageThree: FunctionComponent = () => {
  const history = useHistory();

  return (
    <FullScreenBox direction="column" align="space-evenly">
      <Message>Success!</Message>
      <Button color="secondary" onClick={() => history.push('/')}>Home</Button>
    </FullScreenBox>
  );
}

export default PageThree;

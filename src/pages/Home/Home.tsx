import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import { FullScreenBox } from '../../styles';
import { clearForm } from '../../store';
import { PAGE_ONE_KEY } from '../Form/PageOne';

const Home: FunctionComponent<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();
  dispatch(clearForm());

  return (
    <FullScreenBox>
      <Button onClick={() => history.push(`/form/${PAGE_ONE_KEY}`)}>New Request</Button>
    </FullScreenBox>
  );
}

export default Home;

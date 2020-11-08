import React, { FunctionComponent } from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import Stepper, { Step } from '../../components/Stepper';
import { PageProps } from './page';
import PageOne, { PAGE_ONE_KEY } from './PageOne';
import PageTwo, { PAGE_TWO_KEY } from './PageTwo';
import PageThree, { PAGE_THREE_KEY } from './PageThree';

const steps: Step<PageProps>[] = [
  {
    key: PAGE_ONE_KEY,
    component: PageOne
  },
  {
    key: PAGE_TWO_KEY,
    component: PageTwo
  },
  {
    key: PAGE_THREE_KEY,
    component: PageThree
  }
];

interface RouterProps {
  page: string;
}

const Component = (page: string) => {
  const stepIndex = steps.findIndex((step) => step.key === page);
  const step = steps[stepIndex];
  const previous = steps[stepIndex - 1] || undefined;
  const next = steps[stepIndex + 1] || undefined;
  return step ? (<step.component previous={previous} next={next} />) : (<Redirect to="/" />);
}

const Form: FunctionComponent<RouteComponentProps<RouterProps>> = ({ match }) => {
  const {
    params: { page }
  } = match;

  return (
    <React.Fragment>
      <Stepper steps={steps} active={page}></Stepper>
      {Component(page)}
    </React.Fragment>
  );
}

export default Form;

import React, { FunctionComponent, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import { ButtonGroup } from '../../styles';
import { Step } from '../../components/Stepper';
import { addForm, RootState, updateForm } from '../../store';
import { isPageFormExistSelector, PageForm, PageProps } from './page';

const useNavigate = (form: PageForm, step?: Step, fallback?: string) => {
  const dispatch = useDispatch();
  const isExist = useSelector<RootState, boolean>((state) => isPageFormExistSelector(state, form.key));
  const history = useHistory();

  const navigate = useCallback(() => {
    dispatch(isExist ? updateForm(form) : addForm(form));
    const path = step ? `/form/${step.key}` : (fallback || undefined);
    path && history.push(path);
  }, [dispatch, history, step, form, isExist, fallback]);

  return navigate;
};

type PageButtonsProps = PageProps & { form: PageForm, disabled: boolean };

const PageButtons: FunctionComponent<PageButtonsProps> = ({ previous, next, form, disabled }) => {
  const goNext = useNavigate(form, next);
  const goBack = useNavigate(form, previous, '/');

  return (
    <ButtonGroup>
      <Button color="secondary" onClick={() => goBack()}>
        Previous
      </Button>
      {next &&
        <Button disabled={disabled} onClick={() => goNext()}>
          Next
          </Button>}
    </ButtonGroup>
  );
}

export default PageButtons;

import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Field from '../../../components/Field';
import { RootState } from '../../../store';
import { Scrollable } from '../../../styles';
import PageButtons from '../ButtonGroup';
import { buildField, mergeField, PageForm, pageFormSelector, PageProps, useForm } from '../page';
import { PAGE_ONE_KEY } from '../PageOne';

export const PAGE_TWO_KEY = 'page-2';

const validator = (name: string, newValue: any) => {
  const numberValue = Number(newValue);
  return !isNaN(numberValue) && numberValue > 0;
}

const isFormValid = (value: { [key: string]: number }, valid: boolean) => {
  return valid && Object.values(value).reduce((total, item) => total + item) === 100;
}

const PageTwo: FunctionComponent<PageProps> = ({ previous, next }) => {
  const pageFormOne = useSelector<RootState, PageForm | undefined>((state) => pageFormSelector(state, PAGE_ONE_KEY));
  const pageFormTwo = useSelector<RootState, PageForm | undefined>((state) => pageFormSelector(state, PAGE_TWO_KEY));
  let pageForm = { key: PAGE_TWO_KEY, data: buildField(pageFormOne?.data.field0) };
  if (pageFormTwo) {
    pageForm = { ...pageForm, data: mergeField(pageForm.data, pageFormTwo.data) };
  }
  const [value, valid, form, setForm] = useForm(pageForm);

  const isValid = isFormValid(value, valid);

  return (
    <React.Fragment>
      <Scrollable>
        {pageFormOne ? Object.keys(value).map((field, i) =>
          <Field
            key={i}
            name={field}
            value={value[field]}
            onChange={setForm}
            validator={validator}
            validationMessage="No value">
            Part {i + 1} %
      </Field>) : (<Redirect to="/" />)}
      </Scrollable>
      <PageButtons previous={previous} next={next} form={form} disabled={!isValid} />
    </React.Fragment>
  );
}

export default PageTwo;

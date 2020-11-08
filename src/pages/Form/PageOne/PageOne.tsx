import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import Field from '../../../components/Field';
import { RootState } from '../../../store';
import { Scrollable } from '../../../styles';
import PageButtons from '../ButtonGroup';
import { buildField, PageForm, pageFormSelector, PageProps, useForm } from '../page';

export const PAGE_ONE_KEY = 'page-1';

const validator = (name: string, newValue: any) => {
  const numberValue = Number(newValue);
  return !isNaN(numberValue) && numberValue > 0;
}

const PageOne: FunctionComponent<PageProps> = ({ previous, next }) => {
  const pageForm = useSelector<RootState, PageForm | undefined>((state) => pageFormSelector(state, PAGE_ONE_KEY));
  const [value, valid, form, setForm] = useForm(pageForm || { key: PAGE_ONE_KEY, data: buildField(1) });

  return (
    <React.Fragment>
      <Scrollable>
        {Object.keys(value).map((field, i) =>
          <Field
            key={i}
            name={field}
            value={value[field]}
            onChange={setForm}
            validator={validator}
            validationMessage="No value">
            Number of parts:
        </Field>)}
      </Scrollable>
      <PageButtons previous={previous} next={next} form={form} disabled={!valid} />
    </React.Fragment>
  );
}

export default PageOne;

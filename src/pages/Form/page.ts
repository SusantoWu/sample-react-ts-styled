import { useCallback, useState } from "react";
import { Step } from "../../components/Stepper";
import { RootState } from "../../store";

export interface PageProps {
  previous?: Step;
  next?: Step;
}

export interface PageForm {
  key: string;
  data: any;
}

export const buildField = (count: number) => {
  return Array.from(Array(count)).reduce((accu, item, i) => {
    accu[`field${i}`] = '';
    return accu;
  }, {});
}

export const mergeField = (data1: any, data2: any) => {
  return Object.keys(data1).reduce((accu, field) => {
    accu[field] = data2[field];
    return accu;
  }, {} as { [key: string]: any });
}

export const useFormValidate = (valid: { [key: string]: boolean }) => {
  const keys = Object.keys(valid);
  return keys.length && !keys.some((key) => valid[key] === false);
}

export const useForm = (form: PageForm) => {
  const [pageForm, setPageForm] = useState(form);
  const [value, setValue] = useState(form.data);
  const [valid, setValid] = useState({});
  const isValid = useFormValidate(valid);

  const setForm = useCallback((name, newValue, newValid) => {
    const data = { ...value, [name]: newValue };
    setValue(data);
    setValid({ ...valid, [name]: newValid });
    setPageForm({ ...form, data });
  }, [form, value, valid, setValue, setValid, setPageForm]);

  return [value, isValid, pageForm, setForm];
}

export const pageFormSelector = ({ formReducer: state }: RootState, key: string): PageForm | undefined =>
  state.form.find((form) => form.key === key);

export const isPageFormExistSelector = ({ formReducer: state }: RootState, key: string): boolean =>
  state.form.some((form) => form.key === key);
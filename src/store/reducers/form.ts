import { PageForm } from "../../pages/Form/page";
import { FormAction, FormActionType } from "../types";

export interface FormReducersState {
  form: PageForm[];
}

const formReducers = (state: { form: PageForm[]; }, action: FormActionType) => {
  switch (action.type) {
    case FormAction.AddForm:
      return { ...state, form: [...state.form, action.payload] };
    case FormAction.UpdateForm:
      return { ...state, form: state.form.map((form) => form.key === action.payload.key ? action.payload : form) };
    case FormAction.ClearForm:
      return { ...state, form: [] };
    default:
      return { form: [] };
  }
}

export default formReducers;

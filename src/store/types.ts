import { PageForm } from "../pages/Form/page";

export enum FormAction {
  AddForm,
  UpdateForm,
  ClearForm
}

export interface AddFormAction {
  type: FormAction,
  payload: PageForm
}

export interface UpdateFormAction {
  type: FormAction,
  payload: PageForm
}

export interface ClearFormAction {
  type: FormAction,
  payload: any
}

export type FormActionType = AddFormAction | UpdateFormAction | ClearFormAction;
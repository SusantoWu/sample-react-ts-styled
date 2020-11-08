import { PageForm } from "../../pages/Form/page"
import { AddFormAction, ClearFormAction, FormAction, UpdateFormAction } from "../types"

export const addForm = (payload: PageForm): AddFormAction => ({
  type: FormAction.AddForm,
  payload
})

export const updateForm = (payload: PageForm): UpdateFormAction => ({
  type: FormAction.UpdateForm,
  payload
})

export const clearForm = (): ClearFormAction => ({
  type: FormAction.ClearForm,
  payload: undefined
})

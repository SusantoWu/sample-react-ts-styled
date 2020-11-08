import { combineReducers } from 'redux';
import formReducer, { FormReducersState } from './form';

export interface RootState {
  formReducer: FormReducersState;
}

export default combineReducers({
  formReducer
});
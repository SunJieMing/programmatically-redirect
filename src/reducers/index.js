import { combineReducers } from 'redux';
import ItemsReducer from './ItemsReducer';
import ActiveItemReducer from './ActiveItemReducer';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  items: ItemsReducer,
  activeItem: ActiveItemReducer,
  form: FormReducer,
});

export default rootReducer;

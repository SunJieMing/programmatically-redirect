import { NEW_ITEM, GET_ITEMS } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case (NEW_ITEM):
      return action.payload.data;
    case (GET_ITEMS):
      return action.payload.data;
    default:
      console.log(action.type);
      return state;
  }
};

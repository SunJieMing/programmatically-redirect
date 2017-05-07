import { SET_ACTIVE_ITEM } from '../actions';
export default (state = null, action) => {
  switch (action.type) {
    case SET_ACTIVE_ITEM:
      return action.payload;
    default:
      return state;
  }
};

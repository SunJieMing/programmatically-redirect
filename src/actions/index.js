import axios from 'axios';
export const SET_ACTIVE_ITEM = 'SET_ACTIVE_ITEM';
export const NEW_ITEM = 'NEW_ITEM';
export const GET_ITEMS = 'GET_ITEMS';

export const newItem = (item) => {
  const promise = axios.post('http://localhost:5000/items', item);
  return {
    type: NEW_ITEM,
    payload: promise,
  };
};

export const setActiveItem = (item) => {
  return {
    type: SET_ACTIVE_ITEM,
    payload: item,
  };
};

export const getItems = () => {
  const promise = axios.get('http://localhost:5000/items');
  console.log('promise');
  return {
    type: GET_ITEMS,
    payload: promise,
  };
};

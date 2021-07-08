import { FETCH_TODOS } from './types';

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

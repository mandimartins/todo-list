import {
  FETCH_TODOS, FETCH_LISTS, ADD_TODO, DELETE_TODO, ADD_CUSTOM_TODO,
} from './types';

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return [...state, ...action.payload];

    case ADD_TODO:
      return [...state, action.payload];

    case ADD_CUSTOM_TODO:
      const filteredState = state.filter(({ id }) => id !== action.payload.id);
      return [...filteredState, action.payload];

    case DELETE_TODO:
      const newState = state.filter(({ id }) => id !== action.payload.id);
      return [...newState];

    default:
      return state;
  }
};

export const listsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_LISTS:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

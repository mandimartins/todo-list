import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';

import { todosReducer, listsReducer } from './reducers';

const rootReducer = combineReducers({
  todos: todosReducer,
  lists: listsReducer,
});

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;

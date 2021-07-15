import * as Notifications from 'expo-notifications';
import {
  selectAllTodos, selectAllLists, insertNewTask, deleteTodo,
} from '../database';
import {
  FETCH_TODOS, FETCH_LISTS, ADD_TODO, DELETE_TODO, ADD_CUSTOM_TODO,
} from './types';

export const fetchTodosAction = () => async (dispatch) => {
  const response = await selectAllTodos();

  const {
    rows: { _array },
  } = response;

  dispatch({
    type: FETCH_TODOS,
    payload: [..._array],
  });
};

export const addTodoAction = ({ textInput, defaultTable }) => async (dispatch) => {
  const { insertId } = await insertNewTask(textInput, defaultTable);
  dispatch({
    type: ADD_TODO,
    payload: {
      id: insertId,
      name: textInput,
      list_id: defaultTable,
    },
  });
};

export const addCustomTodoAction = ({
  textInput,
  defaultTable,
  date,
}) => async (dispatch, getState) => {
  await dispatch(addTodoAction({ textInput, defaultTable }));

  const lastIndex = getState().todos.length - 1;
  const todo = getState().todos[lastIndex];

  const scheduleId = await Notifications.scheduleNotificationAsync({
    content: {
      title: "It's time to do your task!",
      body: textInput,
    },
    trigger: date,
  });

  dispatch({
    type: ADD_CUSTOM_TODO,
    payload: {
      id: todo.id,
      name: textInput,
      list_id: defaultTable,
      scheduleId,
    },
  });
};

export const deleteTodoAction = ({ todoId, scheduleId = '' }) => async (dispatch) => {
  await Notifications.cancelScheduledNotificationAsync(scheduleId);
  await deleteTodo(todoId);

  dispatch({
    type: DELETE_TODO,
    payload: {
      id: todoId,
    },
  });
};

export const fetchListsAction = () => async (dispatch) => {
  const response = await selectAllLists();

  const {
    rows: { _array },
  } = response;

  dispatch({
    type: FETCH_LISTS,
    payload: [..._array],
  });
};

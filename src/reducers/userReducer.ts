/* eslint-disable @typescript-eslint/no-explicit-any */
import { Action, State, StateTodoEntity, StateUserEntity } from '../types';

export const userReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FETCH_START': {
      return {
        ...state,
        users: { ...state.users, status: 'loading' },
        todos: { ...state.todos, status: 'loading' },
        error: null,
      };
    }
    case 'FETCH_SUCCESS_USERS': {
      const users = action.payload;
      const userEntities = users.reduce((acc: any, user: any) => {
        acc[user.id] = { id: user.id, name: user.name, email: user.email };
        return acc;
      }, {});
      return {
        ...state,
        users: {
          entities: userEntities,
          ids: users.map((u: StateUserEntity) => u.id),
          status: 'idle',
        },
      };
    }
    case 'FETCH_SUCCESS_TODOS': {
      const todos = action.payload;
      const todoEntities = todos.reduce((acc: any, todo: StateTodoEntity) => {
        acc[todo.id] = todo;
        return acc;
      }, {});
      return {
        ...state,
        todos: {
          entities: todoEntities,
          ids: todos.map((t: StateTodoEntity) => t.id),
          status: 'idle',
        },
      };
    }
    case 'FETCH_ERROR': {
      return {
        ...state,
        users: {
          ...state.users,
          status: 'error',
        },
        todos: {
          ...state.todos,
          status: 'error',
        },
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

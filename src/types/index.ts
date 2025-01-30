/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ChildrenProps {
  children: React.ReactNode;
}

export type UserProviderProps = { children: React.ReactNode };

export type Dispatch = (action: Action) => void;

export type StateUserEntity = {
  id: number;
  name: string;
  email: string;
};

export type StateTodoEntity = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type State = {
  users: {
    entities: { [key: number]: StateUserEntity };
    ids: number[];
    status: 'idle' | 'loading' | 'error';
  };
  todos: {
    entities: { [key: number]: StateTodoEntity };
    ids: number[];
    status: 'idle' | 'loading' | 'error';
  };
  error: string | null;
};

export type Action =
  | { type: 'FETCH_START' }
  | {
      type: 'FETCH_SUCCESS_USERS';
      payload: {
        [x: string]: any;
        users: unknown;
      };
    }
  | {
      type: 'FETCH_SUCCESS_TODOS';
      payload: {
        [x: string]: any;
        todos: unknown;
      };
    }
  | { type: 'FETCH_ERROR'; payload: string };

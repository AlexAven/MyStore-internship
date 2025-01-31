import { createContext, useReducer, useContext } from 'react';

import { State, UserProviderProps, Dispatch } from '../types';
import { userReducer } from '../reducers/userReducer';

const StateContext = createContext<State | undefined>(undefined);
const DispatchContext = createContext<Dispatch | undefined>(undefined);

const initialState: State = {
  users: {
    entities: {},
    ids: [],
    status: 'idle',
  },
  todos: {
    entities: {},
    ids: [],
    status: 'idle',
  },
  error: null,
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export const useUserState = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('useUserState must be used within a UserProvider');
  }
  return context;
};

export const useUserDispatch = () => {
  const context = useContext(DispatchContext);
  if (!context) {
    throw new Error('useUserDispatch must be used within a UserProvider');
  }
  return context;
};

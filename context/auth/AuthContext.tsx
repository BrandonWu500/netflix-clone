import { useRouter } from 'next/router';
import {
  createContext,
  ReactElement,
  useCallback,
  useEffect,
  useReducer,
} from 'react';
import AuthReducer, { AUTH_ACTION_TYPE } from './AuthReducer';

export type AuthStateType = {
  user: Object | undefined | null;
};

export const AUTH_INIT_STATE = {
  user: null,
};

const useAuthContext = (initState: AuthStateType) => {
  const [state, dispatch] = useReducer(AuthReducer, AUTH_INIT_STATE);
  const router = useRouter();

  useEffect(() => {
    //@ts-ignore
    const user = JSON.parse(localStorage.getItem('user')) ?? null;
    console.log(user);
    user && dispatch({ type: AUTH_ACTION_TYPE.LOGIN, payload: user });
  }, []);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

  const login = useCallback((user: Object) => {
    dispatch({ type: AUTH_ACTION_TYPE.LOGIN, payload: user });
  }, []);

  const logout = useCallback(() => {
    dispatch({ type: AUTH_ACTION_TYPE.LOGOUT });
    localStorage.removeItem('user');
    router.push('/register');
  }, []);

  return {
    state,
    login,
    logout,
  };
};

type UseAuthContextType = ReturnType<typeof useAuthContext>;

const initContextState = {
  state: AUTH_INIT_STATE,
  login: () => {},
  logout: () => {},
};

export const AuthContext = createContext<UseAuthContextType>(initContextState);

type ChildrenType = {
  children?: ReactElement | undefined;
};

export const AuthContextProvider = ({
  children,
  ...AUTH_INIT_STATE
}: ChildrenType & AuthStateType): ReactElement => {
  return (
    <AuthContext.Provider value={useAuthContext(AUTH_INIT_STATE)}>
      {children}
    </AuthContext.Provider>
  );
};

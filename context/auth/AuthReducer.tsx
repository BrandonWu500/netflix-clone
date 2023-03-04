import { AuthStateType } from './AuthContext';

export const enum AUTH_ACTION_TYPE {
  LOGIN,
  LOGOUT,
}

export type AuthAction = {
  type: AUTH_ACTION_TYPE;
  payload?: Object | undefined;
};

const AuthReducer = (
  state: AuthStateType,
  action: AuthAction
): AuthStateType => {
  switch (action.type) {
    case AUTH_ACTION_TYPE.LOGIN:
      return {
        user: action.payload,
      };
    case AUTH_ACTION_TYPE.LOGOUT:
      return {
        user: null,
      };
    default:
      throw new Error();
  }
};

export default AuthReducer;

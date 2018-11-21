import { userConstants } from './constants';

const rootReducer = (state = { loginFlag: false, data: [] }, action) => {
  switch (action.type) {
    case userConstants.USER_LOGIN:
      return {
        ...state,
        loginFlag: true
      };
    case userConstants.USER_LOGOUT:
      console.log('logout---reducers');
      return {
        ...state,
        loginFlag: false
      };
    case userConstants.USER_INFO:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};
export default rootReducer;
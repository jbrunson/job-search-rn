import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from '../actions/types';

const INITIAL_STATE = {
  token: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FACEBOOK_LOGIN_SUCCESS:
      return { token: action.payload };

    default:
      return state;
  }
}
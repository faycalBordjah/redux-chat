import { RECEIVE_CURRENT_USER } from '../actions/user_actions';

const UserReducer = (state = null, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return action.user;
    default:
      return state;
  }
};

export default UserReducer;

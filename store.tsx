import { createStore, Store } from 'redux';
import { useSelector } from 'react-redux';

interface State {
  isAuthenticated: boolean;
}

const initialState: State = {
  isAuthenticated: false
};

const reducer = (state = initialState, action:any) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
};

const store: Store<State> = createStore(reducer);

export default store;
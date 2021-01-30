import {
  LOADING_POST_DATA,
  ERROR_POST_DATA,
  GET_POST_DATA,
} from '../types/postDataTypes';

const INITIAL_STATE = {
  postData: {
    data: [],
  },
  loading: false,
  error: null,
};

/* Conect reducer and actions for Post Data */
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POST_DATA:
      return {
        ...state,
        postData: action.payload,
        loading: false,
        error: null,
      };
    case LOADING_POST_DATA:
      return { ...state, loading: true, error: null };
    case ERROR_POST_DATA:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

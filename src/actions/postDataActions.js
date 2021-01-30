import {
  LOADING_POST_DATA,
  ERROR_POST_DATA,
  GET_POST_DATA,
} from '../types/postDataTypes';
import Http from '../libs/http';

export const getPosts = (API, API_ID) => async (dispatch) => {
  dispatch({ type: LOADING_POST_DATA });

  try {
    const data = await Http.instance.get(API, API_ID);
    if (data.message) throw Error(data);

    dispatch({ type: GET_POST_DATA, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: ERROR_POST_DATA, payload: error });
  }
};

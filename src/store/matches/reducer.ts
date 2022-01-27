import {
  FETCH_MATCH_REQUEST,
  FETCH_MATCH_SUCCESS,
  FETCH_MATCH_FAILURE,
} from "./matchTypes";

const initialState = {
  pending: false,
  matches: [],
  error: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_MATCH_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_MATCH_SUCCESS:
      return {
        ...state,
        pending: false,
        matches: action.payload.matches,
        error: null,
      };
    case FETCH_MATCH_FAILURE:
      return {
        ...state,
        pending: false,
        matches: [],
        error: action.payload.error,
      };

    default:
      return state;
  }
};

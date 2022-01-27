import {
  FETCH_TEAM_REQUEST,
  FETCH_TEAM_SUCCESS,
  FETCH_TEAM_FAILURE,
} from "./teamTypes";

const initialState = {
  pending: false,
  teams: [],
  error: null,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_TEAM_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_TEAM_SUCCESS:
      return {
        ...state,
        pending: false,
        teams: action.payload.teams,
        error: null,
      };
    case FETCH_TEAM_FAILURE:
      return {
        ...state,
        pending: false,
        teams: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};

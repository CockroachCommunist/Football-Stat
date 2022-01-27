import {
  FETCH_TEAM_REQUEST,
  FETCH_TEAM_SUCCESS,
  FETCH_TEAM_FAILURE,
} from "./teamTypes";

export const FetchTeamRequest = (id: number) => ({
  type: FETCH_TEAM_REQUEST,
  payload: id,
});

export const FetchTeamSuccess = (payload: any) => ({
  type: FETCH_TEAM_SUCCESS,
  payload,
});

export const FetchTeamFailure = (payload: any) => ({
  type: FETCH_TEAM_FAILURE,
});

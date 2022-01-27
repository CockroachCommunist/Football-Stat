import {
  FETCH_COMPETITION_REQUEST,
  FETCH_COMPETITION_SUCCESS,
  FETCH_COMPETITION_FAILURE,
} from "./competitionTypes";

export const FetchCompetitionRequest = () => ({
  type: FETCH_COMPETITION_REQUEST,
});

export const FetchCompetitionSuccess = (payload: any) => ({
  type: FETCH_COMPETITION_SUCCESS,
  payload,
});

export const FetchCompetitionFailure = (payload: any) => ({
  type: FETCH_COMPETITION_FAILURE,
});

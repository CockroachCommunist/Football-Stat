import {
  FETCH_MATCH_REQUEST,
  FETCH_MATCH_SUCCESS,
  FETCH_MATCH_FAILURE,
} from "./matchTypes";

// import {
//   FetchMatchRequest,
//   FetchMatchSuccess,
//   FetchMatchSuccessPayload,
//   FetchMatchFailure,
//   FetchMatchFailurePayload,
// } from "./types";

export const FetchMatchRequest = () => ({
  type: FETCH_MATCH_REQUEST,
});

export const FetchMatchSuccess = (payload: any) => ({
  type: FETCH_MATCH_SUCCESS,
  payload,
});

export const FetchMatchFailure = (payload: any) => ({
  type: FETCH_MATCH_FAILURE,
});

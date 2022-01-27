import { createSelector } from "reselect";

import { RootState } from "../rootReducer";

const getPending = (state: RootState) => state.match?.pending;

const getMatches = (state: RootState) => state.match?.matches;

const getError = (state: RootState) => state.match?.error;

export const getMatchesSelector = createSelector(
  getMatches,
  (matches) => matches
);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);

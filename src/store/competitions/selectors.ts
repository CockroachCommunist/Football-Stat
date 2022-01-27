import { createSelector } from "reselect";

import { RootState } from "../rootReducer";

const getPending = (state: RootState) => state.competition?.pending;

const getCompetitions = (state: RootState) => state.competition?.competitions;

const getError = (state: RootState) => state.competition?.error;

export const getCompetitionsSelector = createSelector(
  getCompetitions,
  (competitions) => competitions
);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);
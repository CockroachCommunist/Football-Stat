import { all, fork } from "redux-saga/effects";

import matchSaga from "./matches/sagas";
import competitionSaga from "./competitions/sagas";
import teamSaga from "./teams/sagas";

export function* rootSaga() {
  yield all([fork(matchSaga), fork(competitionSaga), fork(teamSaga)]);
}

import { all, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { FetchCompetitionFailure, FetchCompetitionSuccess } from "./actions";
import { FETCH_COMPETITION_REQUEST } from "./competitionTypes";

const getCompetitions = () =>
  axios.get("https://api.football-data.org/v2/competitions?plan=TIER_ONE", {
    headers: {
      "X-Auth-Token": "e72124c4c9804e86944a231787f41c8d",
    },
  });

function* CompetitionSagaWorker() {
  try {
    //@ts-ignore
    const res = yield call(getCompetitions);
    yield put(
      FetchCompetitionSuccess({
        competitions: res.data.competitions,
      })
    );
  } catch (e: any) {
    FetchCompetitionFailure({
      error: e.message,
    });
  }
}

function* CompetitionSagaWatcher() {
  yield all([takeLatest(FETCH_COMPETITION_REQUEST, CompetitionSagaWorker)]);
}

export default CompetitionSagaWatcher;

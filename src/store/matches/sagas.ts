import { all, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { FetchMatchSuccess, FetchMatchFailure } from "./actions";
import { FETCH_MATCH_REQUEST } from "./matchTypes";

const getMatches = () =>
  axios.get("https://api.football-data.org/v2/matches", {
    headers: {
      "X-Auth-Token": "e72124c4c9804e86944a231787f41c8d",
    },
  });

function* fetchMatchSaga({ payload }: { [key: string]: any }) {
  try {
    //@ts-ignore
    const res = yield call(getMatches);
    yield put(
      FetchMatchSuccess({
        matches: res.data.matches,
      })
    );
  } catch (e: any) {
    FetchMatchFailure({
      error: e.message,
    });
  }
}

function* MatchSagaWatcher() {
  yield all([takeLatest(FETCH_MATCH_REQUEST, fetchMatchSaga)]);
}

export default MatchSagaWatcher;

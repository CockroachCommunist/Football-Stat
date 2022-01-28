import { all, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { FetchMatchSuccess, FetchMatchFailure } from "./actions";
import { FETCH_MATCH_REQUEST } from "./matchTypes";

const getMatches = () =>
  axios.get("https://api.football-data.org/v2/matches", {
    headers: {
      "X-Auth-Token": `${process.env.REACT_APP_API_KEY}`,
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

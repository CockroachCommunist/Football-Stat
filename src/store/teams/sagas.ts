import { all, call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { Action } from "redux";

import { FetchTeamSuccess, FetchTeamFailure } from "./actions";
import { FETCH_TEAM_REQUEST } from "./teamTypes";

const getTeams = (id: number) =>
  axios.get(`https://api.football-data.org/v2/competitions/${id}/teams`, {
    headers: { "X-Auth-Token": "e72124c4c9804e86944a231787f41c8d" },
  });

function* TeamSagaWorker(action: Action<number>) {
  try {
    //@ts-ignore
    const res = yield call(getTeams, action.payload);
    yield put(
      FetchTeamSuccess({
        teams: res.data.teams,
      })
    );
  } catch (e: any) {
    FetchTeamFailure({ error: e.message });
  }
}

function* TeamSagaWatcher() {
  yield all([takeLatest(FETCH_TEAM_REQUEST, TeamSagaWorker)]);
}

export default TeamSagaWatcher;

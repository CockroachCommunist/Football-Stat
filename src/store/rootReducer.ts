import { combineReducers } from "redux";
import matchReducer from "./matches/reducer";
import competitionReducer from "./competitions/reducer";
import competitionIdReducer from "./competitionId";
import teamReducer from "./teams/reducer";
import sweepId from "./sweepId/reducer";

const rootReducer = combineReducers({
  match: matchReducer,
  competition: competitionReducer,
  team: teamReducer,
  competitionId: competitionIdReducer,
  sweepId,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

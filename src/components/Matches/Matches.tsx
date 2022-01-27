import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "..";
import "./Matches.css";

import {
  getPendingSelector,
  getMatchesSelector,
  getErrorSelector,
} from "../../store/matches/selectors";

import { FetchMatchRequest } from "../../store/matches/actions";

export const Matches = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const matches = useSelector(getMatchesSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(FetchMatchRequest());
  }, []);

  useEffect(() => {
    console.log(matches);
  }, [matches]);

  return (
    <div className="matchContainer">
      <h2 className="matchTitle">Матчи</h2>
      {pending && (
        <div className="matchLoader">
          <Loader />
        </div>
      )}
      {error && <div>Error</div>}
      {matches.length > 0 &&
        matches.map((match: any) => {
          return (
            <div className="matchContent" key={match.id}>
              <div className="matchLeague">
                <div className="matchLeagueInfo">
                  <img
                    className="matchIcon"
                    src={match.competition.area.ensignUrl}
                    alt=""
                  />
                  <div>
                    <div className="matchCompetitionName">
                      {match.competition.name}
                    </div>
                    <div className="matchAreaName">
                      {match.competition.area.name}
                    </div>
                  </div>
                </div>
                {match.score.winner && (
                  <div className="matchEndGame">Завершён</div>
                )}
              </div>
              <div className="matchColumnTeams">
                <div className="matchDateInfo">
                  <div className="matchDate">
                    Начало матча<span>{match.season.startDate}</span>
                  </div>
                  <div className="matchDate">
                    Конец матча<span>{match.season.endDate}</span>
                  </div>
                </div>
                <div className="matchResultTeam">
                  {match.homeTeam.name}
                  <div>
                    {match.score.fullTime.homeTeam === null
                      ? "-"
                      : match.score.fullTime.homeTeam}
                  </div>
                </div>
                <div className="matchResultTeam">
                  {match.awayTeam.name}
                  <div>
                    {match.score.fullTime.awayTeam === null
                      ? "-"
                      : match.score.fullTime.awayTeam}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

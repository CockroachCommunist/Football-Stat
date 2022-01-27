import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Loader } from "..";
import "./Competitions.css";
import {
  getPendingSelector,
  getCompetitionsSelector,
  getErrorSelector,
} from "../../store/competitions/selectors";
import { FetchCompetitionRequest } from "../../store/competitions/actions";
import League from "./League/League";

export const Competitions = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const competitions = useSelector(getCompetitionsSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(FetchCompetitionRequest());
  }, []);

  useEffect(() => {
    console.log(competitions);
  }, [competitions]);

  return (
    <div className="competitionContainer">
      <h2 className="competitionTitle">Соревнования</h2>
      {pending && (
        <div className="competitionLoader">
          <Loader />
        </div>
      )}
      {error && <div>Error</div>}
      {competitions.length > 0 &&
        competitions.map((competition: any) => {
          return (
            <div className="competitionContent" key={competition.id}>
              <League
                id={competition.id}
                img={competition.area.ensignUrl}
                leagueName={competition.name}
                areaName={competition.area.name}
              />
            </div>
          );
        })}
    </div>
  );
};

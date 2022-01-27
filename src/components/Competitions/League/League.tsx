import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./League.css";
import { Sweep } from "../Sweep/Sweep";
import { getPendingSelector } from "../../../store/competitions/selectors";
import { Loader } from "../..";
import { RootState } from "../../../store/rootReducer";
import { changeOpenId } from "../../../store/sweepId/actions";

interface IProps {
  id: number;
  img: any;
  leagueName: string;
  areaName: string;
}

export const League: React.FC<IProps> = ({ id, img, leagueName, areaName }) => {
  const dispacth = useDispatch();
  const { openId } = useSelector((state: RootState) => state.sweepId);
  const pending = useSelector(getPendingSelector);

  const clickHandler = useCallback(() => {
    if (openId === id) {
      return dispacth(changeOpenId(null));
    }
    return dispacth(changeOpenId(id));
  }, [openId]);

  return (
    <div className="leagueContainer" key={id}>
      <div className="leagueContent">
        <div className="leagueInfo">
          {img === null ? (
            <span className="leagueNoFlag">?</span>
          ) : (
            <img className="leagueFlag" src={img} alt="" />
          )}
          <div>
            <div className="leagueName">{leagueName}</div>
            <div className="leagueAreaName">{areaName}</div>
          </div>
        </div>
        <button className="sweepTeams" onClick={clickHandler}>
          Teams
        </button>
      </div>
      {pending && (
        <div>
          <Loader />
        </div>
      )}
      {id === openId && (
        <div>
          <Sweep id={id} />
        </div>
      )}
    </div>
  );
};

export default League;

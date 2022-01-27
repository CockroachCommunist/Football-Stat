import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../..";
import { RootState } from "../../../store/rootReducer";
import { FetchTeamRequest } from "../../../store/teams/actions";
import "./Sweep.css";

interface IProps {
  id: number;
}

export const Sweep: React.FC<IProps> = ({ id }) => {
  const dispatch = useDispatch();
  const { teams, pending, error } = useSelector(
    (state: RootState) => state.team
  );

  useEffect(() => {
    dispatch(FetchTeamRequest(id));
  }, []);

  return (
    <ul className="sweepList">
      {pending && (
        <div className="sweepLoader">
          <Loader />
        </div>
      )}
      {teams.length > 0 &&
        !pending &&
        teams.map((team: { [key: string]: any }) => {
          return (
            <li className="sweepItem" key={team.id}>
              <img className="sweepLogo" src={team.crestUrl} alt="" />
              <div>
                <div className="sweepName">{team.shortName}</div>
                <div>Цвета клуба: {team.clubColors}</div>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

import { IState } from "./types";
import { IAction } from "../";
import { CHANGE_ID } from "./actions";

const initialState: IState = {
  id: 0,
};

export default (state = initialState, { type, payload }: IAction<number>) => {
  switch (type) {
    case CHANGE_ID:
      return {
        ...state,
        id: payload,
      };
    default:
      return state;
  }
};

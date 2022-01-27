import { CHANGE_OPEN_ID } from "./types";

interface IState {
  openId: number | null;
}

const initialState: IState = {
  openId: null,
};

export default (
  state = initialState,
  { type, payload }: { [key: string]: any }
) => {
  switch (type) {
    case CHANGE_OPEN_ID:
      return { ...state, openId: payload };
    default:
      return state;
  }
};

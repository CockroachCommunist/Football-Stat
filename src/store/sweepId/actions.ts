import { CHANGE_OPEN_ID } from "./types";

export const changeOpenId = (id: number | null) => {
  return {
    type: CHANGE_OPEN_ID,
    payload: id,
  };
};

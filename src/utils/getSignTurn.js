import { initialState } from "../reducer";

export function getSignTurn(turn) {
    return !(turn % 2) ? initialState.secondPlayer.value : initialState.firstPlayer.value;
};
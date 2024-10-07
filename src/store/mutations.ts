import { State } from "../types/State";

const mutations = {
  setCount(state: State, payload: number) {
    state.count = payload;
  },
};
export default mutations;

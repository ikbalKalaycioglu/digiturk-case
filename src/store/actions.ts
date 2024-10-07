import { ActionContext } from "vuex";
import { State } from "../types/State";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.VUE_APP_TMDB_API_KEY,
  },
};
const actions = {
  async getNowPlaying(context: ActionContext<State, State>, payload: number) {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        options
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
  async getPopular() {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        options
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
  async getTopRated() {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        options
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
  async getUpcoming() {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        options
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
  async getMovieById(context: ActionContext<State, State>, payload: number) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${payload}?language=en-US`,
        options
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
  async getMoviesSimilar(
    context: ActionContext<State, State>,
    payload: number
  ) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${payload}/similar?language=en-US&page=1`,
        options
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
};

export default actions;

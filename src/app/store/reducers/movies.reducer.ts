import { createReducer, on } from '@ngrx/store';

import {
  getMovies,
  getMoviesFailure,
  getMoviesSuccess,
  setSelectedId,
} from '../actions/movies.actions';
import { initialState } from '../state/movie.state';

export const moviesReducer = createReducer(
  initialState,
  on(getMovies, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(getMoviesSuccess, (state, { movies }) => ({
    ...state,
    movies: movies,
    loaded: true,
    error: null,
  })),
  on(getMoviesFailure, (state, { error }) => ({
    ...state,
    loaded: false,
    error: error,
  })),
  on(setSelectedId, (state, { Id }) => ({
    ...state,
    selectedId: Id,
  }))
);

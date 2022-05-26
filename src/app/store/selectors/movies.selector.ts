import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieItem, ResultsEntity } from '../models/movieItem.model';
import { MovieState } from '../state/movie.state';

export const getMoviesState = createFeatureSelector<MovieState>('movies');

export const getMoviesLoaded = createSelector(
  getMoviesState,
  (state: MovieState) => state && state.loaded
);

export const getMoviesError = createSelector(
  getMoviesState,
  (state: MovieState) => state.error
);

export const getAllMovies = createSelector(
  getMoviesState,
  getMoviesLoaded,
  (state: MovieState, isLoaded) => {
    return isLoaded ? state.movies.results : [];
  }
);

export const getById = (id: number) =>
  createSelector(getMoviesState, (entities: MovieState) =>
    entities.movies.results.filter((item: ResultsEntity) => item.id === id)
  );

export const getSelectedId = createSelector(
  getMoviesState,
  (state: MovieState) => state.selectedId
);

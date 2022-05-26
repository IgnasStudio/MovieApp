import { createAction, props } from '@ngrx/store';
import { MovieItem } from '../models/movieItem.model';

export const getMovies = createAction('[Movie] Get movie');

export const getMoviesSuccess = createAction(
  '[Movie] Get movie success',
  props<{ movies: MovieItem }>()
);

export const getMoviesFailure = createAction(
  '[Movie] Get movie failure',
  props<{ error: string | null }>()
);

export const setSelectedId = createAction(
  '[Movie] Set selected ID',
  props<{ Id: number }>()
);

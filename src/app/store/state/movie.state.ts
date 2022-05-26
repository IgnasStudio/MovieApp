import { NgIf } from '@angular/common';
import { MovieItem } from '../models/movieItem.model';

export interface MovieState {
  movies: MovieItem;
  loaded: boolean;
  error?: string | null;
  selectedId: number | null;
}

export const initialState: MovieState = {
  movies: null,
  loaded: false,
  error: null,
  selectedId: null,
};

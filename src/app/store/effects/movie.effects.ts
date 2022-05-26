import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { MoviesService } from '../../services/movies.service';
import {
  getMovies,
  getMoviesFailure,
  getMoviesSuccess,
} from '../actions/movies.actions';

@Injectable()
export class MovieEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getMovies),
      switchMap(() =>
        this.moviesService.getAll().pipe(
          map((movies) => getMoviesSuccess({ movies })),
          catchError((error: string | null) => of(getMoviesFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}
}

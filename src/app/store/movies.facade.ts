import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getMovies, setSelectedId } from './actions/movies.actions';
import { ResultsEntity } from './models/movieItem.model';
import {
  getAllMovies,
  getById,
  getMoviesLoaded,
  getSelectedId,
} from './selectors/movies.selector';
import { MovieState } from './state/movie.state';

@Injectable()
export class MoviesFacade {
  public readonly loaded$: Observable<boolean> = this.store.pipe(
    select(getMoviesLoaded)
  );
  public readonly allMovies$: Observable<ResultsEntity[]> = this.store.pipe(
    select(getAllMovies)
  );

  constructor(private readonly store: Store<MovieState>) {}
  public loadMovies = this.store.dispatch(getMovies());

  public setSelectedId(id: number): void {
    this.store.dispatch(setSelectedId({ Id: id }));
  }

  public readonly getSelectedId: Observable<number> = this.store.pipe(
    select(getSelectedId)
  );

  public getMovieById(id: number): Observable<ResultsEntity[]> {
    return this.store.select(getById(id));
  }
}

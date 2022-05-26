import { Component, EventEmitter, Output } from '@angular/core';
import { filter, switchMap } from 'rxjs';
import { ResultsEntity } from '../store/models/movieItem.model';
import { MoviesFacade } from '../store/movies.facade';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent {
  public movies: ResultsEntity[] = [];
  selectedId: number;
  @Output() selectedMovieId = new EventEmitter<number>();
  
  public constructor(private readonly moviesFacade: MoviesFacade) {}
  ngOnInit() {
    this.moviesFacade.loadMovies;
    if (this.moviesFacade.loaded$ == null) return;
    this.moviesFacade.loaded$
      .pipe(
        filter((isLoaded: boolean) => isLoaded === true),
        switchMap(() => this.moviesFacade.allMovies$)
      )
      .subscribe((movies: ResultsEntity[]) => {
        this.movies = movies;
      });
  }
  save(movieId) {
    this.moviesFacade.setSelectedId(movieId);
    this.selectedMovieId.emit(movieId);
  }
}

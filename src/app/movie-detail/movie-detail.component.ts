import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultsEntity } from '../store/models/movieItem.model';
import { MoviesFacade } from '../store/movies.facade';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  //this ideally should be an object not an array
  public movies: Observable<ResultsEntity[]>;

  public constructor(private readonly moviesFacade: MoviesFacade) {}

  ngOnInit(): void {
    if (this.moviesFacade.getSelectedId == null) return;
    this.moviesFacade.getSelectedId.subscribe((id) => {
      if (id === null) return;
      this.movies = this.moviesFacade.getMovieById(id);
    });
  }
  ngOnChanges() {}
}

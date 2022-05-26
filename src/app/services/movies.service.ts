import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { MovieItem } from '../store/models/movieItem.model';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<MovieItem> {
    return this.http.get<MovieItem>(
      'https://api.themoviedb.org/3/discover/movie?api_key=3fa4fbacaa2e7abb78ef691e344b6c3b&sort_by=popularity.desc'
    );
  }
}

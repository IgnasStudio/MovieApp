import { HttpErrorResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MovieItem } from '../store/models/movieItem.model';
import { MoviesService } from './movies.service';

describe('MoviesService - testing HTTP request method getData()', () => {
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MoviesService],
    });

    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('getAll should return MovieItem and be a GET method', () => {
    const data: MovieItem = {
      page: 1,
      results: [
        {
          adult: false,
          backdrop_path: '/A3bsT0m1um6tvcmlIGxBwx9eAxn.jpg',
          genre_ids: [28, 12, 35, 10749],
          id: 752623,
          original_language: 'en',
          original_title: 'The Lost City',
          overview:
            'A reclusive romance novelist was sure nothing could be worse than getting stuck on a book tour with her cover model until a kidnapping attempt sweeps them both into a cutthroat jungle adventure, proving life can be so much stranger, and more romantic, than any of her paperback fictions.',
          popularity: 8765.341,
          poster_path: '/neMZH82Stu91d3iqvLdNQfqPPyl.jpg',
          release_date: '2022-03-24',
          title: 'The Lost City',
          video: false,
          vote_average: 6.8,
          vote_count: 790,
        },
        {
          adult: false,
          backdrop_path: '/gG9fTyDL03fiKnOpf2tr01sncnt.jpg',
          genre_ids: [28, 878, 14],
          id: 526896,
          original_language: 'en',
          original_title: 'Morbius',
          overview:
            'Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.',
          popularity: 9222.216,
          poster_path: '/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg',
          release_date: '2022-03-30',
          title: 'Morbius',
          video: false,
          vote_average: 6.3,
          vote_count: 1158,
        },
      ],
      total_pages: 33678,
      total_results: 673560,
    };

    TestBed.inject(MoviesService)
      .getAll()
      .subscribe((response) => expect(response).toBe(data));

    const req = httpTestingController.expectOne(
      'https://api.themoviedb.org/3/discover/movie?api_key=3fa4fbacaa2e7abb78ef691e344b6c3b&sort_by=popularity.desc'
    );

    expect(req.request.method).toBe('GET');

    req.flush(data);
  });
});

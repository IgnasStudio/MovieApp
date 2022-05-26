import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesFacade } from '../store/movies.facade';
import { MovieState } from '../store/state/movie.state';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { MovieListComponent } from './movie-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  getAllMovies,
  getMoviesLoaded,
} from '../store/selectors/movies.selector';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  let store: MockStore<MovieState>;

  let mockGetMoviesLoadedSelector;
  let mockGetAllMoviesSelector;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieListComponent],
      imports: [HttpClientTestingModule],
      providers: [provideMockStore(), MoviesFacade],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;

    component.movies = [];
    mockGetMoviesLoadedSelector = store.overrideSelector(getMoviesLoaded, true);
    mockGetAllMoviesSelector = store.overrideSelector(getAllMovies, [
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
    ]);
    fixture.detectChanges();
  });

  it('should create', async () => {
    expect(component).toBeTruthy();
  });

  it('should display correct amount of movies', () => {
    fixture.detectChanges();

    expect(
      fixture.debugElement.queryAll(By.css('.list-group-item-action')).length
    ).toBe(2);
  });

  it('should display the correct title', () => {
    expect(
      fixture.debugElement.queryAll(By.css('.movie-title'))[0].nativeElement
        .textContent
    ).toContain('The Lost City');
  });

  it('should display no movies if loaded = false', () => {
    mockGetMoviesLoadedSelector.setResult(false);
    component.movies = [];
    fixture.detectChanges();
    expect(
      fixture.debugElement.queryAll(By.css('.list-group-item-action')).length
    ).toBe(0);
  });
});

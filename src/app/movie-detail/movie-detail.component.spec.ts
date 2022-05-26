import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MoviesFacade } from '../store/movies.facade';

import { MovieDetailComponent } from './movie-detail.component';

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;

  const storeMock = {
    select() {
      return of({ movies: null, loaded: false, error: null, selectedId: null });
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieDetailComponent],
      providers: [
        {
          provide: MoviesFacade,
          useValue: storeMock,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

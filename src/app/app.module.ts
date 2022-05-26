import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieEffects } from './store/effects/movie.effects';
import { moviesReducer } from './store/reducers/movies.reducer';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MoviesFacade } from './store/movies.facade';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieListComponent,
    MovieDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('movies', moviesReducer),
    EffectsModule.forRoot([MovieEffects]),
    StoreDevtoolsModule.instrument({
      name: 'NgRx Book Store App',
    }),
  ],
  providers: [MoviesFacade],
  bootstrap: [AppComponent],
})
export class AppModule {}

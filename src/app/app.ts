import { Component, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { TMDBApiService } from './shared/tmdb-api-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'IT-S7-TMDB-API';
  api = inject(TMDBApiService);
  movies = signal({});

  //TODO: cargar peliculas al inicio
  //TODO: controlar el tiempo de espera
  getMovies() {
    this.movies.set(this.api.getMovies());
    console.log(this.movies());
  }
}

import { Component, inject, signal, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { TMDBApiService } from './shared/tmdb-api-service';
import { IMovies } from './shared/imovies';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected title = 'IT-S7-TMDB-API';
  api = inject(TMDBApiService);
  movies = signal<IMovies>({
    dates: { maximum: '', minimum: '' },
    page: 0,
    results: [],
  });
  imgPath = environment.TMDB_IMG_PATH_500;

  //TODO: cargar peliculas al inicio
  ngOnInit() {
    this.api.getMovies().subscribe((response) => {
      this.movies.set(response);
      console.log(response);
      console.log(this.movies());
    });
  }
  //TODO: controlar el tiempo de espera
}

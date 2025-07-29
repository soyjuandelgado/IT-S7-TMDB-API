import { Component, inject, OnInit, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { TMDBApiService } from '../shared/tmdb-api-service';
import { IMovies } from '../shared/imovies';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
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


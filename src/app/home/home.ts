import { Component, inject, OnInit, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { TMDBApiService } from '../shared/services/tmdb-api-service';
import { IMovies } from '../shared/models/imovies';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatCardModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  api = inject(TMDBApiService);
  movies = signal<IMovies | undefined>(undefined);
  imgPath = environment.TMDB_IMG_PATH_500;
  router = inject(Router)

  ngOnInit() {
    this.api.getMovies().subscribe({
      next: (response) => {
      this.movies.set(response);
    },
    error: (err) => {
      console.error("Error al obtener películas", err);
    }})
  }
  //TODO: controlar el tiempo de espera y mostrar animación

  showMovieDetails(id: number){
    this.router.navigate(["/movie"], {queryParams:{id: id}})
  }
}


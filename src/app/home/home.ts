import { Component, inject, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { TMDBApiService } from '../shared/services/tmdb-api-service';
import { IMovies } from '../shared/models/imovies';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatCardModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  api = inject(TMDBApiService);
  movies = signal<IMovies | undefined>(undefined);
  imgPath = environment.TMDB_IMG_PATH_500;
  router = inject(Router);

  constructor() {
    this.getMovies();
  }
  //TODO: controlar el tiempo de espera y mostrar animación

  getMovies(page?: number) {
    this.api.getMovies(page).subscribe({
      next: (response) => {
        if (!this.movies()) {
          this.movies.set(response)
          console.log("Primera página")
          console.log(this.movies())
        }
        else {
          this.appendMovies(response)
          console.log("Pagina:"+ page)
          console.log(this.movies())
        }
      },
      error: (err) => {
        console.error('Error al obtener películas', err);
      },
    });
  }
  showMovieDetails(id: number) {
    this.router.navigate(['/movie'], { queryParams: { id: id } });
  }

  showMoreMovies() {
    const page = this.movies()!.page + 1;
    this.getMovies(page);
  }
  appendMovies(resp: IMovies) {
    this.movies.update((movies) => ({ ...movies!, page: resp.page, results: [...movies!.results, ...resp.results] }));
  }
}

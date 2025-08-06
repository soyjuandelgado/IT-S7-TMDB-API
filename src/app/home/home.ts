import { Component, inject, signal, OnInit } from '@angular/core';
import { TMDBApiService } from '../shared/services/tmdb-api-service';
import { IMovies } from '../shared/models/imovies';
import { ScrollEnd } from '../shared/directives/scroll-end';
import { MovieCardList } from '../shared/components/movie-card-list/movie-card-list';


@Component({
  selector: 'app-home',
  imports: [ScrollEnd, MovieCardList],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  api = inject(TMDBApiService);
  movies = signal<IMovies | undefined>(undefined);

  ngOnInit() {
    this.getMovies();
  }
  //TODO: controlar el tiempo de espera y mostrar animación
  //TODO: usar el @defer en el template para el loading
  //TODO: mirar interceptor

  getMovies(page?: number):void {
    this.api.getMovies$(page).subscribe({
      next: (response) => {
        if (!this.movies()) {
          this.movies.set(response)
        }
        else {
          if(this.movies()!.page != response.page){
            this.appendMovies(response)
          }
        }
      },
      error: (err) => {
        console.error('Error al obtener películas', err);
      },
    });
  }
  showMoreMovies() {
    const page = (this.movies()?.page || 0) + 1;
    this.getMovies(page);
  }
  appendMovies(resp: IMovies) {
    this.movies.update((movies) => ({ ...movies!, page: resp.page, results: [...movies!.results, ...resp.results] }));
  }
}

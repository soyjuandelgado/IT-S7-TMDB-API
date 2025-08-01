import { Component, inject, signal, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { TMDBApiService } from '../shared/services/tmdb-api-service';
import { IMovies } from '../shared/models/imovies';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { ScrollEnd } from '../shared/directives/scroll-end';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, ScrollEnd],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  api = inject(TMDBApiService);
  movies = signal<IMovies | undefined>(undefined);
  imgPath = environment.TMDB_IMG_PATH_200;
  router = inject(Router);

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
          // console.log("Primera página")
          // console.log(this.movies())
        }
        else {
          if(this.movies()!.page != response.page){
            //TODO: comprobar que no se cargue de nuevo la ultima pagina
            this.appendMovies(response)
            // console.log("Pagina:"+ page)
            // console.log(this.movies())
          }
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
    const page = (this.movies()?.page || 0) + 1;
    this.getMovies(page);
  }
  appendMovies(resp: IMovies) {
    this.movies.update((movies) => ({ ...movies!, page: resp.page, results: [...movies!.results, ...resp.results] }));
  }
}

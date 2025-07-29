import { Component, inject, signal, effect } from '@angular/core';
import { TMDBApiService } from '../shared/services/tmdb-api-service';
import { IMovieDetails } from '../shared/models/imovie-details';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.scss',
})
export class MovieDetails {
  api = inject(TMDBApiService);
  id = signal(0);
  movie = signal<IMovieDetails | undefined>(undefined);
  imgPath = environment.TMDB_IMG_PATH_500;

  route = inject(ActivatedRoute);
  router = inject(Router);

  constructor() {
    this.route.queryParams.subscribe((params) => {
      const newId = params['id'];
      if (!isNaN(newId) && newId !== this.id()) this.id.set(params['id']);
    });
    effect(() => {
      this.loadMovieDetails(this.id());
    });
  }

  loadMovieDetails(id: number) {
    this.api.getMovieDetailsAndSimilarRecommendationsCredits(id).subscribe({
      next: (response) => {
        this.movie.set(response);
      },
      error: (err) => {
        console.error('Error al obtener película', err);
      },
    });
  }

  showMovieDetails(id: number) {
    this.router.navigate(['/movie'], { queryParams: { id: id } });
  }
}

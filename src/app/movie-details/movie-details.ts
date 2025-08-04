import { Component, inject, signal, effect, OnInit } from '@angular/core';
import { TMDBApiService } from '../shared/services/tmdb-api-service';
import { IMovieDetails } from '../shared/models/imovie-details';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MovieCardList } from '../movie-card-list/movie-card-list';
import { CastCardList } from '../cast-card-list/cast-card-list';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-movie-details',
  imports: [
    DatePipe,
    MatCardModule,
    MatProgressSpinnerModule,
    MovieCardList,
    CastCardList,
    MatDividerModule,
  ],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.scss',
})
export class MovieDetails implements OnInit {
  api = inject(TMDBApiService);
  id = signal(0);
  movie = signal<IMovieDetails | undefined>(undefined);
  imgPath = environment.TMDB_IMG_PATH_500;

  route = inject(ActivatedRoute);
  router = inject(Router);

  constructor() {
    effect(() => {
      this.loadMovieDetails(this.id());
    });
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const newId = params['id'];
      if (!isNaN(newId) && newId !== this.id()) this.id.set(params['id']);
    });
  }

  loadMovieDetails(id: number) {
    this.api.getMovieDetailsAndSimilarRecommendationsCredits$(id).subscribe({
      next: (response) => {
        this.movie.set(response);
        console.log(response);
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

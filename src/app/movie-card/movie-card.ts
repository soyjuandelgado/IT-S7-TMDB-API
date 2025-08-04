import { Component, computed, inject, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IMovie } from '../shared/models/imovie';
import { environment } from '../../environments/environment';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { MovieAverage } from '../movie-average/movie-average';

@Component({
  selector: 'app-movie-card',
  imports: [MatCardModule, MatProgressSpinnerModule, DatePipe, MovieAverage],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss',
})
export class MovieCard {
  movie = input<IMovie>();
  movieAverage = computed(() =>
    Math.round((this.movie()?.vote_average || 0) * 10)
  );
  imgPath = environment.TMDB_IMG_PATH_500;
  router = inject(Router);

  showMovieDetails(id: number) {
    this.router.navigate(['/movie'], { queryParams: { id: id } });
  }
}

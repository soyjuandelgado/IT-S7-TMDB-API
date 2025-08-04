import { Component, inject, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IMovie } from '../shared/models/imovie';
import { environment } from '../../environments/environment';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  imports: [MatCardModule, MatProgressSpinnerModule, DatePipe],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss',
})
export class MovieCard {
  movie = input<IMovie>();
  imgPath = environment.TMDB_IMG_PATH_500;
  router = inject(Router);

  showMovieDetails(id: number) {
    this.router.navigate(['/movie'], { queryParams: { id: id } });
  }

}

import { Component, input } from '@angular/core';
import { MovieCard } from '../movie-card/movie-card';
import { IMovies } from '../shared/models/imovies';

@Component({
  selector: 'app-movie-card-list',
  imports: [MovieCard],
  templateUrl: './movie-card-list.html',
  styleUrl: './movie-card-list.scss'
})
export class MovieCardList {
  movies = input<IMovies>();

}

import { Component, input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-movie-average',
  imports: [MatProgressSpinnerModule],
  templateUrl: './movie-average.html',
  styleUrl: './movie-average.scss',
})
export class MovieAverage {
  value = input<number>(0);
}

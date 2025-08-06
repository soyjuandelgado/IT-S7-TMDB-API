import { Component, input } from '@angular/core';
import { ICast } from '../../shared/models/imovie-credits';
import { environment } from '../../../environments/environment';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-cast-card',
  imports: [MatCardModule],
  templateUrl: './cast-card.html',
  styleUrl: './cast-card.scss'
})
export class CastCard {
  cast = input<ICast>();
  imgPath = environment.TMDB_IMG_PATH_500;
}

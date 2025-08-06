import { Component, input } from '@angular/core';
import { ICast } from '../../shared/models/imovie-credits';
import { CastCard } from '../cast-card/cast-card';

@Component({
  selector: 'app-cast-card-list',
  imports: [CastCard],
  templateUrl: './cast-card-list.html',
  styleUrl: './cast-card-list.scss'
})
export class CastCardList {
  cast = input<ICast[]>();
}

import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IMovies } from './imovies';

@Injectable({
  providedIn: 'root',
})
export class TMDBApiService {
  private http = inject(HttpClient);
  headers = new HttpHeaders().set('Authorization', `Bearer ${environment.TMDB_API_TOKEN}`);
  params = new HttpParams().set('language', 'es-ES');
  //.set("page", "1")

  getMovies() {
    //TODO: control de errores
    return this.http
      .get<IMovies>(environment.TMDB_NOW_PLAYING_URL, {
        params: this.params,
        headers: this.headers,
      })
      // .subscribe((result) => {
      //   console.log(result);
      //   console.log(result['results'][0]);
      //   return result;
      // });
  }
}

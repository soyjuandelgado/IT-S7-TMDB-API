import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { IMovies } from '../models/imovies';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TMDBApiService {
  private http = inject(HttpClient);
  private headers = new HttpHeaders().set('Authorization', `Bearer ${environment.TMDB_API_TOKEN}`);
  private params = new HttpParams().set('language', 'es-ES');
  //.set("page", "1")

  getMovies() {
    return this.http
      .get<IMovies>(environment.TMDB_NOW_PLAYING_URL, {
        params: this.params,
        headers: this.headers,
      })
      .pipe(
        catchError(this.handleError)
      )
  }
  
  //TODO: documentar funcionamiento manejo de errores
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Un error desconocido ocurrió.';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente o de la red
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // El backend devolvió un código de respuesta fallido.
      // El cuerpo de la respuesta puede contener pistas sobre lo que salió mal.
      errorMessage = `Código de error del servidor: ${error.status}\nMensaje: ${error.message}`;
    }
    console.error(errorMessage); // Registra el error en la consola
    return throwError(() => new Error(errorMessage)); // Retorna un observable con un error para que el suscriptor pueda manejarlo
  }
}

import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const TMDB_API_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjE1YWY4NDdjYzE0NzQwOWFjZjQxOTdlZGE0NDExNCIsIm5iZiI6MTc1MzY4NDUzNy4wNzksInN1YiI6IjY4ODcxYTM5ZDQzY2JjOGExMzU1ZjE1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K5IFiAMSxrZ3CRcrtm6yhKfTTKoW6GMclWSrq_PxkWc';
const TMDB_NOW_PLAYING_URL = 'https://api.themoviedb.org/3/movie/now_playing';

//TODO: Extraer interfaces
export interface Movies {
  dates: Dates
  page: number
  results: Movie[]
}

export interface Dates {
  maximum: string
  minimum: string
}

export interface Movie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

@Injectable({
  providedIn: 'root',
})
export class TMDBApiService {

  private http = inject(HttpClient)
  //TODO: Usar environment
  headers = new HttpHeaders().set('Authorization', `Bearer ${TMDB_API_TOKEN}`)
  params = new HttpParams().set("language", "es-ES")
    //.set("page", "1")

  getMovies(){

    //TODO: control de errores
    return this.http.get<Movies>(TMDB_NOW_PLAYING_URL, {params: this.params, headers: this.headers}).subscribe( result => {
      
      console.log(result)
      console.log(result["results"][0])
      return result
    })
  }

}

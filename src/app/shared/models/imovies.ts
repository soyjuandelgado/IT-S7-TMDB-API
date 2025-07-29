import { IMovie } from "./imovie"

export interface IMovies {
  dates: {
    maximum: string
    minimum: string
  }
  page: number
  results: IMovie[]
}
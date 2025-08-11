import { IMovie } from "./imovie"

export interface IMovies {
  dates?: {
    maximum: string
    minimum: string
  }
  page: number
  results: IMovie[],
  total_pages?: number,
  total_results?: number
}
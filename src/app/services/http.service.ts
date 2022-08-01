import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>('http://localhost:3000/movies');
  }

  getMovie(id: string): Observable<Movie> {
    return this.httpClient.get<Movie>('http://localhost:3000/movies/' + id);
  }

  getCategories(): Observable<string[]> {
    return this.httpClient.get<string[]>('http://localhost:3000/categories');
  }

  getMoviesFromCategory(category: string): Observable<Movie[]> {
    return this.getMovies().pipe(
      map(movies => movies.filter(movie => movie.category === category))
    );
  }

  // Wykorzystaj do zrobienia zadania
  getYears(): Observable<string[]> {
    return this.httpClient.get<string[]>('http://localhost:3000/years');
  }

  // Wykorzystaj do zrobienia zadania
  getMoviesFromYear(year: string): Observable<Movie[]> {
    return this.getMovies().pipe(
      map(movies => movies.filter(movie => movie.year === year))
    );
  }
}

import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Movie } from '../models/movie';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpMoviesService {
  private url = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) {}

  // getMovies(): Observable<Movie[]> {
  //   return this.http.get<Movie[]>(this.url + '/movies').pipe(tap(console.log));

  // }

  getMovies(): Observable<HttpResponse<Movie[]>> {
    return this.http
      .get<HttpResponse<Movie[]>>(this.url, { observe: 'response' })
      .pipe(tap(console.log));
  }

  postMovie(movie: Movie) {
    return this.http.post(this.url, movie).pipe(tap(console.log))
  }

  putMovie(movie: Movie) {
    return this.http.put(this.url + '/' + movie.id, movie).pipe(tap(console.log))
  }

  patchMovie(movie: Partial<Movie>) {
    return this.http.patch(this.url + '/' + movie.id, movie).pipe(tap(console.log))
  }

  deleteMovie(id: string): Observable<{}> {
    return this.http.delete<{}>(this.url + '/' + id).pipe(tap(console.log))
  }

  makeError(): Observable<HttpErrorResponse> {
    return this.http.delete(this.url + '/' + 999).pipe(tap(console.log), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error(
      `Name: ${error.name} \n` +
      `Message: ${error.message} \n` +
      `Returned code: ${error.status} \n`
    );

      return throwError('Something bad happened; please try again later.');

  }

  headers(): Observable<HttpResponse<Movie[]>> {
    const myHeaders = new HttpHeaders({
      Authorizations: 'my_token',
      'Content-Type': 'application/json',
      'X-Custom-Header': 'zacznij_programowac',
    });
    return this.http
      .get<Movie[]>(this.url, { observe: 'response', headers: myHeaders })
      .pipe(
        tap((res: HttpResponse<Movie[]>) => {
          console.log(res.headers.keys());
          console.log(res.headers.get('Cache-Control'));
          console.log(res.headers.get('Content-Type'));
          console.log(res.headers.get('Expires'));
          console.log(res.headers.get('Pragma'));
        })
      );
  }
}
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: Observable<Movie[]>;
  constructor(private http: HttpService) {}

  ngOnInit() {
    this.movies = this.http.getMovies();
  }
}

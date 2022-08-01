import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from '../../../models/movie';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-movie-in-year',
  templateUrl: './movie-in-year.component.html',
  styleUrls: ['./movie-in-year.component.css'],
})
export class MovieInYearComponent implements OnInit {
  movies: Observable<Movie[]>;
  constructor(private http: HttpService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.movies = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.http.getMoviesFromYear(params.get('year'))
      )
    );
  }
}

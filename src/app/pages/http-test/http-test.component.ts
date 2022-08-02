import { Component, OnInit } from '@angular/core';
import { HttpMoviesService } from 'src/app/services/http-movies.service';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css'],
})
export class HttpTestComponent {
  constructor(private http: HttpMoviesService) {}

  get() {
    this.http.getMovies().subscribe();
  }

  post() {}

  put() {}

  patch() {}

  delete() {}
}

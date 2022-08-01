import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieInYearComponent } from './movie-in-year.component';

describe('MovieInYearComponent', () => {
  let component: MovieInYearComponent;
  let fixture: ComponentFixture<MovieInYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieInYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieInYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

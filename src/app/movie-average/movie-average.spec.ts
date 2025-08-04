import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieAverage } from './movie-average';

describe('MovieAverage', () => {
  let component: MovieAverage;
  let fixture: ComponentFixture<MovieAverage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieAverage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieAverage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

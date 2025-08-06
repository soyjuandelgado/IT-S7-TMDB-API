import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardList } from './movie-card-list';

describe('MovieCardList', () => {
  let component: MovieCardList;
  let fixture: ComponentFixture<MovieCardList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCardList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieCardList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

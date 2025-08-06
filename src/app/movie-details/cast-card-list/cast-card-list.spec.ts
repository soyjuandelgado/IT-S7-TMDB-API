import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastCardList } from './cast-card-list';

describe('CastCardList', () => {
  let component: CastCardList;
  let fixture: ComponentFixture<CastCardList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CastCardList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CastCardList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

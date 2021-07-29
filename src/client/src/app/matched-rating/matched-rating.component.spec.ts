import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchedRatingComponent } from './matched-rating.component';

describe('MatchedRatingComponent', () => {
  let component: MatchedRatingComponent;
  let fixture: ComponentFixture<MatchedRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchedRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchedRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchedCardComponent } from './matched-card.component';

describe('MatchedCardComponent', () => {
  let component: MatchedCardComponent;
  let fixture: ComponentFixture<MatchedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchedCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

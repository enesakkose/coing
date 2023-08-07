import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinsHeadComponent } from './coins-head.component';

describe('CoinsHeadComponent', () => {
  let component: CoinsHeadComponent;
  let fixture: ComponentFixture<CoinsHeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoinsHeadComponent]
    });
    fixture = TestBed.createComponent(CoinsHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

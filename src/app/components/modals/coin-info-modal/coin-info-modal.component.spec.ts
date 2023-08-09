import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinInfoModalComponent } from './coin-info-modal.component';

describe('CoinInfoModalComponent', () => {
  let component: CoinInfoModalComponent;
  let fixture: ComponentFixture<CoinInfoModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoinInfoModalComponent]
    });
    fixture = TestBed.createComponent(CoinInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

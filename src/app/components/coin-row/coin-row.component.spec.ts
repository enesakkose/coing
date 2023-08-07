import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinRowComponent } from './coin-row.component';

describe('CoinRowComponent', () => {
  let component: CoinRowComponent;
  let fixture: ComponentFixture<CoinRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoinRowComponent]
    });
    fixture = TestBed.createComponent(CoinRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

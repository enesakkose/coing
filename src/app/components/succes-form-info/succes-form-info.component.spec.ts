import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesFormInfoComponent } from './succes-form-info.component';

describe('SuccesFormInfoComponent', () => {
  let component: SuccesFormInfoComponent;
  let fixture: ComponentFixture<SuccesFormInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccesFormInfoComponent]
    });
    fixture = TestBed.createComponent(SuccesFormInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

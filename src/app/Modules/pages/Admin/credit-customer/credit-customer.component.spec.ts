import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCustomerComponent } from './credit-customer.component';

describe('CreditCustomerComponent', () => {
  let component: CreditCustomerComponent;
  let fixture: ComponentFixture<CreditCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditSaleComponent } from './credit-sale.component';

describe('CreditSaleComponent', () => {
  let component: CreditSaleComponent;
  let fixture: ComponentFixture<CreditSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

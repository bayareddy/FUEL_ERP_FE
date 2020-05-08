import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletPaymentComponent } from './wallet-payment.component';

describe('WalletPaymentComponent', () => {
  let component: WalletPaymentComponent;
  let fixture: ComponentFixture<WalletPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PumpNozzleComponent } from './pump-nozzle.component';

describe('PumpNozzleComponent', () => {
  let component: PumpNozzleComponent;
  let fixture: ComponentFixture<PumpNozzleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PumpNozzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PumpNozzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

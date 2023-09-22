import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverySeguimientoComponent } from './delivery-seguimiento.component';

describe('DeliverySeguimientoComponent', () => {
  let component: DeliverySeguimientoComponent;
  let fixture: ComponentFixture<DeliverySeguimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliverySeguimientoComponent]
    });
    fixture = TestBed.createComponent(DeliverySeguimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

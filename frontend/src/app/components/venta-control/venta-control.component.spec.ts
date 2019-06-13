import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaControlComponent } from './venta-control.component';

describe('VentaControlComponent', () => {
  let component: VentaControlComponent;
  let fixture: ComponentFixture<VentaControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentaControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

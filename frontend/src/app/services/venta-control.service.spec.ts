import { TestBed } from '@angular/core/testing';

import { VentaControlService } from './venta-control.service';

describe('VentaControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VentaControlService = TestBed.get(VentaControlService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SellControlService } from './sell-control.service';

describe('VentaControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SellControlService = TestBed.get(SellControlService);
    expect(service).toBeTruthy();
  });
});

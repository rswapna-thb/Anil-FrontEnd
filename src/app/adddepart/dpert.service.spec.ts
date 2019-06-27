import { TestBed } from '@angular/core/testing';

import { DpertService } from './dpert.service';

describe('DpertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DpertService = TestBed.get(DpertService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SucreService } from './sucre.service';

describe('SucreService', () => {
  let service: SucreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SucreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

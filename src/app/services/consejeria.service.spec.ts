import { TestBed } from '@angular/core/testing';

import { ConsejeriaService } from './consejeria.service';

describe('ConsejeriaService', () => {
  let service: ConsejeriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsejeriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

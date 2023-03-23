import { TestBed } from '@angular/core/testing';

import { SevicecoService } from './seviceco.service';

describe('SevicecoService', () => {
  let service: SevicecoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SevicecoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

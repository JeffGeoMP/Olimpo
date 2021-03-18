import { TestBed } from '@angular/core/testing';

import { LogueoService } from './logueo.service';

describe('LogueoService', () => {
  let service: LogueoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogueoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

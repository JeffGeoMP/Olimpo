import { TestBed } from '@angular/core/testing';

import { LogueoService } from './logueo.service';

describe('LogueoService', () => {
  let service: LogueoService;

  beforeEach(async() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogueoService);
  });
  it('Accede',async () => {
    expect(service.Validar('as','as'));
  });

  
 
});

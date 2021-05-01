import { TestBed } from '@angular/core/testing';

import { LogueoService } from './logueo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LogueoService', () => {
  let service: LogueoService;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(LogueoService);
  });
  it('Accede',async () => {
    expect(service.Validar('as','as'));
  });

  
 
});

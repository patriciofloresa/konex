import { TestBed } from '@angular/core/testing';

import { AdpolizasService } from './Adpolizas.service';

describe('AdpolizasService', () => {
  let service: AdpolizasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdpolizasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CarNameService } from './car-name.service';

describe('CarNameService', () => {
  let service: CarNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

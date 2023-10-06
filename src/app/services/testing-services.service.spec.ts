import { TestBed } from '@angular/core/testing';

import { TestingServicesService } from './testing-services.service';

describe('TestingServicesService', () => {
  let service: TestingServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestingServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

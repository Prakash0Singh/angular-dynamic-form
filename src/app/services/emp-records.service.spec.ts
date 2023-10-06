import { TestBed } from '@angular/core/testing';

import { EmpRecordsService } from './emp-records.service';

describe('EmpRecordsService', () => {
  let service: EmpRecordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpRecordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

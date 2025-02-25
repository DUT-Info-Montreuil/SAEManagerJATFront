import { TestBed } from '@angular/core/testing';

import { PassagesoutenanceService } from './passagesoutenance.service';

describe('PassagesoutenanceService', () => {
  let service: PassagesoutenanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassagesoutenanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

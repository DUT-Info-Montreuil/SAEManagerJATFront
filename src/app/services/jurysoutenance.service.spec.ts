import { TestBed } from '@angular/core/testing';

import { JurysoutenanceService } from './jurysoutenance.service';

describe('JurysoutenanceService', () => {
  let service: JurysoutenanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JurysoutenanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

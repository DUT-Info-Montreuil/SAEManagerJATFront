import { TestBed } from '@angular/core/testing';

import { NotesoutenanceService } from './notesoutenance.service';

describe('NotesoutenanceService', () => {
  let service: NotesoutenanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesoutenanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

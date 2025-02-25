import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesoutenanceComponent } from './notesoutenance.component';

describe('NotesoutenanceComponent', () => {
  let component: NotesoutenanceComponent;
  let fixture: ComponentFixture<NotesoutenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesoutenanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesoutenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JurysoutenanceComponent } from './jurysoutenance.component';

describe('JurysoutenanceComponent', () => {
  let component: JurysoutenanceComponent;
  let fixture: ComponentFixture<JurysoutenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JurysoutenanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JurysoutenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

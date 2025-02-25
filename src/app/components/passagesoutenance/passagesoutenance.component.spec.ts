import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagesoutenanceComponent } from './passagesoutenance.component';

describe('PassagesoutenanceComponent', () => {
  let component: PassagesoutenanceComponent;
  let fixture: ComponentFixture<PassagesoutenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassagesoutenanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassagesoutenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourceComponent } from './ressources.component';

describe('RessourcesComponent', () => {
  let component: RessourceComponent;
  let fixture: ComponentFixture<RessourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RessourceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RessourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

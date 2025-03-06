import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSoutenanceComponent } from './navbar-soutenance.component';

describe('NavbarSoutenanceComponent', () => {
  let component: NavbarSoutenanceComponent;
  let fixture: ComponentFixture<NavbarSoutenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarSoutenanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarSoutenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

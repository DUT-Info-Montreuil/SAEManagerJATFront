import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRessourceComponent } from './list-ressource.component';

describe('ListRessourceComponent', () => {
  let component: ListRessourceComponent;
  let fixture: ComponentFixture<ListRessourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListRessourceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRessourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

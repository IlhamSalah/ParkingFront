import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherVoituresPersonneComponent } from './afficher-voitures-personne.component';

describe('AfficherVoituresPersonneComponent', () => {
  let component: AfficherVoituresPersonneComponent;
  let fixture: ComponentFixture<AfficherVoituresPersonneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherVoituresPersonneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherVoituresPersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterParkingVoitureComponent } from './affecter-parking-voiture.component';

describe('AffecterParkingVoitureComponent', () => {
  let component: AffecterParkingVoitureComponent;
  let fixture: ComponentFixture<AffecterParkingVoitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffecterParkingVoitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffecterParkingVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

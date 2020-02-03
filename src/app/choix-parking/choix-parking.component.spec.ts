import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixParkingComponent } from './choix-parking.component';

describe('ChoixParkingComponent', () => {
  let component: ChoixParkingComponent;
  let fixture: ComponentFixture<ChoixParkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixParkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

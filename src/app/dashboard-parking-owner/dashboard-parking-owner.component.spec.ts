import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardParkingOwnerComponent } from './dashboard-parking-owner.component';

describe('DashboardParkingOwnerComponent', () => {
  let component: DashboardParkingOwnerComponent;
  let fixture: ComponentFixture<DashboardParkingOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardParkingOwnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardParkingOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

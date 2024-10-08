import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerSecurityComponent } from './owner-security.component';

describe('OwnerSecurityComponent', () => {
  let component: OwnerSecurityComponent;
  let fixture: ComponentFixture<OwnerSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OwnerSecurityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageKidsButtonComponent } from './manage-kids-button.component';

describe('ManageKidsButtonComponent', () => {
  let component: ManageKidsButtonComponent;
  let fixture: ComponentFixture<ManageKidsButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ManageKidsButtonComponent]
    });
    fixture = TestBed.createComponent(ManageKidsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

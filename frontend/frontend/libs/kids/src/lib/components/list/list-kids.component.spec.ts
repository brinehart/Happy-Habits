import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageKidsComponent } from './manage-kids.component';

describe('ManageComponent', () => {
  let component: ManageKidsComponent;
  let fixture: ComponentFixture<ManageKidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageKidsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ManageKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

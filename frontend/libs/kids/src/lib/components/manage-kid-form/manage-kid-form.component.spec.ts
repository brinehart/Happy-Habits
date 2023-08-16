import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageKidFormComponent } from './manage-kid-form.component';

describe('ManageKidFormComponent', () => {
  let component: ManageKidFormComponent;
  let fixture: ComponentFixture<ManageKidFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ManageKidFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageKidFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

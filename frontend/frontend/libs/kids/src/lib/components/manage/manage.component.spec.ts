import { TestBed } from '@angular/core/testing';
import { ManageKidsComponent } from './manage.component';

describe('ManageComponent', () => {
  let component: ManageKidsComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ManageKidsComponent],
    }).compileComponents();

    component = TestBed.inject(ManageKidsComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

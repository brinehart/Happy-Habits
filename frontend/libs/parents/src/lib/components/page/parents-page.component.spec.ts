import { TestBed } from '@angular/core/testing';
import { ParentsPageComponent } from './parents-page.component';

describe('ParentsComponent', () => {
  let component: ParentsPageComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ParentsPageComponent],
    }).compileComponents();

    component = TestBed.inject(ParentsPageComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { TabsComponent } from './tabs.component';

describe('TabsComponent', () => {
  let component: TabsComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [TabsComponent],
    }).compileComponents();

    component = TestBed.inject(TabsComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

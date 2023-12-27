import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KidsPageComponent } from './kids-page.component';

describe('KidsComponent', () => {
  let component: KidsPageComponent;
  let fixture: ComponentFixture<KidsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KidsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

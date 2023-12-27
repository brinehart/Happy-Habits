import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KidAvatarSelectComponent } from './kid-avatar-select.component';

describe('KidAvatarSelectComponent', () => {
  let component: KidAvatarSelectComponent;
  let fixture: ComponentFixture<KidAvatarSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ KidAvatarSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidAvatarSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

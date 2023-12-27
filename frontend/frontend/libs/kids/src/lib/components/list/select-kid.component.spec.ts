import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectKidComponent } from './select-kid.component';

describe('SelectKidComponent', () => {
  let component: SelectKidComponent;
  let fixture: ComponentFixture<SelectKidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SelectKidComponent]
    });
    fixture = TestBed.createComponent(SelectKidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

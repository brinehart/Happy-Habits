import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent | undefined = undefined;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    app = TestBed.inject(AppComponent);
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
    expect(app?.title).toEqual('Happy Habits');
  });
});

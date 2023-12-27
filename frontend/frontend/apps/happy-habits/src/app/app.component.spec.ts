import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideAutoSpy, Spy } from 'jest-auto-spies';
import { DarkModeService } from '@hh/shared';

describe('AppComponent', () => {
  let app: AppComponent | undefined = undefined;
  let darkModeServiceSpy: Spy<DarkModeService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        AppComponent,
        provideAutoSpy(DarkModeService, {
          methodsToSpyOn: ['initDarkMode'],
        }),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    app = TestBed.inject(AppComponent);
    darkModeServiceSpy = TestBed.inject(
      DarkModeService
    ) as Spy<DarkModeService>;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
    expect(app?.title).toEqual('Happy Habits');
  });

  describe(`METHOD ngOnInit`, () => {
    it(`WHEN called
        THEN darkModeService.initDarkMode called`, async () => {
      // GIVEN

      // WHEN
      await app?.ngOnInit();

      // THEN
      expect(darkModeServiceSpy.initDarkMode).toHaveBeenCalled();
    });
  });
});

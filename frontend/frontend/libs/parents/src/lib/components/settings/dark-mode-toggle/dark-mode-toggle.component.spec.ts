import { TestBed } from '@angular/core/testing';
import { DarkModeToggleComponent } from './dark-mode-toggle.component';
import { provideAutoSpy, Spy } from 'jest-auto-spies';
import { DarkModeService } from '@hh/shared';
import { ToggleCustomEvent } from '@ionic/angular';

describe('DarkModeToggleComponent', () => {
  let component: DarkModeToggleComponent;
  let darkModeServiceSpy: Spy<DarkModeService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [DarkModeToggleComponent, provideAutoSpy(DarkModeService)],
    }).compileComponents();
    component = TestBed.inject(DarkModeToggleComponent);
    darkModeServiceSpy = TestBed.inject<DarkModeService>(
      DarkModeService
    ) as Spy<DarkModeService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('toggleTheme', () => {
    it('should call darkModeService.toggleTheme', async () => {
      // Arrange
      const toggleState: ToggleCustomEvent = {
        detail: { checked: true, value: true },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any;
      darkModeServiceSpy.toggleTheme.resolveWith();

      // Act
      await component.toggleTheme(toggleState);

      // Assert
      expect(darkModeServiceSpy.toggleTheme).toHaveBeenCalledWith(toggleState);
    });
  });
});

import { TestBed } from '@angular/core/testing';

import { DarkModeService } from './dark-mode.service';
import { provideAutoSpy, Spy } from 'jest-auto-spies';
import { StorageService } from '../ionic-storage/storage.service';
import { DatabaseTableTypes, ISettings, Settings } from '../../models';

describe('DarkModeService', () => {
  let service: DarkModeService;
  let storageServiceSpy: Spy<StorageService<ISettings>>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideAutoSpy(StorageService<ISettings>, {
          methodsToSpyOn: ['get', 'upsertOne'],
        }),
      ],
    });
    service = TestBed.inject(DarkModeService);
    storageServiceSpy = TestBed.inject(StorageService) as never;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('initDarkMode', () => {
    beforeEach(() => {
      mockWindowMatchMedia({ matches: true });
    });

    describe('WHEN settings is undefined', () => {
      it('AND prefers dark mode should call storageService.upsertOne and toggleDarkMode', async () => {
        // Arrange
        storageServiceSpy.get.resolveWith(undefined);
        jest.spyOn(service.darkModeEnabled, 'set').mockReturnValue();
        jest.spyOn(service as never, 'toggleDarkMode').mockImplementation();

        // Act
        await service.initDarkMode();

        // Assert
        expect(storageServiceSpy.upsertOne).toHaveBeenCalledWith(
          new Settings(),
          DatabaseTableTypes.Settings
        );
        expect(service.darkModeEnabled.set).toHaveBeenCalledWith(true);
        expect(service['toggleDarkMode']).toHaveBeenCalledWith(true);
      });
    });

    describe('WHEN settings is valid', () => {
      it('AND should call storageService.upsertOne', async () => {
        // Arrange
        storageServiceSpy.get.resolveWith({
          id: '',
          darkModeEnabled: true,
        } as ISettings);
        jest.spyOn(service.darkModeEnabled, 'set').mockReturnValue();
        jest.spyOn(service as never, 'toggleDarkMode').mockImplementation();

        // Act
        await service.initDarkMode();

        // Assert
        expect(storageServiceSpy.upsertOne).not.toHaveBeenCalled();
        expect(service.darkModeEnabled.set).toHaveBeenCalledWith(true);
        expect(service['toggleDarkMode']).toHaveBeenCalledWith(true);
      });
    });
  });

  describe('toggleTheme', () => {
    beforeEach(() => {
      jest.spyOn(service.darkModeEnabled, 'set').mockReturnValue();
      mockWindowMatchMedia({ matches: true });
    });

    describe(`WHEN toggleState is undefined`, () => {
      it(`AND settings are undefined THEN should call toggleDarkMode with true`, async () => {
        // Arrange
        storageServiceSpy.get.resolveWith(undefined);
        jest.spyOn(service.darkModeEnabled, 'set').mockReturnValue();
        jest.spyOn(service as never, 'toggleDarkMode').mockImplementation();

        // Act
        await service.toggleTheme();

        // Assert
        expect(storageServiceSpy.upsertOne).not.toHaveBeenCalled();
        expect(service['toggleDarkMode']).toHaveBeenCalledWith(true);
      });

      it(`AND settings exist is undefined THEN should call toggleDarkMode and set darkModeEnabled to true`, async () => {
        // Arrange
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        jest.spyOn(service as any, 'getSettings').mockResolvedValue({
          id: 'settings',
          darkModeEnabled: undefined,
        } as ISettings);
        jest.spyOn(service as never, 'toggleDarkMode').mockImplementation();

        // Act
        await service.toggleTheme();

        // Assert
        expect(storageServiceSpy.upsertOne).toHaveBeenCalledWith(
          {
            id: 'settings',
            darkModeEnabled: false,
          },
          DatabaseTableTypes.Settings
        );
        expect(service['toggleDarkMode']).toHaveBeenCalledWith(false);
      });

      it(`AND darkModeEnabled is true THEN should call toggleDarkMode with false`, async () => {
        // Arrange
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        jest.spyOn(service as any, 'getSettings').mockResolvedValue({
          id: 'settings',
          darkModeEnabled: undefined,
        } as ISettings);
        service.darkModeEnabled.set(true);
        jest.spyOn(service as never, 'toggleDarkMode').mockImplementation();

        // Act
        await service.toggleTheme();

        // Assert
        expect(storageServiceSpy.upsertOne).toHaveBeenCalledWith(
          {
            id: 'settings',
            darkModeEnabled: false,
          },
          DatabaseTableTypes.Settings
        );
        expect(service['toggleDarkMode']).toHaveBeenCalledWith(false);
      });

      it(`AND darkModeEnabled is false THEN should call toggleDarkMode with true`, async () => {
        // Arrange
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        jest.spyOn(service as any, 'getSettings').mockResolvedValue({
          id: 'settings',
          darkModeEnabled: false,
        } as ISettings);
        service.darkModeEnabled.set(false);
        jest.spyOn(service as never, 'toggleDarkMode').mockImplementation();

        // Act
        await service.toggleTheme();

        // Assert
        expect(storageServiceSpy.upsertOne).toHaveBeenCalledWith(
          {
            id: 'settings',
            darkModeEnabled: false,
          },
          DatabaseTableTypes.Settings
        );
        expect(service['toggleDarkMode']).toHaveBeenCalledWith(false);
      });
    });

    describe(`WHEN toggleState is defined`, () => {
      it(`AND detail.checked is true THEN should call toggleDarkMode with true`, async () => {
        // Arrange
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        jest.spyOn(service as any, 'getSettings').mockResolvedValue({
          id: 'settings',
          darkModeEnabled: true,
        } as ISettings);
        jest.spyOn(service as never, 'toggleDarkMode').mockImplementation();

        // Act
        await service.toggleTheme({
          detail: {
            checked: true,
          },
        } as never);

        // Assert
        expect(storageServiceSpy.upsertOne).toHaveBeenCalledWith(
          {
            id: 'settings',
            darkModeEnabled: true,
          },
          DatabaseTableTypes.Settings
        );
        expect(service['toggleDarkMode']).toHaveBeenCalledWith(true);
      });

      it(`AND detail.checked is false THEN should call toggleDarkMode with false`, async () => {
        // Arrange
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        jest.spyOn(service as any, 'getSettings').mockResolvedValue({
          id: 'settings',
          darkModeEnabled: false,
        } as ISettings);
        jest.spyOn(service as never, 'toggleDarkMode').mockImplementation();

        // Act
        await service.toggleTheme({
          detail: {
            checked: false,
          },
        } as never);

        // Assert
        expect(storageServiceSpy.upsertOne).toHaveBeenCalledWith(
          {
            id: 'settings',
            darkModeEnabled: false,
          },
          DatabaseTableTypes.Settings
        );
        expect(service['toggleDarkMode']).toHaveBeenCalledWith(false);
      });
    });
  });

  describe('getSettings', () => {
    it('should call storageService.get to get settings', () => {
      // Arrange
      storageServiceSpy.get.resolveWith({
        id: 'settings',
        darkModeEnabled: true,
      } as ISettings);

      // Act
      service['getSettings']();

      // Assert
      expect(storageServiceSpy.get).toHaveBeenCalledWith(
        'settings',
        DatabaseTableTypes.Settings
      );
    });
  });

  describe('toggleDarkMode', () => {
    const testCases = [true, false];
    beforeEach(() => {
      service.darkModeEnabled.set(undefined);
    });

    testCases.forEach((testCase) => {
      it(`should call document.body.classList.toggle with 'dark' and ${testCase}`, () => {
        // Arrange
        const classListToggleSpy = jest.spyOn(
          document.body.classList,
          'toggle'
        );

        // Act
        service['toggleDarkMode'](testCase);

        // Assert
        expect(service.darkModeEnabled()).toEqual(testCase);
        expect(classListToggleSpy).toHaveBeenCalledWith('dark', testCase);
      });
    });
  });
});

function mockWindowMatchMedia(props: { matches: boolean }) {
  return Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: props.matches,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
}

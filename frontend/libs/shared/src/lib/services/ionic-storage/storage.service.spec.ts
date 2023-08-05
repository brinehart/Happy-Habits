import { TestBed } from '@angular/core/testing';
import { Storage } from '@ionic/storage-angular';
import { provideAutoSpy, Spy } from 'jest-auto-spies';
import { BaseEntity, DatabaseTableTypes } from '../../models';
import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService<BaseEntity>;

  let storageSpy: Spy<Storage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideAutoSpy(Storage, {
          methodsToSpyOn: ['get', 'set', 'clear', 'create'],
        }),
      ],
    });
    service = TestBed.inject(StorageService);

    storageSpy = TestBed.inject(Storage) as Spy<Storage>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('METHOD init', () => {
    it(`WHEN called
        THEN storage.create called`, async () => {
      // GIVEN

      // WHEN
      await service.init();

      // THEN
      expect(storageSpy.create).toHaveBeenCalled();
    });
  });

  describe('CRUD Operators', () => {
    beforeEach(() => {
      jest.spyOn(service, 'init').mockImplementation(async () => {
        return;
      });
    });

    describe('METHOD get', () => {
      it(`WHEN called with valid table and id that is in table THEN return entity with the same id `, async () => {
        // GIVEN
        const id = '12345';
        const table = DatabaseTableTypes.Settings;
        const fakeTaskEntryArray = [{ id: '12345' }, { id: '67890' }];
        storageSpy.get.mockResolvedValue(fakeTaskEntryArray);

        // WHEN
        const result = await service.get(id, table);

        // THEN
        expect(service.init).toBeCalled();
        expect(storageSpy.get).toHaveBeenCalledWith(table);
        expect(result).toEqual({ id });
      });

      it(`WHEN called with valid table and id that is not in table THEN return undefined `, async () => {
        // GIVEN
        const id = 'settings2';
        const table = DatabaseTableTypes.Settings;
        const fakeSettings = [{ id: 'settings', darkModeEnabled: true }];
        storageSpy.get.mockResolvedValue(fakeSettings);

        // WHEN
        const result = await service.get(id, table);

        // THEN
        expect(service.init).toBeCalled();
        expect(storageSpy.get).toHaveBeenCalledWith(table);
        expect(result).toEqual(undefined);
      });
    });

    describe('METHOD getAll', () => {
      it(`WHEN called with valid table
        THEN storage.get called with table`, async () => {
        // GIVEN
        const table = DatabaseTableTypes.Settings;

        // WHEN
        await service.getAll(table);

        // THEN
        expect(service.init).toBeCalled();
        expect(storageSpy.get).toHaveBeenCalledWith(table);
      });
    });

    describe('METHOD upsertOne', () => {
      it(`WHEN called with a valid table and a new entity THEN expect storage.set called with existing entities and new entity`, async () => {
        // GIVEN
        const existingEntities = [{ id: '1' }, { id: '2' }];
        const newEntity = { id: '3' };
        const table = DatabaseTableTypes.Settings;
        storageSpy.get.mockResolvedValue(existingEntities);

        // WHEN
        await service.upsertOne(newEntity, table);

        // THEN
        expect(service.init).toBeCalled();
        expect(storageSpy.get).toHaveBeenCalledWith(table);
        expect(storageSpy.set).toHaveBeenCalledWith(table, [
          ...existingEntities,
          newEntity,
        ]);
      });

      it(`WHEN called with a valid table and an existing entity THEN expect storage.set called with updated entities`, async () => {
        // GIVEN
        const existingEntities = [
          { id: '1', name: 'task 1' },
          { id: '2', name: 'task 2' },
        ];
        const newEntity = { id: '2', name: 'task 4' };
        const table = DatabaseTableTypes.Settings;
        storageSpy.get.mockResolvedValue(existingEntities);

        // WHEN
        await service.upsertOne(newEntity, table);

        // THEN
        expect(service.init).toBeCalled();
        expect(storageSpy.get).toHaveBeenCalledWith(table);
        expect(storageSpy.set).toHaveBeenCalledWith(table, [
          { id: '1', name: 'task 1' },
          { id: '2', name: 'task 4' },
        ]);
      });
    });

    describe('METHOD upsertMany', () => {
      it(`WHEN called with a valid table and entirely new entities THEN expect storage.set called with existing and new entities`, async () => {
        // GIVEN
        const existingEntities = [
          { id: '1', name: '1' },
          { id: '2', name: '2' },
          { id: '3', name: '3' },
        ];
        const newEntities = [
          { id: '4', name: '4' },
          { id: '5', name: '5' },
        ];
        const table = DatabaseTableTypes.Settings;
        storageSpy.get.mockResolvedValue(existingEntities);

        // WHEN
        await service.upsertMany(newEntities, table);

        // THEN
        expect(service.init).toBeCalled();
        expect(storageSpy.get).toHaveBeenCalledWith(table);
        expect(storageSpy.set).toHaveBeenCalledWith(table, [
          ...existingEntities,
          ...newEntities,
        ]);
      });

      it(`WHEN called with a valid table and entirely existing entities THEN expect storage.set called with updated existing entities`, async () => {
        // GIVEN
        const existingEntities = [
          { id: '1', name: '1' },
          { id: '2', name: '2' },
          { id: '3', name: '3' },
        ];
        const newEntities = [
          { id: '1', name: '4' },
          { id: '2', name: '5' },
        ];
        const table = DatabaseTableTypes.Settings;
        storageSpy.get.mockResolvedValue(existingEntities);

        // WHEN
        await service.upsertMany(newEntities, table);

        // THEN
        expect(service.init).toBeCalled();
        expect(storageSpy.get).toHaveBeenCalledWith(table);
        expect(storageSpy.set).toHaveBeenCalledWith(table, [
          { id: '1', name: '4' },
          { id: '2', name: '5' },
          { id: '3', name: '3' },
        ]);
      });

      it(`WHEN called with a valid table and mix of existing and new entities THEN expect storage.set called with updated existing entities`, async () => {
        // GIVEN
        const existingEntities = [
          { id: '1', name: '1' },
          { id: '2', name: '2' },
          { id: '3', name: '3' },
        ];
        const newEntities = [
          { id: '4', name: '4' },
          { id: '1', name: '5' },
        ];
        const table = DatabaseTableTypes.Settings;
        storageSpy.get.mockResolvedValue(existingEntities);

        // WHEN
        await service.upsertMany(newEntities, table);

        // THEN
        expect(service.init).toBeCalled();
        expect(storageSpy.get).toHaveBeenCalledWith(table);
        expect(storageSpy.set).toHaveBeenCalledWith(table, [
          { id: '1', name: '5' },
          { id: '2', name: '2' },
          { id: '3', name: '3' },
          { id: '4', name: '4' },
        ]);
      });
    });

    describe('METHOD deleteOne', () => {
      it(`WHEN called with valid table and id in storage THEN expect storage.set called with existing entities without entity with passed id`, async () => {
        // GIVEN
        const table = DatabaseTableTypes.Settings;
        const existingEntities = [
          { id: '1', name: '1' },
          { id: '2', name: '2' },
          { id: '3', name: '3' },
        ];
        storageSpy.get.mockResolvedValue(existingEntities);

        const idToDelete = '1';

        // WHEN
        await service.deleteOne(idToDelete, table);

        // THEN
        expect(service.init).toBeCalled();
        expect(storageSpy.get).toHaveBeenCalledWith(table);
        expect(storageSpy.set).toHaveBeenCalledWith(table, [
          { id: '2', name: '2' },
          { id: '3', name: '3' },
        ]);
      });

      it(`WHEN called with valid table and id in storage THEN expect set called with empty array`, async () => {
        // GIVEN
        const table = DatabaseTableTypes.Settings;
        storageSpy.get.mockResolvedValue(undefined);
        const idToDelete = '1';

        // WHEN
        await service.deleteOne(idToDelete, table);
        // THEN
        expect(service.init).toBeCalled();
        expect(storageSpy.get).toHaveBeenCalledWith(table);
        expect(storageSpy.set).toHaveBeenCalledWith(table, []);
      });
    });

    describe('METHOD deleteMany', () => {
      it(`WHEN called with a valid table and array of existing ids THEN expect storage.set called with existingArrays without entities with passed ids`, async () => {
        // GIVEN
        const table = DatabaseTableTypes.Settings;
        const existingEntities = [
          { id: '1', name: '1' },
          { id: '2', name: '2' },
          { id: '3', name: '3' },
        ];
        storageSpy.get.mockResolvedValue(existingEntities);

        const idsToDelete = ['1', '2'];

        // WHEN
        await service.deleteMany(idsToDelete, table);

        // THEN
        expect(service.init).toBeCalled();
        expect(storageSpy.get).toHaveBeenCalledWith(table);
        expect(storageSpy.set).toHaveBeenCalledWith(table, [
          { id: '3', name: '3' },
        ]);
      });
    });

    describe('METHOD clearTable', () => {
      it(`WHEN called THEN expect storage.set() called with passed in table`, async () => {
        // GIVEN
        const table = DatabaseTableTypes.Settings;

        // WHEN
        await service.clearTable(table);

        // THEN
        expect(service.init).toBeCalled();
        expect(storageSpy.set).toHaveBeenCalledWith(table, []);
      });
    });
  });
});

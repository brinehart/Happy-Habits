import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { BaseEntity, DatabaseTable, ID } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class StorageService<T extends BaseEntity> {
  constructor(private storage: Storage) {}

  /** Creates the Ionic Storage instance*/
  async init() {
    await this.storage.create();
  }

  /**
   * Returns an entity from the specified table.
   * @param id - The id of the entity you want to return.
   * @param table - The table to queried.
   */
  async get<T extends BaseEntity>(
    id: ID,
    table: DatabaseTable
  ): Promise<T | undefined> {
    await this.init();
    const entity: T[] | undefined = await this.storage.get(table);
    if (!entity) {
      return undefined;
    }
    return entity.find((x) => x.id === id);
  }

  /**
   * Returns all entities from a table.
   * @param table - The table to be queried.
   */
  async getAll<T>(table: DatabaseTable): Promise<T[] | undefined> {
    await this.init();
    const entity: T[] | undefined = await this.storage.get(table);
    if (!entity) {
      return undefined;
    }
    return entity;
  }

  /**
   * Either inserts or updates an entity in the specified table.
   * @param entity - The entity to be inserted or updated.
   * @param table - The table to be queried.
   */
  public async upsertOne(entity: T, table: DatabaseTable) {
    await this.init();
    let existingEntities: T[] | undefined = await this.storage.get(table);

    existingEntities = this.arrayUpsertHelper(existingEntities, entity);

    await this.storage?.set(table, existingEntities);
  }

  /**
   * Either inserts or updates many entities in the specified table.
   * @param entities - An array of entities to be inserted or updated.
   * @param table - The table to be queried.
   */
  public async upsertMany(entities: T[], table: DatabaseTable) {
    await this.init();
    let existingEntities: T[] | undefined = await this.storage.get(table);

    if (!existingEntities) {
      existingEntities = [];
    }

    entities.forEach((entity) => {
      existingEntities = this.arrayUpsertHelper(existingEntities, entity);
    });

    await this.storage.set(table, existingEntities);
  }

  /**
   * Removes an entity from the specified table.
   * @param id - The id of the entity to be removed.
   * @param table - The table to be queried.
   */
  public async deleteOne(id: ID, table: DatabaseTable) {
    await this.init();
    let existingEntities: T[] | undefined = await this.storage?.get(table);

    if (!existingEntities) {
      existingEntities = [];
    }

    const updatedEntities = existingEntities.filter(
      (entity) => entity.id !== id
    );
    this.storage.set(table, updatedEntities);
  }

  /**
   * Removes many entities from the specified table.
   * @param ids - An array of ids of the entities to be removed.
   * @param table - The tabled to be queried.
   */
  public async deleteMany(ids: ID[], table: DatabaseTable) {
    await this.init();
    let existingEntities: T[] | undefined = await this.storage.get(table);

    if (!existingEntities) {
      existingEntities = [];
    }

    const newEntities = existingEntities.filter(
      (entity) => !ids.some((id) => entity.id == id)
    );

    this.storage.set(table, newEntities);
  }

  /**
   * Removed all entities from a table.
   * @param table - The table to be queried.
   */
  async clearTable(table: DatabaseTable) {
    await this.init();
    await this.storage.set(table, []);
  }

  /**
   * A helper function to either update or insert an element into an array.
   * @param array - The array to be 'queried'.
   * @param element - The element to be either updated or inserted.
   * @private
   */
  private arrayUpsertHelper(array: T[] | undefined, element: T) {
    if (!array) {
      return [element];
    }

    const newArray: T[] = [...array];
    const i = array.findIndex((item) => item.id === element.id);
    if (i > -1) {
      newArray[i] = element;
    } else {
      newArray.push(element);
    }
    return newArray;
  }
}

import { BaseEntity } from '../base-entity';

export interface ISettings extends BaseEntity {
  darkModeEnabled: boolean | undefined;
}

export class Settings implements ISettings {
  id = 'settings';
  darkModeEnabled: boolean = matchMedia('(prefers-color-scheme: dark)').matches;
}

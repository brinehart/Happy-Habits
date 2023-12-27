import { Injectable, signal } from '@angular/core';
import { StorageService } from '../ionic-storage/storage.service';
import { DatabaseTableTypes, ISettings, Settings } from '../../models';
import { ToggleCustomEvent } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  darkModeEnabled = signal<boolean | undefined>(undefined);

  constructor(private storageService: StorageService<ISettings>) {}

  async initDarkMode() {
    const settings = await this.getSettings();
    if (settings === undefined) {
      await this.storageService.upsertOne(
        new Settings(),
        DatabaseTableTypes.Settings
      );
    }
    const isDarkMode =
      settings?.darkModeEnabled ??
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.darkModeEnabled.set(isDarkMode);
    if (isDarkMode) {
      this.toggleDarkMode(true);
    }
  }

  async toggleTheme(toggleState?: ToggleCustomEvent) {
    const settings = await this.getSettings();
    if (settings) {
      settings.darkModeEnabled =
        toggleState?.detail.checked ?? this.darkModeEnabled() ?? false;
      await this.storageService.upsertOne(
        settings,
        DatabaseTableTypes.Settings
      );
      this.toggleDarkMode(settings.darkModeEnabled);
    } else {
      this.toggleDarkMode(
        toggleState?.detail.checked ??
          this.darkModeEnabled() ??
          window.matchMedia('(prefers-color-scheme: dark)').matches
      );
    }
  }

  private async getSettings(): Promise<ISettings | undefined> {
    return await this.storageService.get<ISettings>(
      'settings',
      DatabaseTableTypes.Settings
    );
  }

  private toggleDarkMode(toggleDarkMode: boolean) {
    this.darkModeEnabled.set(toggleDarkMode);
    document.body.classList.toggle('dark', toggleDarkMode);
  }
}

import { Component } from '@angular/core';
import { IonItem, IonLabel, IonNote, IonToggle } from '@ionic/angular/standalone';
import { ToggleCustomEvent } from '@ionic/angular';
import { DarkModeService } from '@hh/shared';

@Component({
  selector: 'hh-parents-dark-mode-toggle',
  standalone: true,
  imports: [IonItem, IonLabel, IonNote, IonToggle],
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.scss'],
})
export class DarkModeToggleComponent {
  constructor(public darkModeService: DarkModeService) {}

  async toggleTheme(toggleState: ToggleCustomEvent) {
    await this.darkModeService.toggleTheme(toggleState);
  }
}

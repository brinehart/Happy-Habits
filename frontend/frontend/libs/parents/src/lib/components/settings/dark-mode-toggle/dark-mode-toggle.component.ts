import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ToggleCustomEvent } from '@ionic/angular';
import { DarkModeService } from '@hh/shared';

@Component({
  selector: 'hh-parents-dark-mode-toggle',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.scss'],
})
export class DarkModeToggleComponent {
  constructor(public darkModeService: DarkModeService) {}

  async toggleTheme(toggleState: ToggleCustomEvent) {
    await this.darkModeService.toggleTheme(toggleState);
  }
}

import { Component } from '@angular/core';

import { DarkModeToggleComponent } from "./dark-mode-toggle/dark-mode-toggle.component";
import { IonicModule } from '@ionic/angular';
import { ManageKidsButtonComponent } from "./manage-kids-button/manage-kids-button.component";

@Component({
    selector: 'hh-parents-settings',
    standalone: true,
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    imports: [
      DarkModeToggleComponent,
      IonicModule,
      ManageKidsButtonComponent
  ]
})
export class SettingsComponent {}

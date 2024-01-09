import { Component } from '@angular/core';
import { IonItemGroup, IonItemDivider, IonLabel } from '@ionic/angular/standalone'
import { DarkModeToggleComponent } from "./dark-mode-toggle/dark-mode-toggle.component";
import { ManageKidsButtonComponent } from "./manage-kids-button/manage-kids-button.component";

@Component({
    selector: 'hh-parents-settings',
    standalone: true,
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    imports: [
      DarkModeToggleComponent,
      IonItemGroup,
      IonItemDivider,
      IonLabel,
      ManageKidsButtonComponent
  ]
})
export class SettingsComponent {}

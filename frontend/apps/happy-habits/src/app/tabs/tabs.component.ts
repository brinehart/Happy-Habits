import { Component } from '@angular/core';
import { HeaderComponent } from '@hh/shared';
import { IonTabs, IonTabBar, IonTabButton, IonIcon } from "@ionic/angular/standalone";
import { addIcons } from "ionicons";

@Component({
  selector: 'hh-tabs',
  standalone: true,
  imports: [HeaderComponent, IonTabs, IonTabBar, IonTabButton, IonIcon],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  constructor() {
    addIcons({ })
  }
}

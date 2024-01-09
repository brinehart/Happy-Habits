import { Component } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '@hh/shared';

@Component({
  selector: 'hh-tabs',
  standalone: true,
  imports: [IonicModule, HeaderComponent],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {}

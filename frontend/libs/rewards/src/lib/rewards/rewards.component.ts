import { Component } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '@hh/shared';

@Component({
  selector: 'hh-rewards-rewards',
  standalone: true,
  imports: [IonicModule, HeaderComponent],
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss'],
})
export class RewardsComponent {}

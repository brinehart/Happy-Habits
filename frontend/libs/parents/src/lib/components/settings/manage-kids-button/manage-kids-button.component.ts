import { Component } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'hh-parents-manage-kids-button',
  standalone: true,
  imports: [IonicModule, RouterModule],
  templateUrl: './manage-kids-button.component.html',
  styleUrls: ['./manage-kids-button.component.scss'],
})
export class ManageKidsButtonComponent {}

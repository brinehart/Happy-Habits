import { Component } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '@hh/shared';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'hh-kids-page',
  standalone: true,
  imports: [IonicModule, HeaderComponent, RouterModule],
  templateUrl: './kids-page.component.html',
  styleUrls: ['./kids-page.component.scss'],
})
export class KidsPageComponent {}

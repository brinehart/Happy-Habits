import { Component } from '@angular/core';

import { IonContent, IonRouterOutlet } from "@ionic/angular/standalone";
import { HeaderComponent } from '@hh/shared';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'hh-kids-page',
  standalone: true,
  imports: [ IonContent, IonRouterOutlet, HeaderComponent, RouterModule],
  templateUrl: './kids-page.component.html',
  styleUrls: ['./kids-page.component.scss'],
})
export class KidsPageComponent {}

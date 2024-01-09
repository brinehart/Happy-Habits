import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '@hh/shared';

@Component({
  selector: 'hh-rewards-rewards',
  standalone: true,
  imports: [ HeaderComponent, IonContent ],
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss'],
})
export class RewardsComponent {}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '@hh/shared';

@Component({
  selector: 'hh-rewards-rewards',
  standalone: true,
  imports: [CommonModule, IonicModule, HeaderComponent],
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss'],
})
export class RewardsComponent {}

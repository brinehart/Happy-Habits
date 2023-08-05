import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DarkModeToggleComponent } from '../components/dark-mode-toggle/dark-mode-toggle.component';

@Component({
  selector: 'hh-parents-home',
  standalone: true,
  imports: [CommonModule, IonicModule, DarkModeToggleComponent],
  templateUrl: './parents-page.component.html',
  styleUrls: ['./parents-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentsPageComponent {}

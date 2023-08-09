import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@hh/shared';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'hh-parents-home',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    HeaderComponent,
  ],
  templateUrl: './parents-page.component.html',
  styleUrls: ['./parents-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentsPageComponent {}

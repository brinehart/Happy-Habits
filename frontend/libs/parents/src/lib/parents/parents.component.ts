import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from "@ionic/angular";

@Component({
  selector: 'hh-home',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentsComponent {}

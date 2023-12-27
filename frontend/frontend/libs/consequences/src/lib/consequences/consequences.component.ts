import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '@hh/shared';

@Component({
  selector: 'hh-consequences-consequences',
  standalone: true,
  imports: [CommonModule, IonicModule, HeaderComponent],
  templateUrl: './consequences.component.html',
  styleUrls: ['./consequences.component.scss'],
})
export class ConsequencesComponent {}

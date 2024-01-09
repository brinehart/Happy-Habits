import { Component } from '@angular/core';
import { HeaderComponent } from '@hh/shared';
import { IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'hh-consequences-consequences',
  standalone: true,
  imports: [HeaderComponent, IonContent],
  templateUrl: './consequences.component.html',
  styleUrls: ['./consequences.component.scss'],
})
export class ConsequencesComponent {}

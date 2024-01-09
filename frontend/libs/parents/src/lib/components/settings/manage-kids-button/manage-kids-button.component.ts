import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonItem, IonLabel, IonNote, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'hh-parents-manage-kids-button',
  standalone: true,
  imports: [ RouterModule, IonItem, IonLabel, IonNote, IonButton],
  templateUrl: './manage-kids-button.component.html',
  styleUrls: ['./manage-kids-button.component.scss'],
})
export class ManageKidsButtonComponent {}

import { Component } from '@angular/core';
import { IonItem, IonRouterLink, IonLabel, IonNote, IonButton } from "@ionic/angular/standalone";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'hh-parents-manage-kids-button',
  standalone: true,
  imports: [ IonItem, IonLabel, IonNote, IonButton, RouterLink],
  templateUrl: './manage-kids-button.component.html',
  styleUrls: ['./manage-kids-button.component.scss'],
})
export class ManageKidsButtonComponent {}

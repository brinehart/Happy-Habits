import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent, KidService } from '@hh/shared';
import { KidCardComponent } from './kid-card/kid-card.component';
import { IonButton, IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'hh-kids-manage',
  standalone: true,
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
  imports: [
    AsyncPipe,
    KidCardComponent,
    HeaderComponent,
    IonButton,
    IonIcon,
    RouterLink
  ],
})
export class ManageKidsComponent {
  constructor(public kidService: KidService) {}
}

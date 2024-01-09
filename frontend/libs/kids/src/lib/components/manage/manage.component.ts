import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent, KidService } from '@hh/shared';
import { KidCardComponent } from './kid-card/kid-card.component';
import { IonButton, IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'hh-kids-manage',
  standalone: true,
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    KidCardComponent,
    HeaderComponent,
    IonButton,
    IonIcon
  ],
})
export class ManageKidsComponent {
  constructor(public kidService: KidService) {}
}

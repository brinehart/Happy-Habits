import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HeaderComponent, KidService } from '@hh/shared';
import { KidCardComponent } from './kid-card/kid-card.component';

@Component({
  selector: 'hh-kids-manage',
  standalone: true,
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    KidCardComponent,
    HeaderComponent,
  ],
})
export class ManageKidsComponent {
  constructor(public kidService: KidService) {}
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { KidService } from '@hh/shared';
import { KidCardComponent } from './kid-card/kid-card.component';

@Component({
  selector: 'hh-kids-manage',
  standalone: true,
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
  imports: [CommonModule, RouterModule, IonicModule, KidCardComponent],
})
export class ManageKidsComponent {
  kids$ = this.store.kids$;
  constructor(private store: KidService) {}
}

import { Component, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Kid } from '@hh/shared';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'hh-kids-card',
  templateUrl: './kid-card.component.html',
  styleUrls: ['./kid-card.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class KidCardComponent {
  @Input() kid: Kid | undefined = {
    id: '12345',
    name: 'John Doe',
    birthday: new Date('2011-07-18'),
    age: 12,
  };

  constructor(private router: Router) {}

  async editKid() {
    await this.router.navigate(['/manage-kids/edit', this.kid?.id]);
  }
}

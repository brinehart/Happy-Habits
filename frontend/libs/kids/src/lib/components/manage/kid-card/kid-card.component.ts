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
  };

  get age(): number {
    if (!this.kid?.birthday) {
      return 0;
    }
    const diff = Date.now() - new Date(this.kid.birthday).getTime();
    const age = Math.floor(diff / 31557600000);
    return age;
  }

  constructor(private router: Router) {}

  async editKid() {
    await this.router.navigate(['/manage-kids/edit', this.kid?.id]);
  }
}

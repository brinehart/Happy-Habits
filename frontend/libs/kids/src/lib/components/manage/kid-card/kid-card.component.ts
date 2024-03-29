import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Kid } from '@hh/shared';
import { IonAvatar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/angular/standalone";

@Component({
  selector: 'hh-kids-card',
  templateUrl: './kid-card.component.html',
  styleUrls: ['./kid-card.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonAvatar],
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
    return Math.floor(diff / 31557600000);
  }

  get kidAvatarUrl(): string {
    if (!this.kid?.avatar?.gender) {
      return 'assets/avatars/boys/boy_1.svg';
    }
    return `assets/avatars/${this.kid.avatar.gender.toLowerCase()}s/${this.kid.avatar.src}`;
  }

  constructor(private router: Router) {}

  async editKid() {
    await this.router.navigate(['/manage-kids/edit', this.kid?.id]);
  }
}

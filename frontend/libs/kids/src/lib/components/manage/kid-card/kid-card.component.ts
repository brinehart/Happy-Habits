import { Component, Input } from '@angular/core';
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
}

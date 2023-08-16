import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { filter, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'hh-header',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(private router: Router) {}

  private routeRoot$ = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map(() => {
      return this.router.url;
    }),
    map((url) => {
      switch (url) {
        case '/kids':
          return 'kids';
        case '/parents':
          return 'parents';
        case '/rewards':
          return 'rewards';
        case '/consequences':
          return 'consequences';
        default:
          return 'manage';
      }
    }),
  );

  headerTitle$: Observable<string> = this.routeRoot$.pipe(
    map((urlRoot) => {
      switch (urlRoot) {
        case 'parents':
          return 'Parents';
        case 'rewards':
          return 'Rewards';
        case 'consequences':
          return 'Consequences';
        default:
          return 'Management';
      }
    }),
  );

  headerIconSrc$: Observable<string> = this.routeRoot$.pipe(
    map((urlRoot) => {
      switch (urlRoot) {
        case 'parents':
          return '/assets/icons/tabs/parents/parents-128.svg';
        case 'rewards':
          return '/assets/icons/tabs/rewards/rewards-128.svg';
        case 'consequences':
          return '/assets/icons/tabs/consequences/consequences-128.svg';
        default:
          return '/assets/icons/tabs/kids/kids-128.svg';
      }
    }),
  );
}

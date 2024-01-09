import { Component, EnvironmentInjector, OnInit } from '@angular/core';
import { TabsComponent } from './tabs/tabs.component';
import { DarkModeService, HeaderComponent } from '@hh/shared';
import { IonRouterOutlet } from '@ionic/angular/standalone';
@Component({
  selector: 'hh-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [TabsComponent, HeaderComponent, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  title = 'Happy Habits';

  constructor(
    public environmentInjector: EnvironmentInjector,
    private darkModeService: DarkModeService
  ) {}

  async ngOnInit() {
    await this.darkModeService.initDarkMode();
  }
}

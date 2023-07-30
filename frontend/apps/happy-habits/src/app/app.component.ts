import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from "./tabs/tabs.component";
import { HeaderComponent } from "@hh/shared";

@Component({
    selector: 'hh-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    standalone: true,
    imports: [
      IonicModule,
      TabsComponent,
      HeaderComponent
    ],
})
export class AppComponent {
  constructor() {}
}

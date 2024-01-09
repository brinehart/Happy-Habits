import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '@hh/shared';
import { IonContent, IonRouterOutlet } from "@ionic/angular/standalone";

@Component({
  selector: 'hh-parents-home',
  standalone: true,
  imports: [
    IonContent,
    IonRouterOutlet,
    HeaderComponent
],
  templateUrl: './parents-page.component.html',
  styleUrls: ['./parents-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentsPageComponent {}

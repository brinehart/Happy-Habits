import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { IonicRouteStrategy, IonicModule } from '@ionic/angular';
import { provideRouter, RouteReuseStrategy } from '@angular/router';
import { appRoutes } from "./app/app.routes";

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, IonicModule.forRoot()),
        provideRouter(appRoutes),
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ]
})
  .catch((err) => console.error(err));

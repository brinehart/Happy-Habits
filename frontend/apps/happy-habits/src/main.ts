import { importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter, RouteReuseStrategy } from '@angular/router';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';
import { appRoutes } from './app/app.routes';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
  ActivityEffects,
  KidEffects,
  OutcomeEffects,
  kidsFeature,
  outcomesFeature,
  activitiesFeature,
  RouterEffects,
} from '@hh/shared';
import { provideIonicAngular } from "@ionic/angular/standalone";

bootstrapApplication(AppComponent, {
  providers: [
    provideIonicAngular(),
    importProvidersFrom(
      StoreModule.forRoot({}),
      StoreModule.forFeature(kidsFeature),
      StoreModule.forFeature(activitiesFeature),
      StoreModule.forFeature(outcomesFeature),
      IonicStorageModule.forRoot({
        name: '__hhDb',
        driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage],
      }),
      EffectsModule.forRoot([
        RouterEffects,
        KidEffects,
        ActivityEffects,
        OutcomeEffects,
      ]),
      isDevMode()
        ? StoreDevtoolsModule.instrument({
            maxAge: 35,
            logOnly: false,
            autoPause: true,
            features: {
              pause: false,
              lock: true,
              persist: true,
            },
          })
        : [],
    ),
    provideRouter(appRoutes),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
}).catch((err) => console.error(err));

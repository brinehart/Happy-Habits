import { importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter, RouteReuseStrategy } from '@angular/router';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { IonicRouteStrategy, IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';
import { appRoutes } from './app/app.routes';
import { StoreModule, provideStore } from '@ngrx/store';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import {
  StoreDevtools,
  StoreDevtoolsModule,
  provideStoreDevtools,
} from '@ngrx/store-devtools';
import {
  ActivityEffects,
  KidEffects,
  OutcomeEffects,
  kidsFeature,
  outcomesFeature,
  activitiesFeature,
  RouterEffects,
} from '@hh/shared';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      StoreModule.forRoot({}),
      StoreModule.forFeature(kidsFeature),
      StoreModule.forFeature(activitiesFeature),
      StoreModule.forFeature(outcomesFeature),
      IonicModule.forRoot(),
      IonicStorageModule.forRoot({
        name: '__drasiDb',
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

import { importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter, RouteReuseStrategy } from '@angular/router';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { IonicRouteStrategy, IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Drivers } from '@ionic/storage';
import { appRoutes } from './app/app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {
  ActivityEffects,
  activityReducer,
  KidEffects,
  kidReducer,
  OutcomeEffects,
  outcomeReducer,
} from '@hh/shared';

bootstrapApplication(AppComponent, {
  providers: [
    provideStoreDevtools({ logOnly: !isDevMode() }),
    provideEffects(),
    provideStore({
      activity: activityReducer,
      outcome: outcomeReducer,
      kid: kidReducer,
    }),
    provideStoreDevtools({
      maxAge: 35,
      logOnly: false,
      autoPause: true,
      features: {
        pause: false,
        lock: true,
        persist: true,
      },
    }),
    provideEffects([ActivityEffects, KidEffects, OutcomeEffects]),
    importProvidersFrom(
      BrowserModule,
      IonicModule.forRoot(),
      IonicStorageModule.forRoot({
        name: '__drasiDb',
        driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage],
      })
    ),
    provideRouter(appRoutes),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
}).catch((err) => console.error(err));

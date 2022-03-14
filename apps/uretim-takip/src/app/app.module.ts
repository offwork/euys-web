import {
  APP_BASE_HREF,
  LocationStrategy,
  PathLocationStrategy,
  registerLocaleData,
} from '@angular/common';
import localeTr from '@angular/common/locales/tr';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CoreModule, HttpProviderModule } from '@euys/core';
import { APP_CLIENT_ID, UT_CLIENT_ID } from '@euys/shared/app-shell';
import { HotToastModule } from '@ngneat/hot-toast';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { metaReducers, reducers } from './+state';
import { AppFacade } from './+state/app.facade';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './interceptors';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    environment.e2e ? NoopAnimationsModule : BrowserAnimationsModule,
    CoreModule.forRoot(environment),
    HotToastModule.forRoot(),
    HttpProviderModule, // HotToastModule'den sonra gelmeli
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', redirectTo: '/UT' },
        {
          path: 'UT',
          loadChildren: async () =>
            await import('@euys/features/uretim-takip').then(
              m => m.FeaturesUretimTakipModule
            ),
        },
      ],
      { useHash: true }
    ),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true,
      },
    }),
    EffectsModule.forRoot(),
    !environment.production
      ? StoreDevtoolsModule.instrument({
          maxAge: 25,
          logOnly: environment.production,
        })
      : [],
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    httpInterceptorProviders,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    { provide: LOCALE_ID, useValue: 'tr-TR' },
    { provide: APP_BASE_HREF, useValue: '/euysut/' },
    { provide: APP_CLIENT_ID, useValue: UT_CLIENT_ID },
    AppFacade,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(localeTr);
  }
}

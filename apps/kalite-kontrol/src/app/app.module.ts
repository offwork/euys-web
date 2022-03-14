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

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CoreModule, HttpProviderModule } from '@euys/core';
import { HotToastModule } from '@ngneat/hot-toast';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { metaReducers, reducers } from './+state';
import { AppFacade } from './+state/app.facade';
import { httpInterceptorProviders } from './interceptors';
import { APP_CLIENT_ID, KK_CLIENT_ID } from '@euys/shared/app-shell';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SharedUiModule } from '@euys/shared/ui';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    environment.e2e ? NoopAnimationsModule : BrowserAnimationsModule,
    CoreModule.forRoot(environment),
    SharedUiModule,
    // ToastrModule.forRoot(),
    HotToastModule.forRoot(),
    HttpProviderModule, // HotToastModule'den sonra gelmeli
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', redirectTo: '/KK' },
        {
          path: 'KK',
          loadChildren: () =>
            import('@euys/features/kalite-kontrol').then(
              m => m.KaliteKontrolModule
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
    { provide: APP_BASE_HREF, useValue: '/euyskk/' },
    { provide: APP_CLIENT_ID, useValue: KK_CLIENT_ID },
    AppFacade,
    MessageService,
    ConfirmationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(localeTr);
  }
}

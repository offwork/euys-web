import { APP_BASE_HREF, registerLocaleData } from '@angular/common';
import localeTr from '@angular/common/locales/tr';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CoreModule, HttpProviderModule } from '@euys/core';
import {
  AppShellModule,
  APP_CLIENT_ID,
  ERD_DEMO_CLIENT_ID,
  FullLayoutComponent,
  KT_CLIENT_ID,
} from '@euys/shared/app-shell';
import { HotToastModule } from '@ngneat/hot-toast';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppFacade } from './+state/app.facade';
import { AppComponent } from './app.component';
import { metaReducers, reducers } from './+state';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    environment.e2e ? NoopAnimationsModule : BrowserAnimationsModule,
    CoreModule.forRoot(environment),
    HotToastModule.forRoot(),
    HttpProviderModule,
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', redirectTo: '/edemo' },
        {
          path: '',
          component: FullLayoutComponent,
          children: [
            {
              path: 'edemo',
              loadChildren: () =>
                import('@euys/erdemir-demo-feature').then(
                  m => m.ErdemirDemoFeatureModule
                ),
            },
          ],
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true,
      },
    }),
    AppShellModule,
    !environment.production
      ? StoreDevtoolsModule.instrument({
          maxAge: 25,
          logOnly: environment.production,
        })
      : [],

    EffectsModule.forRoot(),
    StoreRouterConnectingModule.forRoot({ routerState: RouterState.Minimal }),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'tr-TR' },
    AppFacade,
    { provide: APP_BASE_HREF, useValue: '/edemo/' },
    { provide: APP_CLIENT_ID, useValue: ERD_DEMO_CLIENT_ID },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(localeTr);
  }
}

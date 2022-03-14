import { HttpClientModule } from '@angular/common/http';
import {
  APP_INITIALIZER,
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import {
  translocoConfig,
  TranslocoModule,
  TRANSLOCO_CONFIG,
  TRANSLOCO_LOADER,
} from '@ngneat/transloco';
import { TranslocoLocaleModule } from '@ngneat/transloco-locale';
import { AppEnvironment } from './schemas/application.schemas';
import { AppDataResourcesService } from './services/app-data-resources.service';
import { TranslationHttpLoaderService } from './services/translation-http-loader.service';
import { ENV_CONFIG } from './tokens/config.tokens';

export function startupServiceFactory(
  appDataResources: AppDataResourcesService
) {
  return () => appDataResources.setup();
}

@NgModule({
  imports: [
    HttpClientModule,
    TranslocoModule,
    TranslocoLocaleModule.init({
      defaultLocale: 'tr-TR',
      langToLocaleMapping: {
        tr: 'tr-TR',
        en: 'en-US',
      },
    }),
  ],
  exports: [TranslocoModule, TranslocoLocaleModule],
})
export class CoreModule {
  static forRoot(env: AppEnvironment): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: ENV_CONFIG, useValue: env },
        {
          provide: APP_INITIALIZER,
          useFactory: startupServiceFactory,
          deps: [AppDataResourcesService],
          multi: true,
        },
        {
          provide: TRANSLOCO_CONFIG,
          useValue: translocoConfig({
            availableLangs: ['tr', 'en'],
            defaultLang: 'tr',
            fallbackLang: 'tr',
            reRenderOnLangChange: true,
            prodMode: false,
          }),
        },
        {
          provide: TRANSLOCO_LOADER,
          useClass: TranslationHttpLoaderService,
        },
      ],
    };
  }

  constructor(@Optional() @SkipSelf() private _parentModule: CoreModule) {
    if (this._parentModule) {
      throw new Error(
        'CoreModule has already been loaded. Import CoreModule in the AppModule only.'
      );
    }
  }
}

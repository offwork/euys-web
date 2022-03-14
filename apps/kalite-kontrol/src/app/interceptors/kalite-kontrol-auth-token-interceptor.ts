import { Injectable, Injector } from '@angular/core';
import { BaseAuthTokenInterceptor } from '@euys/core';

@Injectable()
export class KaliteKontrolAuthTokenInterceptor extends BaseAuthTokenInterceptor {
  constructor(private injector: Injector) {
    super();
  }

  getUygulamaKod(): string {
    return 'df21ae0d-80fe-4b40-8913-87aa576fc2a4';
  }

  getInjector(): Injector {
    return this.injector;
  }
}

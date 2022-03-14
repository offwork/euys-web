import { Injectable, Injector } from '@angular/core';
import { BaseAuthTokenInterceptor } from '@euys/core';

@Injectable()
export class UretimTakipAuthTokenInterceptor extends BaseAuthTokenInterceptor {
  constructor(private injector: Injector) {
    super();
  }

  getUygulamaKod(): string {
    return '83d5394b-07f5-4651-831c-113daf0e8cf6';
  }

  getInjector(): Injector {
    return this.injector;
  }
}

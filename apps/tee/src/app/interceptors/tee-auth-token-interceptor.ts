import { Injectable, Injector } from '@angular/core';
import { BaseAuthTokenInterceptor } from '@euys/core';

@Injectable()
export class TeeAuthTokenInterceptor extends BaseAuthTokenInterceptor {
  constructor(private injector: Injector) {
    super();
  }

  getUygulamaKod(): string {
    return '2e123cde-16f2-4eee-bc30-68973b5be1f0';
  }

  getInjector(): Injector {
    return this.injector;
  }
}

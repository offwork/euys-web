import { Injectable, Injector } from '@angular/core';
import { BaseAuthTokenInterceptor } from '@euys/core';

@Injectable()
export class KtSpecsAuthTokenInterceptor extends BaseAuthTokenInterceptor {
  constructor(private injector: Injector) {
    super();
  }

  getUygulamaKod(): string {
    return '4962d53c-3d90-41af-8db3-b21242c33a84';
  }

  getInjector(): Injector {
    return this.injector;
  }
}

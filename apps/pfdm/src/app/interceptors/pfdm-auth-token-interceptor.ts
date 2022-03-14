import { Injectable, Injector } from '@angular/core';
import { BaseAuthTokenInterceptor } from '@euys/core';

@Injectable()
export class PFDMAuthTokenInterceptor extends BaseAuthTokenInterceptor {
  constructor(private injector: Injector) {
    super();
  }

  getUygulamaKod(): string {
    //TODO ESSO'dan al
    return 'dec05942-a1de-455b-82a3-8e8d8e2816c3';
  }

  getInjector(): Injector {
    return this.injector;
  }
}

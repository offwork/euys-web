import { Injectable, Injector } from '@angular/core';
import { BaseAuthTokenInterceptor } from '@euys/core';

@Injectable()
export class UretimPlanlamaAuthTokenInterceptor extends BaseAuthTokenInterceptor {
  constructor(private injector: Injector) {
    super();
  }

  getUygulamaKod(): string {
    return '5e9277f1-4971-4c36-b989-5d1947b9bdc1';
  }

  getInjector(): Injector {
    return this.injector;
  }
}

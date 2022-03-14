import { HttpBackend, HttpHandler, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, Provider } from '@angular/core';
import { AppDataResourcesService } from '../services/app-data-resources.service';
import { coreHttpInterceptorProviders } from './interceptors';
import { InterceptorHandler } from './interceptors/interceptor-handler';
import { HttpProviderService } from './services/http-provider.service';

export function interceptingHandler(backend: HttpBackend, interceptors: HttpInterceptor[] | null = []): HttpHandler {
  if (!interceptors) {
    return backend;
  }
  return interceptors.reduceRight((next, interceptor) => new InterceptorHandler(next, interceptor), backend);
}

export function httpProvideFactory(
  backend: HttpBackend,
  appDataSources: AppDataResourcesService,
  interceptors: HttpInterceptor[]
): HttpProviderService {
  return new HttpProviderService(backend, appDataSources, interceptors);
}

export const HTTP_PROVIDERS: Provider = {
  provide: HttpProviderService,
  useFactory: httpProvideFactory,
  deps: [HttpBackend, AppDataResourcesService, HTTP_INTERCEPTORS],
};

@NgModule({
  providers: [
    coreHttpInterceptorProviders,
    {
      provide: HttpHandler,
      useFactory: interceptingHandler,
      deps: [HttpBackend, [new Optional(), HTTP_INTERCEPTORS]],
    },
    HTTP_PROVIDERS,
  ],
})
export class HttpProviderModule {}

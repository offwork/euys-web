import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { KtSpecsAuthTokenInterceptor } from './kt-specs-auth-token-interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: KtSpecsAuthTokenInterceptor, multi: true },
];

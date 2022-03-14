import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PFDMAuthTokenInterceptor } from './pfdm-auth-token-interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: PFDMAuthTokenInterceptor, multi: true },
];

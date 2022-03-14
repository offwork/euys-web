import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TeeAuthTokenInterceptor } from './tee-auth-token-interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: TeeAuthTokenInterceptor, multi: true },
];

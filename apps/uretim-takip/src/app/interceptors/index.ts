import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UretimTakipAuthTokenInterceptor } from './uretim-takip-auth-token-interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: UretimTakipAuthTokenInterceptor, multi: true },
];

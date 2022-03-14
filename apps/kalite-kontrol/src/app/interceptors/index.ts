import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { KaliteKontrolAuthTokenInterceptor } from './kalite-kontrol-auth-token-interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: KaliteKontrolAuthTokenInterceptor, multi: true },
];

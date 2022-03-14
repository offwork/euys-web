import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UretimPlanlamaAuthTokenInterceptor } from './uretim-planlama-auth-token-interceptor';

export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: UretimPlanlamaAuthTokenInterceptor,
    multi: true,
  },
];

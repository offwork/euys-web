import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BusyApiInterceptor } from './busy-api.interceptor';
import { ResponseHandlerInterceptor } from './response-handler.interceptor';

export const coreHttpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: BusyApiInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ResponseHandlerInterceptor, multi: true },
];

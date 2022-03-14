/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  HttpBackend,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
  HttpResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { concatMap, filter } from 'rxjs/operators';
import { AppDataResourcesService } from '../../services/app-data-resources.service';
import { InterceptorHandler } from '../interceptors/interceptor-handler';

@Injectable()
export class HttpProviderService {
  _apiUrl!: string;
  constructor(
    private backend: HttpBackend,
    private appDataResources: AppDataResourcesService,
    @Inject(HTTP_INTERCEPTORS) private interceptors: HttpInterceptor[]
  ) {}

  request(
    method: string,
    path: string,
    body: any = null,
    init: {
      headers?: HttpHeaders;
      reportProgress?: boolean;
      params?: HttpParams;
      responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
      withCredentials?: boolean;
    } = {}
  ) {
    const apiUrl = this.appDataResources.getDataSourceUrl();
    const request = new HttpRequest(method, `${apiUrl}${path}`, body, init);
    const handler = this.interceptors.reduceRight(
      (next: HttpHandler, interceptor: HttpInterceptor) => new InterceptorHandler(next, interceptor),
      this.backend
    );

    const events$: Observable<HttpEvent<any>> = of(request).pipe(
      concatMap((req: HttpRequest<any>) => handler.handle(req))
    );

    const res$: Observable<HttpResponse<any>> = <Observable<HttpResponse<any>>>(
      events$.pipe(filter((event: HttpEvent<any>) => event instanceof HttpResponse))
    );

    return res$;
  }
}

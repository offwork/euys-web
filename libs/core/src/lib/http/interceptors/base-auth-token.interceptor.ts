/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injector } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, switchMap, take } from 'rxjs/operators';
import { AppAuthService } from '../../services/app-auth.service';

export abstract class BaseAuthTokenInterceptor implements HttpInterceptor {
  private isTesting = false;
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  /**
   * TEE: 2e123cde-16f2-4eee-bc30-68973b5be1f0
   */
  abstract getUygulamaKod(): string;

  abstract getInjector(): Injector;

  getAuthenticationService() {
    return this.getInjector().get(AppAuthService);
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Exclude urls
    const requestUrl = request.url;
    if (
      requestUrl.startsWith('assets/') ||
      requestUrl.startsWith('./assets/') ||
      requestUrl.indexOf('/erdemir-oauth/oauth2/token') > -1
    ) {
      return next.handle(request);
    }

    request = this.setHeaders(request);

    if (this.isTesting) {
      const { loginInfo, uygulamaInfo } = this.getAuthenticationService().getLoginInfo(this.getUygulamaKod());
      uygulamaInfo.token.access_token = 'invalid_access_token';
      sessionStorage.setItem('loginInfo', JSON.stringify(loginInfo));
    }

    return next.handle(request).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          return this.handle401Error(request, next);
        } else {
          return throwError(error);
        }
      })
    );
  }

  private setHeaders(request: HttpRequest<any>) {
    let headers = request.headers;
    headers = headers.set(
      'Authorization',
      `Bearer ${this.getAuthenticationService().getLoginInfo(this.getUygulamaKod()).uygulamaInfo?.token?.access_token}`
    );
    return request.clone({ headers });
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.getAuthenticationService()
        .refreshToken(this.getUygulamaKod())
        .pipe(
          // delay(5000),
          switchMap((data) => {
            this.isRefreshing = false;
            this.refreshTokenSubject.next(data);
            return next.handle(this.setHeaders(request));
          })
        );
    } else {
      return this.refreshTokenSubject.pipe(
        take(1),
        filter((tokenResponse) => tokenResponse != null),
        switchMap(() => {
          return next.handle(this.setHeaders(request));
        })
      );
    }
  }
}

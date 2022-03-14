import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { ErrorMessageComponent, ErrorMessage } from '@euys/shared/ui';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';

@Injectable()
export class ResponseHandlerInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const toast = this.injector.get(HotToastService);
    return next.handle(req).pipe(
      finalize(() => console.log('')),
      tap(response => {
        if (response instanceof HttpResponse) {
          toast.success(
            response.body?.message ||
              response.body?.islemSonucModel?.islemAciklama ||
              response.statusText,
            {
              icon: `✅`,
              position: 'bottom-right',
              style: {
                'word-break': 'break-word',
              },
            }
          );
        }
      }),

      catchError((err: HttpErrorResponse) => {
        /* TODO: Status Kod list belirlenmeli... [400, 401, 403, 404, 500].includes(err.status) */

        if (/^5[0-9][0-9]$/.test(`${err.status}`)) {
          // Internal Server error: 5XX
          toast.warning<ErrorMessage>(ErrorMessageComponent, {
            autoClose: false,
            dismissible: true,
            position: 'top-right',
            style: {
              'word-break': 'break-word',
            },
            data: {
              message: err.error?.message || err.message,
              detail: err.error?.data,
            },
          });
        } else {
          // Others like: 0, 2XX, 3XX, 4XX, etc...
          toast.error<ErrorMessage>(ErrorMessageComponent, {
            autoClose: false,
            dismissible: true,
            position: 'top-right',
            icon: '⛔️',
            style: {
              'word-break': 'break-word',
            },
            data: {
              message: err.error?.message || err.message,
              detail: err.error?.data,
            },
          });
        }
        return throwError(err);
      })
    );
  }
}

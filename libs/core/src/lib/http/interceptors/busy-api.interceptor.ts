import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Observable } from 'rxjs';
import { filter, finalize, tap } from 'rxjs/operators';

@Injectable()
export class BusyApiInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const toast = this.injector.get(HotToastService);
    const message = req.method === 'GET' ? 'Loading...' : 'Saving...';
    const toastRef = toast.loading(message, { autoClose: false });
    return next.handle(req).pipe(
      finalize(() => {
        setTimeout(() => {
          toastRef.close();
        }, 500);
      })
    );
  }
}

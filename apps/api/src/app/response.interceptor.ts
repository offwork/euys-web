import { ResponseModel } from '@euys/api-interfaces';
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, ResponseModel<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>
  ): Observable<ResponseModel<T>> | Promise<Observable<ResponseModel<T>>> {
    return next.handle().pipe(map((data) => ({ data })));
  }
}

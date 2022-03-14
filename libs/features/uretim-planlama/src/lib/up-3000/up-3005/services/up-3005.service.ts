import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Up3005Service {
  constructor(private http: HttpProviderService) {}

  load(): Observable<unknown> {
    return this.http
      .request('GET', '/yup/yup-projeksiyon-islemleri-kriter/statu/get', null, {
        params: new HttpParams({ fromObject: { statu: '02' } }),
      })
      .pipe(map(response => response.body));
  }
}

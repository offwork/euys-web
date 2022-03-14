import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Isgucu, ResponseModel } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class IsgucuGirisService {
  constructor(private http: HttpProviderService) {}

  getIsGucleri(yil: string): Observable<ResponseModel<Isgucu[]>> {
    return this.http
      .request('GET', '/veri-girisi/is-gucleri', null, {
        params: new HttpParams({ fromObject: { yil } }),
      })
      .pipe(map((response) => response.body));
  }

  saveIsGucleri(isgucuData: Isgucu[]) {
    return this.http.request('POST', '/veri-girisi/is-gucleri', isgucuData).pipe(map((response) => response.body));
  }
}

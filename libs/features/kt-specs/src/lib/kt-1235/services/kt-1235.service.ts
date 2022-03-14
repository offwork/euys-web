import { Injectable } from '@angular/core';
import { KtAtIcCapDisCapTolerans, ResponseModel } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Kt1235Service {
  readonly _endpoint = '/ana-tablolar/ic-cap-dis-cap-toleranslari';

  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<KtAtIcCapDisCapTolerans[]>> {
    return this.http.request('GET', this._endpoint).pipe(map((response) => response.body));
  }

  saveOrUpdate(spesifikasyon: KtAtIcCapDisCapTolerans): Observable<ResponseModel<KtAtIcCapDisCapTolerans>> {
    if (spesifikasyon.id) {
      return this.http
        .request('PUT', `${this._endpoint}/${spesifikasyon.id}/${spesifikasyon.etag}`, spesifikasyon)
        .pipe(map((response) => response.body));
    }
    return this.http.request('POST', this._endpoint, spesifikasyon).pipe(map((response) => response.body));
  }
}

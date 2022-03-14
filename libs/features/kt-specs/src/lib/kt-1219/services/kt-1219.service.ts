import { Injectable } from '@angular/core';
import { KtCgl12Tavlama1, ResponseModel } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Kt1219Service {
  readonly _endpoint = '/ana-tablolar/cgl-1-2-tavlamalar-1';

  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<KtCgl12Tavlama1[]>> {
    return this.http.request('GET', this._endpoint).pipe(map((response) => response.body));
  }

  saveOrUpdate(spesifikasyon: KtCgl12Tavlama1): Observable<ResponseModel<KtCgl12Tavlama1>> {
    if (spesifikasyon.id) {
      return this.http
        .request('PUT', `${this._endpoint}/${spesifikasyon.id}/${spesifikasyon.etag}`, spesifikasyon)
        .pipe(map((response) => response.body));
    }
    return this.http.request('POST', this._endpoint, spesifikasyon).pipe(map((response) => response.body));
  }
}

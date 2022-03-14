import { Injectable } from '@angular/core';
import { KtAtAsitlemeTlv, ResponseModel } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Kt1209Service {
  readonly _endpoint = '/ana-tablolar/asitleme-tlvler';

  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<KtAtAsitlemeTlv[]>> {
    return this.http.request('GET', this._endpoint).pipe(map((response) => response.body));
  }

  saveOrUpdate(spesifikasyon: KtAtAsitlemeTlv): Observable<ResponseModel<KtAtAsitlemeTlv>> {
    if (spesifikasyon.id) {
      return this.http
        .request('PUT', `${this._endpoint}/${spesifikasyon.id}/${spesifikasyon.etag}`, spesifikasyon)
        .pipe(map((response) => response.body));
    }
    return this.http.request('POST', this._endpoint, spesifikasyon).pipe(map((response) => response.body));
  }
}

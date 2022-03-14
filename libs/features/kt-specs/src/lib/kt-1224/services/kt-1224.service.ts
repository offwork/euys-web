import { Injectable } from '@angular/core';
import { KtAtDokumCelikKalitesi, ResponseModel } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Kt1224Service {
 
  readonly _endpoint = '/ana-tablolar/dokum-kaliteler';

  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<KtAtDokumCelikKalitesi[]>> {
    return this.http.request('GET', this._endpoint).pipe(map((response) => response.body));
  }

  saveOrUpdate(spesifikasyon: KtAtDokumCelikKalitesi): Observable<ResponseModel<KtAtDokumCelikKalitesi>> {
    if (spesifikasyon.id) {
      return this.http
        .request('PUT', `${this._endpoint}/${spesifikasyon.id}/${spesifikasyon.etag}`, spesifikasyon)
        .pipe(map((response) => response.body));
    }
    return this.http.request('POST', this._endpoint, spesifikasyon).pipe(map((response) => response.body));
  }
}

import { Injectable } from '@angular/core';
import { KtCgl12HavaSogutma, ResponseModel } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Kt1218Service {
  readonly _endpoint = '/ana-tablolar/cgl-1-2-hava-sogutmalari-ajc';
  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<KtCgl12HavaSogutma[]>> {
    return this.http.request('GET', this._endpoint).pipe(map((response) => response.body));
  }

  saveOrUpdate(spesifikasyon: KtCgl12HavaSogutma): Observable<ResponseModel<KtCgl12HavaSogutma>> {
    if (spesifikasyon.id) {
      return this.http
        .request('PUT', `${this._endpoint}/${spesifikasyon.id}/${spesifikasyon.etag}`, spesifikasyon)
        .pipe(map((response) => response.body));
    }
    return this.http.request('POST', this._endpoint, spesifikasyon).pipe(map((response) => response.body));
  }
}

import { Injectable } from '@angular/core';
import { KtAtKromKaplamaTfsFlor, ResponseModel } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Kt1241Service {
  readonly _endpoint = '/ana-tablolar/tfs-flor-krom-kaplamalar';

  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<KtAtKromKaplamaTfsFlor[]>> {
    return this.http.request('GET', this._endpoint).pipe(map((response) => response.body));
  }

  saveOrUpdate(spesifikasyon: KtAtKromKaplamaTfsFlor): Observable<ResponseModel<KtAtKromKaplamaTfsFlor>> {
    if (spesifikasyon.id) {
      return this.http
        .request('PUT', `${this._endpoint}/${spesifikasyon.id}/${spesifikasyon.etag}`, spesifikasyon)
        .pipe(map((response) => response.body));
    }
    return this.http.request('POST', this._endpoint, spesifikasyon).pipe(map((response) => response.body));
  }
}

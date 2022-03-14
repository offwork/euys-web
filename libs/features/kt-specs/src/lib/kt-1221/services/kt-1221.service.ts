import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KtAtCgl12Temizleme, ResponseModel } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Kt1221Service {
  readonly _endpoint = '/ana-tablolar/cgl-1-2-temizlemeler';
  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<KtAtCgl12Temizleme[]>> {
    return this.http.request('GET', this._endpoint).pipe(map((response) => response.body));
  }

  saveOrUpdate(spesifikasyon: KtAtCgl12Temizleme): Observable<ResponseModel<KtAtCgl12Temizleme>> {
    if (spesifikasyon.id) {
      return this.http
        .request('PUT', `${this._endpoint}/${spesifikasyon.id}/${spesifikasyon.etag}`, spesifikasyon)
        .pipe(map((response) => response.body));
    }
    return this.http.request('POST', this._endpoint, spesifikasyon).pipe(map((response) => response.body));
  }
}

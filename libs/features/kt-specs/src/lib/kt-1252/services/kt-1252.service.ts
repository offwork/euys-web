import { Injectable } from '@angular/core';
import { KtAtTcalSogutmaYaslandirma, ResponseModel } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Kt1252Service {
  readonly _endpoint = '/ana-tablolar/tincal-hatti-sogutma-ve-yaslandirmalar';

  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<KtAtTcalSogutmaYaslandirma[]>> {
    return this.http.request('GET', this._endpoint).pipe(map((response) => response.body));
  }

  saveOrUpdate(spesifikasyon: KtAtTcalSogutmaYaslandirma): Observable<ResponseModel<KtAtTcalSogutmaYaslandirma>> {
    if (spesifikasyon.id) {
      return this.http
        .request('PUT', `${this._endpoint}/${spesifikasyon.id}/${spesifikasyon.etag}`, spesifikasyon)
        .pipe(map((response) => response.body));
    }
    return this.http.request('POST', this._endpoint, spesifikasyon).pipe(map((response) => response.body));
  }
}

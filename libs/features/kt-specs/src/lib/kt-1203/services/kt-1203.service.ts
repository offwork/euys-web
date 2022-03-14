import { Injectable } from '@angular/core';
import { KtAt2SckHadIkmalSicakl, ResponseModel } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Kt1203Service {
  readonly _endpoint = '/ana-tablolar/hsm2-ikmal-sicakliklar';

  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<KtAt2SckHadIkmalSicakl[]>> {
    return this.http.request('GET', this._endpoint).pipe(map((response) => response.body));
  }

  saveOrUpdate(spesifikasyon: KtAt2SckHadIkmalSicakl): Observable<ResponseModel<KtAt2SckHadIkmalSicakl>> {
    if (spesifikasyon.id) {
      return this.http
        .request('PUT', `${this._endpoint}/${spesifikasyon.id}/${spesifikasyon.etag}`, spesifikasyon)
        .pipe(map((response) => response.body));
    }
    return this.http.request('POST', this._endpoint, spesifikasyon).pipe(map((response) => response.body));
  }
}

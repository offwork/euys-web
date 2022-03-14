import { Injectable } from '@angular/core';
import { KtAt1SckHadIkmalSicakl, ResponseModel } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Kt1201Service {
  readonly _endpoint = '/ana-tablolar/hsm1-ikmal-sicakliklar';

  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<KtAt1SckHadIkmalSicakl[]>> {
    return this.http.request('GET', this._endpoint).pipe(map((response) => response.body));
  }

  saveOrUpdate(spesifikasyon: KtAt1SckHadIkmalSicakl): Observable<ResponseModel<KtAt1SckHadIkmalSicakl>> {
    if (spesifikasyon.id) {
      return this.http
        .request('PUT', `${this._endpoint}/${spesifikasyon.id}/${spesifikasyon.etag}`, spesifikasyon)
        .pipe(map((response) => response.body));
    }
    return this.http.request('POST', this._endpoint, spesifikasyon).pipe(map((response) => response.body));
  }
}

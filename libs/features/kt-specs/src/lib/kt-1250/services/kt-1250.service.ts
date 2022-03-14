import { Injectable } from '@angular/core';
import { KtAtTemperHaddeYuzdeUzama, ResponseModel } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class Kt1250Service {
  readonly _endpoint = '/ana-tablolar/temper-yuzde-uzamalar';

  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<KtAtTemperHaddeYuzdeUzama[]>> {
    return this.http.request('GET', this._endpoint).pipe(map((response) => response.body));
  }

  saveOrUpdate(spesifikasyon: KtAtTemperHaddeYuzdeUzama): Observable<ResponseModel<KtAtTemperHaddeYuzdeUzama>> {
    if (spesifikasyon.id) {
      return this.http
        .request('PUT', `${this._endpoint}/${spesifikasyon.id}/${spesifikasyon.etag}`, spesifikasyon)
        .pipe(map((response) => response.body));
    }
    return this.http.request('POST', this._endpoint, spesifikasyon).pipe(map((response) => response.body));
  }
}

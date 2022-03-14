import { Injectable } from '@angular/core';
import {
  KtSpAmbalajPaket,
  KtSpAmbalajPaketViewModel,
  ResponseModel,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Kt1307Service {
  readonly _endpoint = '/spesifikasyonlar/ambalaj-paketler';

  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<KtSpAmbalajPaketViewModel>> {
    return this.http
      .request('GET', this._endpoint)
      .pipe(map(response => response.body));
  }

  saveOrUpdate(
    spesifikasyon: KtSpAmbalajPaket
  ): Observable<ResponseModel<KtSpAmbalajPaket>> {
    if (spesifikasyon.id) {
      return this.http
        .request(
          'PUT',
          `${this._endpoint}/${spesifikasyon.id}/${spesifikasyon.etag}`,
          spesifikasyon
        )
        .pipe(map(response => response.body));
    }
    return this.http
      .request('POST', this._endpoint, spesifikasyon)
      .pipe(map(response => response.body));
  }
}

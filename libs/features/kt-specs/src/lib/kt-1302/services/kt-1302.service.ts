import { Injectable } from '@angular/core';
import {
  Celik,
  KtSp1SckHadSarilmaSicakl,
  KtSp1SckHadSarilmaSicaklViewModel,
  ResponseModel,
  Urun,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Kt1302Service {
  readonly _endpoint = '/spesifikasyonlar/hsm1-sarilma-sicakliklar';
  readonly _endpoint_celikler = '/siparis-ogeleri/celikler';
  readonly _endpoint_urunler = '/siparis-ogeleri/urunler';

  readonly urun_celik_param = 'ERDEMIR_ONAY=1&YASSI_UZUN_ISARETI=Y';

  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<KtSp1SckHadSarilmaSicaklViewModel>> {
    return this.http
      .request('GET', this._endpoint)
      .pipe(map(response => response.body));
  }

  getUrunler(): Observable<Urun[]> {
    return this.http
      .request('GET', `${this._endpoint_urunler}?${this.urun_celik_param}`)
      .pipe(map(response => response.body));
  }

  getCelikler(): Observable<Celik[]> {
    return this.http
      .request('GET', `${this._endpoint_celikler}?${this.urun_celik_param}`)
      .pipe(map(response => response.body));
  }

  saveOrUpdate(
    spesifikasyon: KtSp1SckHadSarilmaSicakl
  ): Observable<ResponseModel<KtSp1SckHadSarilmaSicakl>> {
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

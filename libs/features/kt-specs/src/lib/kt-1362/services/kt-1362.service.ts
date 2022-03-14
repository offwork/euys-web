import { Injectable } from '@angular/core';
import {
  Celik,
  KtSpAsitlemeTank,
  KtSpAsitlemeTankViewModel,
  ResponseModel,
  Urun,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Kt1362ResourceURL } from '../enums/kt-1362-resource-url';

@Injectable()
export class Kt1362Service {
  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<KtSpAsitlemeTankViewModel>> {
    return this.http
      .request('GET', Kt1362ResourceURL.SPEC_ASITLEME_TANKLAR)
      .pipe(map(response => response.body));
  }

  getUrunler(erdemirOnay = 1, yassiUzunIsareti = 'Y'): Observable<Urun[]> {
    return this.http
      .request(
        'GET',
        `${Kt1362ResourceURL.KT_URUNLER}?${
          'ERDEMIR_ONAY=' +
          erdemirOnay +
          '&YASSI_UZUN_ISARETI=' +
          yassiUzunIsareti
        }`
      )
      .pipe(map(response => response.body));
  }

  getCelikler(erdemirOnay = 1, yassiUzunIsareti = 'Y'): Observable<Celik[]> {
    return this.http
      .request(
        'GET',
        `${Kt1362ResourceURL.KT_CELIKLER}?${
          'ERDEMIR_ONAY=' +
          erdemirOnay +
          '&YASSI_UZUN_ISARETI=' +
          yassiUzunIsareti
        }`
      )
      .pipe(map(response => response.body));
  }

  saveOrUpdate(
    spesifikasyon: KtSpAsitlemeTank
  ): Observable<ResponseModel<KtSpAsitlemeTank>> {
    if (spesifikasyon.id) {
      return this.http
        .request(
          'PUT',
          `${Kt1362ResourceURL.SAVE_UPDATE}/${spesifikasyon.id}/${spesifikasyon.etag}`,
          spesifikasyon
        )
        .pipe(map(response => response.body));
    }
    return this.http
      .request('POST', Kt1362ResourceURL.SAVE_UPDATE, spesifikasyon)
      .pipe(map(response => response.body));
  }
}

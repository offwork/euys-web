import { Injectable } from '@angular/core';
import {
  Celik,
  KtSpAsitlemeTlv,
  KtSpAsitlemeTlvViewModel,
  ResponseModel,
  Urun,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Kt1363ResourceURL } from '../enums/kt-1363-resource-url';

@Injectable()
export class Kt1363Service {
  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<KtSpAsitlemeTlvViewModel>> {
    return this.http
      .request('GET', Kt1363ResourceURL.SPEC_ASITLEME_TLVLER)
      .pipe(map(response => response.body));
  }

  getUrunler(erdemirOnay = 1, yassiUzunIsareti = 'Y'): Observable<Urun[]> {
    return this.http
      .request(
        'GET',
        `${Kt1363ResourceURL.KT_URUNLER}?${
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
        `${Kt1363ResourceURL.KT_CELIKLER}?${
          'ERDEMIR_ONAY=' +
          erdemirOnay +
          '&YASSI_UZUN_ISARETI=' +
          yassiUzunIsareti
        }`
      )
      .pipe(map(response => response.body));
  }

  saveOrUpdate(
    spesifikasyon: KtSpAsitlemeTlv
  ): Observable<ResponseModel<KtSpAsitlemeTlv>> {
    if (spesifikasyon.id) {
      return this.http
        .request(
          'PUT',
          `${Kt1363ResourceURL.SAVE_UPDATE}/${spesifikasyon.id}/${spesifikasyon.etag}`,
          spesifikasyon
        )
        .pipe(map(response => response.body));
    }
    return this.http
      .request('POST', Kt1363ResourceURL.SAVE_UPDATE, spesifikasyon)
      .pipe(map(response => response.body));
  }
}

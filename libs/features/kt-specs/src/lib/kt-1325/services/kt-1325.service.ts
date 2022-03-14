import { Injectable } from '@angular/core';
import {
  Celik,
  KtSpDualFazliKaliteSckHaddeSpec,
  KtSpDualFazliKaliteSckHaddeViewModel,
  ResponseModel,
  Urun,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const enum Kt1325ResourceURL {
  MAIN = '/spesifikasyonlar/dual-bazli-sicak-kaliteler',
  CELIKLER = '/siparis-ogeleri/celikler',
  URUNLER = '/siparis-ogeleri/urunler',
}
@Injectable()
export class Kt1325Service {
  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<KtSpDualFazliKaliteSckHaddeViewModel>> {
    return this.http
      .request('GET', Kt1325ResourceURL.MAIN)
      .pipe(map(response => response.body));
  }

  getUrunler(erdemirOnay = 1, yassiUzunIsareti = 'Y'): Observable<Urun[]> {
    return this.http
      .request(
        'GET',
        `${Kt1325ResourceURL.URUNLER}?${
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
        `${Kt1325ResourceURL.CELIKLER}?${
          'ERDEMIR_ONAY=' +
          erdemirOnay +
          '&YASSI_UZUN_ISARETI=' +
          yassiUzunIsareti
        }`
      )
      .pipe(map(response => response.body));
  }

  saveOrUpdate(
    spesifikasyon: KtSpDualFazliKaliteSckHaddeSpec
  ): Observable<ResponseModel<KtSpDualFazliKaliteSckHaddeSpec>> {
    if (spesifikasyon.id) {
      return this.http
        .request(
          'PUT',
          `${Kt1325ResourceURL.MAIN}/${spesifikasyon.id}/${spesifikasyon.etag}`,
          spesifikasyon
        )
        .pipe(map(response => response.body));
    }
    return this.http
      .request('POST', Kt1325ResourceURL.MAIN, spesifikasyon)
      .pipe(map(response => response.body));
  }
}

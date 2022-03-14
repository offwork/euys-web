import { Injectable } from '@angular/core';
import {
  Celik,
  KtSpKromKaplamaTfsFlor,
  KtSpKromKaplamaTfsFlorViewModel,
  ResponseModel,
  Urun,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const enum Kt1341ResourceURL {
  MAIN = '/spesifikasyonlar/tfs-flor-krom-kaplamalar',
  CELIKLER = '/siparis-ogeleri/celikler',
  URUNLER = '/siparis-ogeleri/urunler',
}
@Injectable()
export class Kt1341Service {
  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<KtSpKromKaplamaTfsFlorViewModel>> {
    return this.http
      .request('GET', Kt1341ResourceURL.MAIN)
      .pipe(map(response => response.body));
  }

  getUrunler(erdemirOnay = 1, yassiUzunIsareti = 'Y'): Observable<Urun[]> {
    return this.http
      .request(
        'GET',
        `${Kt1341ResourceURL.URUNLER}?${
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
        `${Kt1341ResourceURL.CELIKLER}?${
          'ERDEMIR_ONAY=' +
          erdemirOnay +
          '&YASSI_UZUN_ISARETI=' +
          yassiUzunIsareti
        }`
      )
      .pipe(map(response => response.body));
  }

  saveOrUpdate(
    spesifikasyon: KtSpKromKaplamaTfsFlor
  ): Observable<ResponseModel<KtSpKromKaplamaTfsFlor>> {
    if (spesifikasyon.id) {
      return this.http
        .request(
          'PUT',
          `${Kt1341ResourceURL.MAIN}/${spesifikasyon.id}/${spesifikasyon.etag}`,
          spesifikasyon
        )
        .pipe(map(response => response.body));
    }
    return this.http
      .request('POST', Kt1341ResourceURL.MAIN, spesifikasyon)
      .pipe(map(response => response.body));
  }
}

import { Injectable } from '@angular/core';
import {
  Celik,
  KtSpCgl12Tavlama1,
  KtSpCgl12Tavlama1ViewModel,
  ResponseModel,
  Urun,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const enum Kt1319ResourceURL {
  MAIN = '/spesifikasyonlar/cgl-1-2-tavlamalar-1',
  CELIKLER = '/siparis-ogeleri/celikler',
  URUNLER = '/siparis-ogeleri/urunler',
}
@Injectable()
export class Kt1319Service {
  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<KtSpCgl12Tavlama1ViewModel>> {
    return this.http
      .request('GET', Kt1319ResourceURL.MAIN)
      .pipe(map(response => response.body));
  }

  getUrunler(erdemirOnay = 1, yassiUzunIsareti = 'Y'): Observable<Urun[]> {
    return this.http
      .request(
        'GET',
        `${Kt1319ResourceURL.URUNLER}?${
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
        `${Kt1319ResourceURL.CELIKLER}?${
          'ERDEMIR_ONAY=' +
          erdemirOnay +
          '&YASSI_UZUN_ISARETI=' +
          yassiUzunIsareti
        }`
      )
      .pipe(map(response => response.body));
  }

  saveOrUpdate(
    spesifikasyon: KtSpCgl12Tavlama1
  ): Observable<ResponseModel<KtSpCgl12Tavlama1>> {
    if (spesifikasyon.id) {
      return this.http
        .request(
          'PUT',
          `${Kt1319ResourceURL.MAIN}/${spesifikasyon.id}/${spesifikasyon.etag}`,
          spesifikasyon
        )
        .pipe(map(response => response.body));
    }
    return this.http
      .request('POST', Kt1319ResourceURL.MAIN, spesifikasyon)
      .pipe(map(response => response.body));
  }
}

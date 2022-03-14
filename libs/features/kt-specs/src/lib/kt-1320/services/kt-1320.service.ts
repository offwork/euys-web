import { Injectable } from '@angular/core';
import {
  Celik,
  KtSpCgl12Tavlama2,
  KtSpCgl12Tavlama2ViewModel,
  ResponseModel,
  Urun,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const enum Kt1320ResourceURL {
  MAIN = '/spesifikasyonlar/cgl-1-2-tavlamalar-2',
  CELIKLER = '/siparis-ogeleri/celikler',
  URUNLER = '/siparis-ogeleri/urunler',
}
@Injectable()
export class Kt1320Service {
  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<KtSpCgl12Tavlama2ViewModel>> {
    return this.http
      .request('GET', Kt1320ResourceURL.MAIN)
      .pipe(map(response => response.body));
  }

  getUrunler(erdemirOnay = 1, yassiUzunIsareti = 'Y'): Observable<Urun[]> {
    return this.http
      .request(
        'GET',
        `${Kt1320ResourceURL.URUNLER}?${
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
        `${Kt1320ResourceURL.CELIKLER}?${
          'ERDEMIR_ONAY=' +
          erdemirOnay +
          '&YASSI_UZUN_ISARETI=' +
          yassiUzunIsareti
        }`
      )
      .pipe(map(response => response.body));
  }

  saveOrUpdate(
    spesifikasyon: KtSpCgl12Tavlama2
  ): Observable<ResponseModel<KtSpCgl12Tavlama2>> {
    if (spesifikasyon.id) {
      return this.http
        .request(
          'PUT',
          `${Kt1320ResourceURL.MAIN}/${spesifikasyon.id}/${spesifikasyon.etag}`,
          spesifikasyon
        )
        .pipe(map(response => response.body));
    }
    return this.http
      .request('POST', Kt1320ResourceURL.MAIN, spesifikasyon)
      .pipe(map(response => response.body));
  }
}

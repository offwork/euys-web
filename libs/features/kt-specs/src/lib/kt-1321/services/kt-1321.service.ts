import { Injectable } from '@angular/core';
import {
  Celik,
  KtSpCgl12Temizleme,
  KtSpCgl12TemizlemeViewModel,
  ResponseModel,
  Urun,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const enum Kt1321ResourceURL {
  MAIN = '/spesifikasyonlar/cgl-1-2-temizlemeler',
  CELIKLER = '/siparis-ogeleri/celikler',
  URUNLER = '/siparis-ogeleri/urunler',
}
@Injectable()
export class Kt1321Service {
  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<KtSpCgl12TemizlemeViewModel>> {
    return this.http
      .request('GET', Kt1321ResourceURL.MAIN)
      .pipe(map(response => response.body));
  }

  getUrunler(erdemirOnay = 1, yassiUzunIsareti = 'Y'): Observable<Urun[]> {
    return this.http
      .request(
        'GET',
        `${Kt1321ResourceURL.URUNLER}?${
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
        `${Kt1321ResourceURL.CELIKLER}?${
          'ERDEMIR_ONAY=' +
          erdemirOnay +
          '&YASSI_UZUN_ISARETI=' +
          yassiUzunIsareti
        }`
      )
      .pipe(map(response => response.body));
  }

  saveOrUpdate(
    spesifikasyon: KtSpCgl12Temizleme
  ): Observable<ResponseModel<KtSpCgl12Temizleme>> {
    if (spesifikasyon.id) {
      return this.http
        .request(
          'PUT',
          `${Kt1321ResourceURL.MAIN}/${spesifikasyon.id}/${spesifikasyon.etag}`,
          spesifikasyon
        )
        .pipe(map(response => response.body));
    }
    return this.http
      .request('POST', Kt1321ResourceURL.MAIN, spesifikasyon)
      .pipe(map(response => response.body));
  }
}

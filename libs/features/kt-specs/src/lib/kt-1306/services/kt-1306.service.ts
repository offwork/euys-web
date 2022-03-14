import { Injectable } from '@angular/core';
import {
  Celik,
  KtSpAlkaliTemizleme,
  KtSpAlkaliTemizlemeViewModel,
  ResponseModel,
  Urun,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const enum Kt1306ResourceURL {
  MAIN = '/spesifikasyonlar/alkali-temizlemeler',
  CELIKLER = '/siparis-ogeleri/celikler',
  URUNLER = '/siparis-ogeleri/urunler',
}
@Injectable()
export class Kt1306Service {
  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<KtSpAlkaliTemizlemeViewModel>> {
    return this.http
      .request('GET', Kt1306ResourceURL.MAIN)
      .pipe(map(response => response.body));
  }

  getUrunler(erdemirOnay = 1, yassiUzunIsareti = 'Y'): Observable<Urun[]> {
    return this.http
      .request(
        'GET',
        `${Kt1306ResourceURL.URUNLER}?${
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
        `${Kt1306ResourceURL.CELIKLER}?${
          'ERDEMIR_ONAY=' +
          erdemirOnay +
          '&YASSI_UZUN_ISARETI=' +
          yassiUzunIsareti
        }`
      )
      .pipe(map(response => response.body));
  }

  saveOrUpdate(
    spesifikasyon: KtSpAlkaliTemizleme
  ): Observable<ResponseModel<KtSpAlkaliTemizleme>> {
    if (spesifikasyon.id) {
      return this.http
        .request(
          'PUT',
          `${Kt1306ResourceURL.MAIN}/${spesifikasyon.id}/${spesifikasyon.etag}`,
          spesifikasyon
        )
        .pipe(map(response => response.body));
    }
    return this.http
      .request('POST', Kt1306ResourceURL.MAIN, spesifikasyon)
      .pipe(map(response => response.body));
  }
}

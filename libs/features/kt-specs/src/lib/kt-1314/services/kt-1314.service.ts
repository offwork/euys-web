import { Injectable } from '@angular/core';
import {
  Celik,
  KtSpBobinDilUcu,
  KtSpBobinDilUcuViewModel,
  ResponseModel,
  Urun,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const enum Kt1314ResourceURL {
  MAIN = '/spesifikasyonlar/bobin-dil-uclari',
  CELIKLER = '/siparis-ogeleri/celikler',
  URUNLER = '/siparis-ogeleri/urunler',
}
@Injectable()
export class Kt1314Service {
  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<KtSpBobinDilUcuViewModel>> {
    return this.http
      .request('GET', Kt1314ResourceURL.MAIN)
      .pipe(map(response => response.body));
  }

  getUrunler(erdemirOnay = 1, yassiUzunIsareti = 'Y'): Observable<Urun[]> {
    return this.http
      .request(
        'GET',
        `${Kt1314ResourceURL.URUNLER}?${
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
        `${Kt1314ResourceURL.CELIKLER}?${
          'ERDEMIR_ONAY=' +
          erdemirOnay +
          '&YASSI_UZUN_ISARETI=' +
          yassiUzunIsareti
        }`
      )
      .pipe(map(response => response.body));
  }

  saveOrUpdate(
    spesifikasyon: KtSpBobinDilUcu
  ): Observable<ResponseModel<KtSpBobinDilUcu>> {
    if (spesifikasyon.id) {
      return this.http
        .request(
          'PUT',
          `${Kt1314ResourceURL.MAIN}/${spesifikasyon.id}/${spesifikasyon.etag}`,
          spesifikasyon
        )
        .pipe(map(response => response.body));
    }
    return this.http
      .request('POST', Kt1314ResourceURL.MAIN, spesifikasyon)
      .pipe(map(response => response.body));
  }
}

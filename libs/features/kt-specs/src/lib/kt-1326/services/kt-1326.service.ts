import { Injectable } from '@angular/core';
import {
  Celik,
  KtSpEnineKalinlikVeIkiKenarFarklariSpec,
  KtSpEnineKalinlikVeIkiKenarFarklariViewModel,
  ResponseModel,
  Urun,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const enum Kt1326ResourceURL {
  MAIN = '/spesifikasyonlar/enine-kal-ve-kenar-farklari',
  CELIKLER = '/siparis-ogeleri/celikler',
  URUNLER = '/siparis-ogeleri/urunler',
}
@Injectable()
export class Kt1326Service {
  constructor(private http: HttpProviderService) {}

  getData(): Observable<
    ResponseModel<KtSpEnineKalinlikVeIkiKenarFarklariViewModel>
  > {
    return this.http
      .request('GET', Kt1326ResourceURL.MAIN)
      .pipe(map(response => response.body));
  }

  getUrunler(erdemirOnay = 1, yassiUzunIsareti = 'Y'): Observable<Urun[]> {
    return this.http
      .request(
        'GET',
        `${Kt1326ResourceURL.URUNLER}?${
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
        `${Kt1326ResourceURL.CELIKLER}?${
          'ERDEMIR_ONAY=' +
          erdemirOnay +
          '&YASSI_UZUN_ISARETI=' +
          yassiUzunIsareti
        }`
      )
      .pipe(map(response => response.body));
  }

  saveOrUpdate(
    spesifikasyon: KtSpEnineKalinlikVeIkiKenarFarklariSpec
  ): Observable<ResponseModel<KtSpEnineKalinlikVeIkiKenarFarklariSpec>> {
    if (spesifikasyon.id) {
      return this.http
        .request(
          'PUT',
          `${Kt1326ResourceURL.MAIN}/${spesifikasyon.id}/${spesifikasyon.etag}`,
          spesifikasyon
        )
        .pipe(map(response => response.body));
    }
    return this.http
      .request('POST', Kt1326ResourceURL.MAIN, spesifikasyon)
      .pipe(map(response => response.body));
  }
}

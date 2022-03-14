import { Injectable } from '@angular/core';
import {
  Celik,
  KtSpYansitmaTesti,
  KtSpYansitmaTestiViewModel,
  ResponseModel,
  Urun,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Kt1360ResourceURL } from '../enums/kt-1360-resource-url';

@Injectable()
export class Kt1360Service {
  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<KtSpYansitmaTestiViewModel>> {
    return this.http
      .request('GET', Kt1360ResourceURL.SPEC_YANSITMA_TESTLER)
      .pipe(map(response => response.body));
  }

  getUrunler(erdemirOnay = 1, yassiUzunIsareti = 'Y'): Observable<Urun[]> {
    return this.http
      .request(
        'GET',
        `${Kt1360ResourceURL.KT_URUNLER}?${
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
        `${Kt1360ResourceURL.KT_CELIKLER}?${
          'ERDEMIR_ONAY=' +
          erdemirOnay +
          '&YASSI_UZUN_ISARETI=' +
          yassiUzunIsareti
        }`
      )
      .pipe(map(response => response.body));
  }

  saveOrUpdate(
    spesifikasyon: KtSpYansitmaTesti
  ): Observable<ResponseModel<KtSpYansitmaTesti>> {
    if (spesifikasyon.id) {
      return this.http
        .request(
          'PUT',
          `${Kt1360ResourceURL.SAVE_UPDATE}/${spesifikasyon.id}/${spesifikasyon.etag}`,
          spesifikasyon
        )
        .pipe(map(response => response.body));
    }
    return this.http
      .request('POST', Kt1360ResourceURL.SAVE_UPDATE, spesifikasyon)
      .pipe(map(response => response.body));
  }
}

import { Injectable } from '@angular/core';
import {
  Celik,
  KtSpDurulama,
  KtSpDurulamaViewModel,
  ResponseModel,
  Urun,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Kt1364ResourceURL } from '../enums/kt-1364-resource-url';

@Injectable()
export class Kt1364Service {
  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<KtSpDurulamaViewModel>> {
    return this.http
      .request('GET', Kt1364ResourceURL.SPEC_DURULAMALAR)
      .pipe(map(response => response.body));
  }

  getUrunler(erdemirOnay = 1, yassiUzunIsareti = 'Y'): Observable<Urun[]> {
    return this.http
      .request(
        'GET',
        `${Kt1364ResourceURL.KT_URUNLER}?${
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
        `${Kt1364ResourceURL.KT_CELIKLER}?${
          'ERDEMIR_ONAY=' +
          erdemirOnay +
          '&YASSI_UZUN_ISARETI=' +
          yassiUzunIsareti
        }`
      )
      .pipe(map(response => response.body));
  }

  saveOrUpdate(
    spesifikasyon: KtSpDurulama
  ): Observable<ResponseModel<KtSpDurulama>> {
    if (spesifikasyon.id) {
      return this.http
        .request(
          'PUT',
          `${Kt1364ResourceURL.SAVE_UPDATE}/${spesifikasyon.id}/${spesifikasyon.etag}`,
          spesifikasyon
        )
        .pipe(map(response => response.body));
    }
    return this.http
      .request('POST', Kt1364ResourceURL.SAVE_UPDATE, spesifikasyon)
      .pipe(map(response => response.body));
  }
}

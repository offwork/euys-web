import { Injectable } from '@angular/core';
import {
  Celik,
  KtSpBafHattiTavlama,
  KtSpBafHattiTavlamaViewModel,
  ResponseModel,
  Urun,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const enum Kt1312ResourceURL {
  MAIN = '/spesifikasyonlar/tavlamalar',
  CELIKLER = '/siparis-ogeleri/celikler',
  URUNLER  = '/siparis-ogeleri/urunler'
}
@Injectable()
export class Kt1312Service {

  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<KtSpBafHattiTavlamaViewModel>> {
    return this.http
      .request('GET', Kt1312ResourceURL.MAIN)
      .pipe(map(response => response.body));
  }

  getUrunler(erdemirOnay= 1, yassiUzunIsareti= 'Y'): Observable<Urun[]> {
    return this.http
      .request('GET', `${Kt1312ResourceURL.URUNLER}?${'ERDEMIR_ONAY='+erdemirOnay+'&YASSI_UZUN_ISARETI='+yassiUzunIsareti}`)
      .pipe(map(response => response.body));
  }

  getCelikler(erdemirOnay= 1, yassiUzunIsareti= 'Y'): Observable<Celik[]> {
    return this.http
      .request('GET', `${Kt1312ResourceURL.CELIKLER}?${'ERDEMIR_ONAY='+erdemirOnay+'&YASSI_UZUN_ISARETI='+yassiUzunIsareti}`)
      .pipe(map(response => response.body));
  }

  saveOrUpdate(
    spesifikasyon: KtSpBafHattiTavlama
  ): Observable<ResponseModel<KtSpBafHattiTavlama>> {
    if (spesifikasyon.id) {
      return this.http
        .request(
          'PUT',
          `${Kt1312ResourceURL.MAIN}/${spesifikasyon.id}/${spesifikasyon.etag}`,
          spesifikasyon
        )
        .pipe(map(response => response.body));
    }
    return this.http
      .request('POST', Kt1312ResourceURL.MAIN, spesifikasyon)
      .pipe(map(response => response.body));
  }
}

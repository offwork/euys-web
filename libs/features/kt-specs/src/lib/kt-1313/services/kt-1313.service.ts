import { Injectable } from '@angular/core';
import {
  Celik,
  KtSpBobinBalikKuyrugu,
  KtSpBobinBalikKuyruguViewModel,
  ResponseModel,
  Urun,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const enum Kt1313ResourceURL {
  MAIN = '/spesifikasyonlar/bobin-balik-kuyruklar',
  CELIKLER = '/siparis-ogeleri/celikler',
  URUNLER  = '/siparis-ogeleri/urunler'
}
@Injectable()
export class Kt1313Service {
 
  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<KtSpBobinBalikKuyruguViewModel>> {
    return this.http
      .request('GET', Kt1313ResourceURL.MAIN)
      .pipe(map(response => response.body));
  }

  getUrunler(erdemirOnay= 1, yassiUzunIsareti= 'Y'): Observable<Urun[]> {
    return this.http
      .request('GET', `${Kt1313ResourceURL.URUNLER}?${'ERDEMIR_ONAY='+erdemirOnay+'&YASSI_UZUN_ISARETI='+yassiUzunIsareti}`)
      .pipe(map(response => response.body));
  }

  getCelikler(erdemirOnay= 1, yassiUzunIsareti= 'Y'): Observable<Celik[]> {
    return this.http
      .request('GET', `${Kt1313ResourceURL.CELIKLER}?${'ERDEMIR_ONAY='+erdemirOnay+'&YASSI_UZUN_ISARETI='+yassiUzunIsareti}`)
      .pipe(map(response => response.body));
  }

  saveOrUpdate(
    spesifikasyon: KtSpBobinBalikKuyrugu
  ): Observable<ResponseModel<KtSpBobinBalikKuyrugu>> {
    if (spesifikasyon.id) {
      return this.http
        .request(
          'PUT',
          `${Kt1313ResourceURL.MAIN}/${spesifikasyon.id}/${spesifikasyon.etag}`,
          spesifikasyon
        )
        .pipe(map(response => response.body));
    }
    return this.http
      .request('POST', Kt1313ResourceURL.MAIN, spesifikasyon)
      .pipe(map(response => response.body));
  }
}

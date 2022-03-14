import { Injectable } from '@angular/core';
import {
  Celik,
  KtSpIiTenekeAsitleme,
  KtSpIiTenekeAsitlemeViewModel,
  ResponseModel,
  Urun,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const enum Kt1330ResourceURL {
  MAIN = '/spesifikasyonlar/teneke-hattı-iki-asitlemeler',
  CELIKLER = '/siparis-ogeleri/celikler',
  URUNLER  = '/siparis-ogeleri/urunler'
}
@Injectable()
export class Kt1330Service {

  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<KtSpIiTenekeAsitlemeViewModel>> {
    return this.http
      .request('GET', Kt1330ResourceURL.MAIN)
      .pipe(map(response => response.body));  
  }

  getUrunler(erdemirOnay= 1, yassiUzunIsareti= 'Y'): Observable<Urun[]> {
    return this.http
      .request('GET', `${Kt1330ResourceURL.URUNLER}?${'ERDEMIR_ONAY='+erdemirOnay+'&YASSI_UZUN_ISARETI='+yassiUzunIsareti}`)
      .pipe(map(response => response.body));
  }

  getCelikler(erdemirOnay= 1, yassiUzunIsareti= 'Y'): Observable<Celik[]> {
    return this.http
      .request('GET', `${Kt1330ResourceURL.CELIKLER}?${'ERDEMIR_ONAY='+erdemirOnay+'&YASSI_UZUN_ISARETI='+yassiUzunIsareti}`)
      .pipe(map(response => response.body));
  }

  saveOrUpdate(
    spesifikasyon: KtSpIiTenekeAsitleme
  ): Observable<ResponseModel<KtSpIiTenekeAsitleme>> {
    if (spesifikasyon.id) {
      return this.http
        .request(
          'PUT',
          `${Kt1330ResourceURL.MAIN}/${spesifikasyon.id}/${spesifikasyon.etag}`,
          spesifikasyon
        )
        .pipe(map(response => response.body));
    }
    return this.http
      .request('POST', Kt1330ResourceURL.MAIN, spesifikasyon)
      .pipe(map(response => response.body));
  }
}

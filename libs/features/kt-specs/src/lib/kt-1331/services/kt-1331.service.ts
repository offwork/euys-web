import { Injectable } from '@angular/core';
import {
  Celik,
  KtSpIiTenekeKalayErgitme,
  KtSpIiTenekeKalayErgitmeViewModel,
  ResponseModel,
  Urun,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const enum Kt1331ResourceURL {
  MAIN = '/spesifikasyonlar/teneke-hatti-2-kalay-ergitmeler',
  CELIKLER = '/siparis-ogeleri/celikler',
  URUNLER  = '/siparis-ogeleri/urunler'
}
@Injectable()
export class Kt1331Service {

  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<KtSpIiTenekeKalayErgitmeViewModel>> {
    return this.http
      .request('GET', Kt1331ResourceURL.MAIN)
      .pipe(map(response => response.body));  
  }

  getUrunler(erdemirOnay= 1, yassiUzunIsareti= 'Y'): Observable<Urun[]> {
    return this.http
      .request('GET', `${Kt1331ResourceURL.URUNLER}?${'ERDEMIR_ONAY='+erdemirOnay+'&YASSI_UZUN_ISARETI='+yassiUzunIsareti}`)
      .pipe(map(response => response.body));
  }

  getCelikler(erdemirOnay= 1, yassiUzunIsareti= 'Y'): Observable<Celik[]> {
    return this.http
      .request('GET', `${Kt1331ResourceURL.CELIKLER}?${'ERDEMIR_ONAY='+erdemirOnay+'&YASSI_UZUN_ISARETI='+yassiUzunIsareti}`)
      .pipe(map(response => response.body));
  }

  saveOrUpdate(
    spesifikasyon: KtSpIiTenekeKalayErgitme
  ): Observable<ResponseModel<KtSpIiTenekeKalayErgitme>> {
    if (spesifikasyon.id) {
      return this.http
        .request(
          'PUT',
          `${Kt1331ResourceURL.MAIN}/${spesifikasyon.id}/${spesifikasyon.etag}`,
          spesifikasyon
        )
        .pipe(map(response => response.body));
    }
    return this.http
      .request('POST', Kt1331ResourceURL.MAIN, spesifikasyon)
      .pipe(map(response => response.body));
  }
}

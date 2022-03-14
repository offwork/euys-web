import { Injectable } from '@angular/core';
import {
  Celik,
  KtSpIiTenekeKalayKimyasal,
  KtSpIiTenekeKalayKimyasalViewModel,
  ResponseModel,
  Urun,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const enum Kt1332ResourceURL {
  MAIN = '/spesifikasyonlar/teneke-hatti-2-kalay-kaplama-kimyasal-islemler',
  CELIKLER = '/siparis-ogeleri/celikler',
  URUNLER = '/siparis-ogeleri/urunler',
}

@Injectable()
export class Kt1332Service {
  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<KtSpIiTenekeKalayKimyasalViewModel>> {
    return this.http
      .request('GET', Kt1332ResourceURL.MAIN)
      .pipe(map(response => response.body));
  }

  getUrunler(erdemirOnay = 1, yassiUzunIsarti = 'Y'): Observable<Urun[]> {
    return this.http
      .request(
        'GET',
        `${Kt1332ResourceURL.URUNLER}?ERDEMIR_ONAY=${erdemirOnay}&YASSI_UZUN_ISARETI=${yassiUzunIsarti}`
      )
      .pipe(map(response => response.body));
  }

  getCelikler(erdemirOnay = 1, yassiUzunIsarti = 'Y'): Observable<Celik[]> {
    return this.http
      .request(
        'GET',
        `${Kt1332ResourceURL.CELIKLER}?ERDEMIR_ONAY=${erdemirOnay}&YASSI_UZUN_ISARETI=${yassiUzunIsarti}`
      )
      .pipe(map(response => response.body));
  }

  saveOrUpdate(
    spesifikasyon: KtSpIiTenekeKalayKimyasal
  ): Observable<ResponseModel<KtSpIiTenekeKalayKimyasal>> {
    if (spesifikasyon.id) {
      return this.http
        .request(
          'PUT',
          `${Kt1332ResourceURL.MAIN}/${spesifikasyon.id}/${spesifikasyon.etag}`,
          spesifikasyon
        )
        .pipe(map(response => response.body));
    }
    return this.http
      .request('POST', Kt1332ResourceURL.MAIN, spesifikasyon)
      .pipe(map(response => response.body));
  }
}

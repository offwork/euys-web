import { Injectable } from '@angular/core';
import {
  Celik,
  KtSpKromKaplamaTfsDragout,
  KtSpKromKaplamaTfsDragoutViewModel,
  ResponseModel,
  Urun,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const enum Kt1340ResourceURL {
  MAIN = '/spesifikasyonlar/tfs-drag-out-krom-kaplamalar',
  CELIKLER = '/siparis-ogeleri/celikler',
  URUNLER  = '/siparis-ogeleri/urunler'
}
@Injectable()
export class Kt1340Service {

  constructor(private http: HttpProviderService) {}

  getData(): Observable<ResponseModel<KtSpKromKaplamaTfsDragoutViewModel>> {
    return this.http
      .request('GET', Kt1340ResourceURL.MAIN)
      .pipe(map(response => response.body));  
  }

  getUrunler(erdemirOnay= 1, yassiUzunIsareti= 'Y'): Observable<Urun[]> {
    return this.http
      .request('GET', `${Kt1340ResourceURL.URUNLER}?${'ERDEMIR_ONAY='+erdemirOnay+'&YASSI_UZUN_ISARETI='+yassiUzunIsareti}`)
      .pipe(map(response => response.body));
  }

  getCelikler(erdemirOnay= 1, yassiUzunIsareti= 'Y'): Observable<Celik[]> {
    return this.http
      .request('GET', `${Kt1340ResourceURL.CELIKLER}?${'ERDEMIR_ONAY='+erdemirOnay+'&YASSI_UZUN_ISARETI='+yassiUzunIsareti}`)
      .pipe(map(response => response.body));
  }

  saveOrUpdate(
    spesifikasyon: KtSpKromKaplamaTfsDragout
  ): Observable<ResponseModel<KtSpKromKaplamaTfsDragout>> {
    if (spesifikasyon.id) {
      return this.http
        .request(
          'PUT',
          `${Kt1340ResourceURL.MAIN}/${spesifikasyon.id}/${spesifikasyon.etag}`,
          spesifikasyon
        )
        .pipe(map(response => response.body));
    }
    return this.http
      .request('POST', Kt1340ResourceURL.MAIN, spesifikasyon)
      .pipe(map(response => response.body));
  }
}

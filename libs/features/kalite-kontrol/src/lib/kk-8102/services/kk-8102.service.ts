import { Injectable } from '@angular/core';
import {
  Hat,
  KusurKoduKayit,
  KusurKatalogView,
  KkKusurKtlgHat,
  KkKusurGoruntuleme,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Kk8102ResourceURL } from '../enums/kk-8102-resource-url';

@Injectable()
export class Kk8102Service {
  constructor(private http: HttpProviderService) {}

  getKusurGoruntuleme(): Observable<KkKusurGoruntuleme[]> {
    return this.http
      .request('GET', `${Kk8102ResourceURL.KUSUR_GORUNTULEME}`)
      .pipe(map(response => response.body));
  }

  getUtHatList(): Observable<Hat[]> {
    return this.http
      .request('GET', Kk8102ResourceURL.UT_HATLAR)
      .pipe(map(response => response.body));
  }

  getKusurKoduView(): Observable<KusurKoduKayit[]> {
    return this.http
      .request('GET', `${Kk8102ResourceURL.KUSURLAR}`)
      .pipe(map(response => response.body));
  }

  getKusurKtlgHat(kusurKodu: string): Observable<KkKusurKtlgHat[]> {
    return this.http
      .request('GET', `${Kk8102ResourceURL.KUSURLAR}/${kusurKodu}`)
      .pipe(map(response => response.body));
  }

  getKusurKtlgHatView(
    kusurKodu: string,
    hatKodu: string
  ): Observable<KusurKatalogView> {
    return this.http
      .request(
        'GET',
        `${Kk8102ResourceURL.KUSURLAR}/${kusurKodu}/hatlar/${hatKodu}`
      )
      .pipe(map(response => response.body));
  }
}

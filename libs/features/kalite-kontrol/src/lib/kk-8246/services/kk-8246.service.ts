import { Injectable } from '@angular/core';
import {
  AsitlemeBobinModel,
  AsitlemeProsesModel,
  BagimsizNumuneGoruntulemeModel,
  DurulamaProsesModel,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Kk8246ResourceURL } from '../../kk-8246/enums/kk-8246-resource-url';
@Injectable({
  providedIn: 'root',
})
export class Kk8246Service {
  constructor(private http: HttpProviderService) {}

  getBagimsizNumuneGoruntuleme(): Observable<BagimsizNumuneGoruntulemeModel[]> {
    const url =
      Kk8246ResourceURL.TESISLER_GENEL +
      Kk8246ResourceURL.BAGIMSIZ_NUMUNE_BILGILERI +
      '?' +
      'bobinNo' +
      '=' +
      'C2110000070000' +
      '&' +
      'hatNo' +
      '=' +
      '501';
    return this.http.request('GET', url).pipe(map(response => response.body));
  }
  getBagimsizMesajBilgileri(): Observable<BagimsizNumuneGoruntulemeModel[]> {
    const url =
      Kk8246ResourceURL.TESISLER_GENEL +
      Kk8246ResourceURL.BAGIMSIZ_MESAJ_BILGILERI +
      '?' +
      'bobinNo' +
      '=' +
      'C2110000070000';
    return this.http.request('GET', url).pipe(map(response => response.body));
  }

  getAsitlemeBobinList(hatNo: string): Observable<AsitlemeBobinModel[]> {
    const endpoint = `${Kk8246ResourceURL.TESISLER_ASITLEME}/${hatNo}/${Kk8246ResourceURL.BOBIN_LISTESI}`;
    return this.http
      .request('GET', endpoint, null)
      .pipe(map(response => response.body));
  }

  getCplHattiAsitleme(): Observable<AsitlemeProsesModel[]> {
    const url =
      Kk8246ResourceURL.TESISLER_ASITLEME +
      Kk8246ResourceURL.PROSES_BILGISI_ASITLEME +
      '?' +
      'bobinNo' +
      '=' +
      'C2110002010000' +
      '&' +
      'hatNo' +
      '=' +
      '501';
    return this.http.request('GET', url).pipe(map(response => response.body));
  }
  getCplHattiDurulama(): Observable<DurulamaProsesModel[]> {
    const url =
      Kk8246ResourceURL.TESISLER_ASITLEME +
      Kk8246ResourceURL.PROSES_BILGISI_DURULAMA +
      '?' +
      'bobinNo' +
      '=' +
      'C2110002010000' +
      '&' +
      'hatNo' +
      '=' +
      '501';
    return this.http.request('GET', url).pipe(map(response => response.body));
  }
}

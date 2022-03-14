import { Injectable } from '@angular/core';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import {
  Urun,
  Celik,
  GnUretimMusteriGenelModel,
  KkOperatorBilgilendirme,
  KkOperatorBilgiGörseller,
} from '@euys/api-interfaces';
import { map } from 'rxjs/operators';
import { ValidationErrors } from '@ngneat/reactive-forms/lib/types';
import { HttpParams } from '@angular/common/http';
import { KaliteKontrolGorselService } from '../../shared/services/kalite-kontrol-gorsel.service';
import { Kk8103ResourceURL } from '../enums/kk-8103-resource-url';

@Injectable()
export class Kk8103Service {
  constructor(
    private http: HttpProviderService,
    private gorsel: KaliteKontrolGorselService
  ) {}

  getMusteriler(): Observable<GnUretimMusteriGenelModel[]> {
    return this.http
      .request('GET', Kk8103ResourceURL.UP_MUSTERILER)
      .pipe(map(response => response.body));
  }

  getUrunler(): Observable<Urun[]> {
    return this.http
      .request('GET', Kk8103ResourceURL.KT_URUNLER)
      .pipe(map(response => response.body));
  }

  getKaliteler(): Observable<Celik[]> {
    return this.http
      .request('GET', Kk8103ResourceURL.KT_KALITELER)
      .pipe(map(response => response.body));
  }

  saveOprBilgi(
    kkOprBilgilendirme: KkOperatorBilgilendirme
  ): Observable<KkOperatorBilgilendirme> {
    return this.http
      .request('POST', Kk8103ResourceURL.OPR_BILGILENDIRME, kkOprBilgilendirme)
      .pipe(map(response => response.body));
  }

  validateMpc(mpc: string): Observable<ValidationErrors | null> {
    return this.http
      .request('GET', Kk8103ResourceURL.MPCLER, null, {
        params: new HttpParams({ fromObject: { mpc } }),
      })
      .pipe(
        map(response => response.body),
        map(obj => (obj.mpc === true ? { aktifMpcBulunamadi: true } : null))
      );
  }

  getOprBilgiGorselList(
    idOprBilgilendirme: string
  ): Observable<KkOperatorBilgiGörseller[]> {
    return this.http
      .request(
        'GET',
        `${Kk8103ResourceURL.OPR_BILGILENDIRME}/${idOprBilgilendirme}${Kk8103ResourceURL.RESIMLER}`
      )
      .pipe(map(response => response.body));
  }

  postOprBilgilendirmeGorsel(
    idOprBilgilendirme: string,
    body: FormData
  ): Observable<KkOperatorBilgiGörseller[]> {
    return this.http
      .request(
        'POST',
        `${Kk8103ResourceURL.OPR_BILGILENDIRME}/${idOprBilgilendirme}${Kk8103ResourceURL.RESIMLER}`,
        body
      )
      .pipe(map(response => response.body));
  }

  deleteOprGorsel(
    kkOperatorBilgiGörseller: KkOperatorBilgiGörseller
  ): Observable<KkOperatorBilgiGörseller[]> {
    return this.http
      .request(
        'DELETE',
        `${Kk8103ResourceURL.OPR_BILGILENDIRME}${Kk8103ResourceURL.RESIMLER}`,
        kkOperatorBilgiGörseller
      )
      .pipe(map(response => response.body));
  }

  getGorselOriginalImage(gnDokumanId: string) {
    return this.gorsel.getOriginalImage(gnDokumanId);
  }
}

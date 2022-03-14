import { Injectable } from '@angular/core';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  KkOperatorBilgiGörseller,
  KkOperatorBilgilendirme,
} from '@euys/api-interfaces';
import { KaliteKontrolGorselService } from '../../shared/services/kalite-kontrol-gorsel.service';
@Injectable()
export class Kk8104Service {
  private readonly _endpoint_opr_bilgilendirme = '/opr-bilgilendirme';
  private readonly _endpoint_opr_resimler = '/resimler';

  constructor(
    private http: HttpProviderService,
    private gorsel: KaliteKontrolGorselService
  ) {}

  getOprBilgilendirmeData(
    idOprBilgilendirme: string
  ): Observable<KkOperatorBilgilendirme> {
    return this.http
      .request(
        'GET',
        `${this._endpoint_opr_bilgilendirme}/${idOprBilgilendirme}`
      )
      .pipe(map(response => response.body));
  }

  getOprBilgilendirmeList(): Observable<KkOperatorBilgilendirme[]> {
    return this.http
      .request('GET', this._endpoint_opr_bilgilendirme)
      .pipe(map(response => response.body));
  }

  updateOprBilgilendirme(
    oprBilgilendirme: KkOperatorBilgilendirme
  ): Observable<KkOperatorBilgilendirme> {
    return this.http
      .request('PUT', this._endpoint_opr_bilgilendirme, oprBilgilendirme)
      .pipe(map(response => response.body));
  }

  deleteOprBilgilendirme(
    idOprBilgilendirme: string,
    etagOprBilgilendirme: string
  ): Observable<boolean> {
    return this.http
      .request(
        'DELETE',
        `${this._endpoint_opr_bilgilendirme}/${idOprBilgilendirme}/${etagOprBilgilendirme}`
      )
      .pipe(map(response => response.body));
  }

  getOprBilgiGorselList(
    idOprBilgilendirme: string
  ): Observable<KkOperatorBilgiGörseller[]> {
    return this.http
      .request(
        'GET',
        `${this._endpoint_opr_bilgilendirme}/${idOprBilgilendirme}${this._endpoint_opr_resimler}`
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
        `${this._endpoint_opr_bilgilendirme}/${idOprBilgilendirme}${this._endpoint_opr_resimler}`,
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
        `${this._endpoint_opr_bilgilendirme}${this._endpoint_opr_resimler}`,
        kkOperatorBilgiGörseller
      )
      .pipe(map(response => response.body));
  }

  getGorselOriginalImage(gnDokumanId: string) {
    return this.gorsel.getOriginalImage(gnDokumanId);
  }
}

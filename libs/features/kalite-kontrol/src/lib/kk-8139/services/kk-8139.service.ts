import {
  HSMBobinModel,
  CMSMPratigiBilgileri,
  BagimsizMesajModel,
  QcBobinListQueryModel,
  BagimsizNumuneModel,
  CMSMpratigiModelListQueryModel,
  KkUretimYuzeyKusuru,
  Combo,
  QCKayitBilgileri,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class Kk8139Service {
  private readonly tesisler_hsm = '/tesisler/hsm/';
  private readonly cm_pratigi_list = `${this.tesisler_hsm}cm-pratigi-bilgileri`;
  private readonly qc_bobin_listesi = `${this.tesisler_hsm}qc-onay`;
  private readonly qc_kayit_bilgileri = `${this.tesisler_hsm}qc-kayit-bilgileri`;

  private readonly sm_pratigi_list = `${this.tesisler_hsm}sm-pratigi-bilgileri`;
  private readonly endpoint_bagimsiz_mesaj_list =
    '/tesisler/genel/bagimsiz-mesaj-bilgileri?bobinNo=';
  private readonly _endpoint_tesisler_hsm = '/tesisler/hsm';
  private readonly _endpoint_bagimsiz_numune = '/bagimsiz-numune-bilgileri';
  private readonly _endpoint_yuzey_kusur_kaydi = `/yuzey-kusur-kaydi`;
  private readonly _endpoint_kusurlar = '/kusurlar';
  private readonly _endpoint_butun_aktif_kusur = '/aktif-kusur-kodu';

  constructor(private http: HttpProviderService) {}

  getCmPratigiList({
    hatNo,
    bobinNo,
    qcOnayYapilmis,
  }: CMSMpratigiModelListQueryModel): Observable<CMSMPratigiBilgileri[]> {
    return this.http
      .request(
        'GET',
        `${this.cm_pratigi_list}?hatNo=${hatNo}&bobinNo=${bobinNo}&qcOnayYapilmis=${qcOnayYapilmis}`
      )
      .pipe(map(response => response.body));
  }

  getSmPratigiList({
    hatNo,
    bobinNo,
    qcOnayYapilmis,
  }: CMSMpratigiModelListQueryModel): Observable<CMSMPratigiBilgileri[]> {
    return this.http
      .request(
        'GET',
        `${this.sm_pratigi_list}?hatNo=${hatNo}&bobinNo=${bobinNo}&qcOnayYapilmis=${qcOnayYapilmis}`
      )
      .pipe(map(response => response.body));
  }

  getHSMBobinModelList({
    hatNo,
    qcOnayYapilmis,
  }: QcBobinListQueryModel): Observable<HSMBobinModel[]> {
    return this.http
      .request(
        'GET',
        `${this.qc_bobin_listesi}?hatNo=${hatNo}&qcOnayYapilmis=${qcOnayYapilmis}`
      )
      .pipe(map(response => response.body));
  }

  getBagimsizMesajBilgileri(bobinNo: string): Observable<BagimsizMesajModel[]> {
    return this.http
      .request('GET', this.endpoint_bagimsiz_mesaj_list + bobinNo)
      .pipe(map(response => response.body));
  }
  getBagimsizNumuneList(
    hatNo: string,
    bobinNo: string
  ): Observable<BagimsizNumuneModel[]> {
    const endpoint = `${this._endpoint_tesisler_hsm}${this._endpoint_bagimsiz_numune}`;
    return this.http
      .request('GET', endpoint, null, {
        params: new HttpParams({
          fromObject: {
            hatNo: hatNo,
            bobinNo: bobinNo,
          },
        }),
      })
      .pipe(map(response => response.body));
  }

  getYuzeyKusurKaydiList(
    hatNo: string,
    bobinNo: string
  ): Observable<KkUretimYuzeyKusuru[]> {
    return this.http
      .request(
        'GET',
        `${this.tesisler_hsm}/${this._endpoint_yuzey_kusur_kaydi}`,
        null,
        {
          params: new HttpParams({
            fromObject: {
              hatNo: hatNo,
              bobinNo: bobinNo,
            },
          }),
        }
      )
      .pipe(map(response => response.body));
  }

  getButunAktifKusur(hatNo: string): Observable<Combo[]> {
    return this.http
      .request(
        'GET',
        `${this._endpoint_kusurlar}${this._endpoint_butun_aktif_kusur}`,
        null,
        {
          params: new HttpParams({
            fromObject: { hatNo },
          }),
        }
      )
      .pipe(map(response => response.body));
  }
  /*
   *
   * Ekran 3 qc kayit bilgileri modelini getirir
   *
   */

  getQcKayitBilgileri({
    hatNo,
    bobinNo,
    qcOnayYapilmis,
  }: CMSMpratigiModelListQueryModel): Observable<QCKayitBilgileri> {
    return this.http
      .request('GET', `${this.qc_kayit_bilgileri}`, null, {
        params: new HttpParams({
          fromObject: {
            hatNo,
            bobinNo,
            qcOnayYapilmis,
          },
        }),
      })
      .pipe(map(response => response.body));
  }
}

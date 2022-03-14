import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Combo,
  /* BagimsizMesajModel,
  BagimsizNumuneModel, */
  FmPratigiModel,
  HSMBobinModel,
  KabaHaddelemePasoModel,
  KkUretimYuzeyKusuru,
  QCKayitBilgileri,
  QCOnayModel,
  SlabBilgisi,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Kk8115ResourceURL } from '../enums/kk-8115-resource-url';

@Injectable()
export class Kk8115Service {
  constructor(private http: HttpProviderService) {}

  getHSMBobinList(): Observable<HSMBobinModel[]> {
    const endpoint = `${Kk8115ResourceURL.TESISLER_HSM}${Kk8115ResourceURL.HSM_BOBIN_LIST_PATH}`;
    return this.http
      .request('GET', endpoint, null, {
        params: new HttpParams({
          fromObject: {
            hatNo: '332',
            qcOnayYapilmis: false,
          },
        }),
      })
      .pipe(map(response => response.body));
  }

  getBagimsizNumuneList(
    bobinNo: string
  ): Observable</* BagimsizNumuneModel[] */ any[]> {
    const endpoint = `${Kk8115ResourceURL.TESISLER_GENEL}${Kk8115ResourceURL.BAGIMSIZ_NUMUNE_PATH}`;
    return this.http
      .request('GET', endpoint, null, {
        params: new HttpParams({
          fromObject: {
            hatNo: '332',
            bobinNo,
          },
        }),
      })
      .pipe(map(response => response.body));
  }

  getBagimsizMesajList(
    bobinNo: string
  ): Observable</* BagimsizMesajModel[] */ any[]> {
    return this.http
      .request(
        'GET',
        `${Kk8115ResourceURL.TESISLER_GENEL}${Kk8115ResourceURL.BAGIMSIZ_MESAJ}`,
        null,
        {
          params: new HttpParams({
            fromObject: {
              bobinNo,
            },
          }),
        }
      )
      .pipe(map(response => response.body));
  }

  getSlabBilgisi(hatNo: string, bobinNo: string): Observable<SlabBilgisi> {
    const url =
      Kk8115ResourceURL.TESISLER_HSM +
      Kk8115ResourceURL.SLAB_BILGISI +
      '?' +
      'hatNo' +
      '=' +
      hatNo +
      '&' +
      'bobinNo' +
      '=' +
      bobinNo;
    return this.http.request('GET', url).pipe(map(response => response.body));
  }
  getKabaHaddelemePasoModelList(
    hatNo: string,
    bobinNo: string
  ): Observable<KabaHaddelemePasoModel> {
    const url =
      Kk8115ResourceURL.TESISLER_HSM +
      Kk8115ResourceURL.KABA_HADDELEME_LIST +
      '?' +
      'bobinNo' +
      '=' +
      bobinNo +
      '&' +
      'hatNo' +
      '=' +
      hatNo;
    return this.http.request('GET', url).pipe(map(response => response.body));
  }
  getFmPratigiModelList(
    hatNo: string,
    bobinNo: string
  ): Observable<FmPratigiModel[]> {
    const url =
      Kk8115ResourceURL.TESISLER_HSM +
      Kk8115ResourceURL.FM_PRATIGI_LIST +
      '?' +
      'bobinNo' +
      '=' +
      bobinNo +
      '&' +
      'hatNo' +
      '=' +
      hatNo;
    return this.http.request('GET', url).pipe(map(response => response.body));
  }

  getQCKayitBilgileri(
    hatNo: string,
    bobinNo: string,
    qcOnayYapilmis: boolean
  ): Observable<QCKayitBilgileri> {
    const url = `${Kk8115ResourceURL.TESISLER_HSM}${Kk8115ResourceURL.QC_KAYIT_BILGILERI}`;
    return this.http
      .request('GET', url, null, {
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

  getYuzeyKusurKaydiList(
    hatNo: string,
    bobinNo: string
  ): Observable<KkUretimYuzeyKusuru[]> {
    return this.http
      .request(
        'GET',
        `${Kk8115ResourceURL.TESISLER_HSM}/${Kk8115ResourceURL.YUZEY_KUSUR_KAYDI}`,
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
        `${Kk8115ResourceURL.KUSURLAR}${Kk8115ResourceURL.BUTUN_AKTIF_KUSUR}`,
        null,
        {
          params: new HttpParams({
            fromObject: { hatNo },
          }),
        }
      )
      .pipe(map(response => response.body));
  }

  postQcOnay(qcOnay: QCOnayModel): Observable<string> {
    return this.http
      .request(
        'POST',
        `${Kk8115ResourceURL.TESISLER_HSM}${Kk8115ResourceURL.HSM_BOBIN_LIST_PATH}`,
        qcOnay
      )
      .pipe(map(response => response.body));
  }
}

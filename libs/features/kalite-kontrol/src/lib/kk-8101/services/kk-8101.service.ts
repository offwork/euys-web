import { Injectable } from '@angular/core';
import {
  KkKusur,
  KkStKusurSinifi,
  KkKusurAna,
  ResponseModel,
  Hat,
  KusurKoduKayit,
  KkKusurKtlgHat,
  KusurKatalogView,
  Combo,
  KkKusurKtlgGorsel,
  ComboModel,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { KaliteKontrolGorselService } from '../../shared/services/kalite-kontrol-gorsel.service';

@Injectable()
export class Kk8101Service {
  private readonly _endpoint_kusurlar = '/kusurlar';
  private readonly _endpoint_kusurSiniflari =
    '/kusur-ana-veri/st-kusur-siniflari';
  private readonly _endpoint_anaKusurKodlari =
    '/kusur-ana-veri/ana-kusur-kodlari';
  private readonly _endpoint_ut_hatlar = '/kusur-ana-veri/hatlar'; // TODO: ut'den gelecek
  private readonly _endpoint_katalog_hat_combo = '/ktlg-hatlar-combo';
  private readonly _endpoint_kt_kaliteler = '/kusur-ana-veri/kaliteler';

  private readonly _endpoint_kt_urunler = '/kusur-ana-veri/urunler';
  private readonly _path_hatlar = '/hatlar';
  private readonly _path_gorseller = '/gorseller';

  constructor(
    private http: HttpProviderService,
    private gorsel: KaliteKontrolGorselService
  ) {}

  getKusurlarData(): Observable<KkKusur[]> {
    return this.http
      .request('GET', this._endpoint_kusurlar)
      .pipe(map(response => response.body));
  }

  getKusurKoduView(kusurKodu: string): Observable<KusurKoduKayit> {
    return this.http
      .request('GET', `${this._endpoint_kusurlar}/${kusurKodu}/view`)
      .pipe(map(response => response.body));
  }

  getAnaKusurlariData(): Observable<KkKusurAna[]> {
    return this.http
      .request('GET', this._endpoint_anaKusurKodlari)
      .pipe(map(response => response.body));
  }

  getKusurSiniflariData(): Observable<KkStKusurSinifi[]> {
    return this.http
      .request('GET', this._endpoint_kusurSiniflari)
      .pipe(map(response => response.body));
  }

  getKaliteler(): Observable<Combo[]> {
    return this.http
      .request('GET', this._endpoint_kt_kaliteler)
      .pipe(map(response => response.body));
  }

  saveKkKusurAna(
    kKKusurAna: KkKusurAna
  ): Observable<ResponseModel<KkKusurAna>> {
    return this.http
      .request('POST', this._endpoint_kusurSiniflari, kKKusurAna)
      .pipe(map(response => response.body));
  }

  /**
   *
   * @returns UT'den gelen hat listesi
   */
  getUtHatList(): Observable<Hat[]> {
    return this.http
      .request('GET', this._endpoint_ut_hatlar)
      .pipe(map(response => response.body));
  }

  getKatalogHatComboList(kusurKodu: string): Observable<string[]> {
    return this.http
      .request(
        'GET',
        `${this._endpoint_kusurlar}/${kusurKodu}${this._endpoint_katalog_hat_combo}`
      )
      .pipe(
        map(response =>
          response.body.map((hat: { hatKodu: string }) => hat.hatKodu)
        )
      );
  }

  saveKusur(kusurKoduKayit: KusurKoduKayit): Observable<KusurKoduKayit> {
    return this.http
      .request('POST', this._endpoint_kusurlar, kusurKoduKayit)
      .pipe(map(response => response.body));
  }

  getKusurKtlgHat(kusurKodu: string): Observable<KkKusurKtlgHat[]> {
    return this.http
      .request('GET', `${this._endpoint_kusurlar}/${kusurKodu}`)
      .pipe(
        map(response => response.body),
        catchError(() => of([]))
      );
  }

  getKusurKtlgHatView(
    kusurKodu: string,
    hatKodu: string
  ): Observable<KusurKatalogView> {
    return this.http
      .request(
        'GET',
        `${this._endpoint_kusurlar}/${kusurKodu}${this._path_hatlar}/${hatKodu}`
      )
      .pipe(map(response => response.body));
  }

  saveOrUpdateKusurKatalog(
    kusurKatalog: KusurKatalogView
  ): Observable<KusurKatalogView> {
    const persists = !!kusurKatalog.kkKusurKtlgHat.id;
    const METHOD = persists ? 'PUT' : 'POST';
    const { kusurKodu, hatKodu } = kusurKatalog.kkKusurKtlgHat;
    const URL = `${this._endpoint_kusurlar}/${kusurKodu}${this._path_hatlar}/${hatKodu}/detaylar`;
    return this.http
      .request(METHOD, URL, kusurKatalog)
      .pipe(map(response => response.body));
  }

  deleteKusurKatalog(kusurKatalog: KusurKatalogView): Observable<boolean> {
    const { kusurKodu, hatKodu } = kusurKatalog.kkKusurKtlgHat;
    return this.http
      .request(
        'DELETE',
        `${this._endpoint_kusurlar}/${kusurKodu}${this._path_hatlar}/${hatKodu}/detaylar`,
        kusurKatalog
      )
      .pipe(map(response => response.body));
  }

  //_endpoint_kt_urunler;
  getUrunList(): Observable<Combo[]> {
    return this.http
      .request('GET', this._endpoint_kt_urunler)
      .pipe(map(response => response.body));
  }

  getKusurGorselList(
    kusurKodu: string,
    hatKodu: string
  ): Observable<KkKusurKtlgGorsel[]> {
    return this.http
      .request(
        'GET',
        `${this._endpoint_kusurlar}/${kusurKodu}${this._path_hatlar}/${hatKodu}${this._path_gorseller}`
      )
      .pipe(map(response => response.body));
  }

  postKusurGorsel(
    kusurKodu: string,
    hatKodu: string,
    body: FormData
  ): Observable<KkKusurKtlgGorsel[]> {
    return this.http
      .request(
        'POST',
        `${this._endpoint_kusurlar}/${kusurKodu}${this._path_hatlar}/${hatKodu}${this._path_gorseller}`,
        body
      )
      .pipe(map(response => response.body));
  }

  deleteKusurGorsel(
    kusurKodu: string,
    hatKodu: string,
    body: KkKusurKtlgGorsel
  ): Observable<KkKusurKtlgGorsel[]> {
    return this.http
      .request(
        'DELETE',
        `${this._endpoint_kusurlar}/${kusurKodu}${this._path_hatlar}/${hatKodu}${this._path_gorseller}`,
        body
      )
      .pipe(map(response => response.body));
  }

  getGorselOriginalImage(gnDokumanId: string) {
    return this.gorsel.getOriginalImage(gnDokumanId);
  }
}

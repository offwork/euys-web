import { Injectable } from '@angular/core';
import {
  KtSpYaglamaSpec,
  YaglamaMarkasi,
  KtAnatabloYaglamaDurumu,
  KTSPYaglamaViewModel,
  KtStYaglamaYuzeyi,
  ResponseModel,
  UtStHatTanim,
} from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class Kt1359Service {
  readonly _endpoint = '/spesifikasyonlar/yaglamalar';

  constructor(private http: HttpProviderService) {}

  extendYaglamaMarkasiList(
    yaglamaMarkasiList: YaglamaMarkasi[]
  ): YaglamaMarkasi[] {
    return yaglamaMarkasiList.map(yaglamaMarkasi => {
      return {
        ...yaglamaMarkasi,
        kodMarka: `${yaglamaMarkasi.yagMarkasiAnaTabloKodu} - ${yaglamaMarkasi.marka}`,
      };
    });
  }

  extendKtAnatabloYaglamaDurumuList(
    ktAnatabloYaglamaDurumuList: KtAnatabloYaglamaDurumu[]
  ): KtAnatabloYaglamaDurumu[] {
    return ktAnatabloYaglamaDurumuList.map(ktAnatabloYaglamaDurumu => {
      return {
        ...ktAnatabloYaglamaDurumu,
        kodDurum: `${ktAnatabloYaglamaDurumu.yaglamaDurumuAnaTabloKodu} - ${ktAnatabloYaglamaDurumu.durum}`,
      };
    });
  }

  extendYaglamaYuzeyiList(
    ktStYaglamaYuzeyiList: KtStYaglamaYuzeyi[]
  ): KtStYaglamaYuzeyi[] {
    return ktStYaglamaYuzeyiList.map(ktStYaglamaYuzeyi => {
      return {
        ...ktStYaglamaYuzeyi,
        kodYuzey: `${ktStYaglamaYuzeyi.yaglamaYuzeyiKodu} - ${ktStYaglamaYuzeyi.yaglamaYuzeyi}`,
      };
    });
  }

  extendUstHatTanimList(utStHatTanimList: UtStHatTanim[]): UtStHatTanim[] {
    return utStHatTanimList.map(utStHatTanimList => {
      return {
        ...utStHatTanimList,
        kodTanim: `${utStHatTanimList.hatKodu} - ${utStHatTanimList.hatUzunTanim}`,
      };
    });
  }

  streamlineKTSPYaglamaViewmodel(
    ktSPYaglamaViewModel: KTSPYaglamaViewModel
  ): KTSPYaglamaViewModel {
    ktSPYaglamaViewModel.yaglamaMarkasiList = this.extendYaglamaMarkasiList(
      ktSPYaglamaViewModel.yaglamaMarkasiList
    );
    ktSPYaglamaViewModel.ktAnatabloYaglamaDurumuList =
      this.extendKtAnatabloYaglamaDurumuList(
        ktSPYaglamaViewModel.ktAnatabloYaglamaDurumuList
      );
    ktSPYaglamaViewModel.ktStYaglamaYuzeyiList = this.extendYaglamaYuzeyiList(
      ktSPYaglamaViewModel.ktStYaglamaYuzeyiList
    );
    ktSPYaglamaViewModel.utStHatTanimList = this.extendUstHatTanimList(
      ktSPYaglamaViewModel.utStHatTanimList
    );
    return ktSPYaglamaViewModel;
  }

  getYaglamaList(): Observable<ResponseModel<KtSpYaglamaSpec[]>> {
    return this.http.request('GET', this._endpoint).pipe(
      map(response => {
        return response.body;
      })
    );
  }

  getConfig(): Observable<ResponseModel<KTSPYaglamaViewModel>> {
    return this.http.request('GET', `${this._endpoint}/config`).pipe(
      map(response => {
        this.streamlineKTSPYaglamaViewmodel(response.body.data);
        return response.body;
      })
    );
  }

  saveOrUpdate(
    spesifikasyon: KtSpYaglamaSpec
  ): Observable<ResponseModel<KtSpYaglamaSpec>> {
    if (spesifikasyon.id) {
      return this.http
        .request(
          'PUT',
          `${this._endpoint}/${spesifikasyon.id}/${spesifikasyon.etag}`,
          spesifikasyon
        )
        .pipe(map(response => response.body));
    }
    return this.http
      .request('POST', this._endpoint, spesifikasyon)
      .pipe(map(response => response.body));
  }

  isUpdate(selectedRow: KtSpYaglamaSpec) {
    return Boolean(selectedRow && selectedRow.id);
  }
}

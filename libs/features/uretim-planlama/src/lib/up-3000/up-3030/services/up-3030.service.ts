import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { YupBackUpPlanGenelModel } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Up3030Service {
  constructor(private http: HttpProviderService) {}

  save(yupBackUpPlanGenelModel: YupBackUpPlanGenelModel) {
    return this.http
      .request(
        'POST',
        '/yup/up-yup-back-up-plani/kaydet-guncelle',
        yupBackUpPlanGenelModel
      )
      .pipe(map(response => response.body));
  }

  load(yil: string, donem: string, urunGrubu: string) {
    return this.http
      .request('GET', '/yup/up-yup-back-up-plani/back-up-plani-giris', null, {
        params: new HttpParams({ fromObject: { yil, donem, urunGrubu } }),
      })
      .pipe(map(response => response.body));
  }
}

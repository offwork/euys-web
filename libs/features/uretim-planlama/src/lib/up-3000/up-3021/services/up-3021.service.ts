import { Injectable } from '@angular/core';
import { YupGunlukPlanBilgileriModel } from '@euys/api-interfaces';
import { HttpProviderService } from '@euys/core';

@Injectable()
export class Up3021Service {
  constructor(private http: HttpProviderService) {}

  load(yupGunlukPlanBilgileriModel: YupGunlukPlanBilgileriModel) {
    return this.http.request(
      'POST',
      '/yup/yup-gunluk-uretim-plani/yup-gunluk-plan-detay-bilgileri-liste-getir',
      yupGunlukPlanBilgileriModel
    );
  }
}

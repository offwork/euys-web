import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
  Stage,
  YupGunlukPlanBilgileriModel,
  YupGunlukPlanDetayBilgileriDonusModel,
} from '@euys/api-interfaces';
import { filter, find, range, sumBy } from 'lodash';
import moment from 'moment';
import { map } from 'rxjs/operators';
import { Up3021Facade } from '../+state/up-3021.facade';

@Component({
  selector: 'euys-up3021',
  templateUrl: './up-3021.component.html',
})
export class Up3021Component {
  done$ = this.facade.stage$.pipe(map(stage => stage === Stage.DONE));
  progress$ = this.facade.stage$.pipe(map(stage => stage === Stage.PROGRESS));
  data$ = this.facade.data$;
  tesisAdlari$ = this.facade.tesisAdlari$;

  yilAy: FormControl = new FormControl(new Date(), Validators.required);
  gunler: number[] = [];

  constructor(private facade: Up3021Facade) {
    this.facade.init();
  }

  load() {
    const yilAy = moment(this.yilAy.value);
    this.gunler = range(1, yilAy.daysInMonth() + 1);

    const yupGunlukPlanBilgileriModel = {
      yil: yilAy.format('YYYY'),
      ay: yilAy.format('MM'),
    } as YupGunlukPlanBilgileriModel;

    this.facade.load(yupGunlukPlanBilgileriModel);
  }

  getValue(
    data: YupGunlukPlanDetayBilgileriDonusModel[],
    hatTesisAdi: string,
    ayinKacinciGunu: number
  ) {
    return find(data, { hatTesisAdi, ayinKacinciGunu })?.uretimHedefMiktar || 0;
  }

  getTotal(data: YupGunlukPlanDetayBilgileriDonusModel[], hatTesisAdi: string) {
    return sumBy(filter(data, { hatTesisAdi }), 'uretimHedefMiktar');
  }
}

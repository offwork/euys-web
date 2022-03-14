import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { chain } from 'lodash';
import moment from 'moment';
import { map } from 'rxjs/operators';
import { AylikUretimPlaniFacade } from '../../shared/aylik-uretim-plani/+state/aylik-uretim-plani.facade';

@Component({
  selector: 'euys-up3011',
  templateUrl: './up-3011.component.html',
  styleUrls: ['./up-3011.component.scss'],
})
export class Up3011Component {
  loading$ = this.facade.loading$;
  yupAylikAnaModel$ = this.facade.yupAylikAnaModel$;
  yupAylikUretimPlaniModelList$ = this.facade.yupAylikUretimPlaniModelList$;
  yupAylikNihaiMamulModelList$ = this.facade.yupAylikNihaiMamulModelList$;

  yilAy: FormControl = new FormControl(new Date(), Validators.required);

  constructor(private facade: AylikUretimPlaniFacade) {
    this.facade.init();
  }

  load() {
    const yilAy = moment(this.yilAy.value);
    const yil = yilAy.format('YYYY');
    const ay = yilAy.format('MM');

    this.facade.load(ay, yil);
  }

  getTotal(aylikMamulGrupTanim: string) {
    return this.yupAylikNihaiMamulModelList$.pipe(
      map(list => {
        return chain(list)
          .filter({ aylikMamulGrupTanim })
          .sumBy('uretimHedefMiktar')
          .value();
      })
    );
  }

  getSpanSize(aylikMamulGrupTanim: string) {
    return this.yupAylikNihaiMamulModelList$.pipe(
      map(list => {
        return chain(list).filter({ aylikMamulGrupTanim }).value().length;
      })
    );
  }
  isSpan(aylikMamulGrupTanim: string, index: number) {
    return this.yupAylikNihaiMamulModelList$.pipe(
      map(list => {
        return chain(list).findIndex({ aylikMamulGrupTanim }).value() === index;
      })
    );
  }
}

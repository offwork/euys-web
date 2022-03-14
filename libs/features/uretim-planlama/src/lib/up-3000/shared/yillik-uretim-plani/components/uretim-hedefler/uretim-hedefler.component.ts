import { Component, Input } from '@angular/core';
import {
  UP_MONTHS,
  YupProjeksiyonHatUretimHedeflerDonusModel,
  YupProjeksiyonHatUretimHedeflerGenelModel,
} from '@euys/api-interfaces';
import { chain, find, get, sumBy } from 'lodash';

@Component({
  selector: 'euys-uretim-hedefler',
  templateUrl: './uretim-hedefler.component.html',
})
export class UretimHedeflerComponent {
  @Input() list: YupProjeksiyonHatUretimHedeflerGenelModel[] = [];

  months = UP_MONTHS;

  getValue(
    hedefler: YupProjeksiyonHatUretimHedeflerDonusModel[],
    month: number
  ) {
    const ay = String(month).padStart(2, '0');
    return get(find(hedefler, { ay }), 'uretimHedefMiktar', '');
  }

  spanSum(hatGrupUzunTanim: string, month: number) {
    const ay = String(month).padStart(2, '0');
    return (
      chain(this.list)
        .filter({ hatGrupUzunTanim })
        .flatMap('yupProjeksiyonHatUretimHedeflerDonusModel')
        .filter({ ay })
        .sumBy('uretimHedefMiktar')
        .value() || ''
    );
  }

  spanSumAll(hatGrupUzunTanim: string) {
    return chain(this.list)
      .filter({ hatGrupUzunTanim })
      .flatMap('yupProjeksiyonHatUretimHedeflerDonusModel')
      .sumBy('uretimHedefMiktar')
      .value();
  }

  sum(hedefler: YupProjeksiyonHatUretimHedeflerDonusModel[]) {
    return sumBy(hedefler, 'uretimHedefMiktar');
  }
}

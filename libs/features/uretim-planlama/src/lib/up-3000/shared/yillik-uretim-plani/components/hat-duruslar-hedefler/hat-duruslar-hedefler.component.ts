import { Component, Input } from '@angular/core';
import {
  UpYupBazHatPlanliDuruslarDonusModel,
  UpYupBazHatUretimHedefDonusModel,
  UP_MONTHS,
} from '@euys/api-interfaces';
import { find, get, range, sumBy } from 'lodash';

type DuruslarHedefler =
  | UpYupBazHatPlanliDuruslarDonusModel
  | UpYupBazHatUretimHedefDonusModel;

@Component({
  selector: 'euys-hat-duruslar-hedefler',
  templateUrl: './hat-duruslar-hedefler.component.html',
})
export class HatDuruslarHedeflerComponent {
  @Input() keys: string[];
  @Input() rows: DuruslarHedefler[];
  @Input() propName: string;
  months = UP_MONTHS;
  monthsNumber = range(1, 13);

  findTesis(rows: DuruslarHedefler[], tesis: string, _ay: number) {
    return find(
      rows,
      ({ hatTesisAdi, ay }) => hatTesisAdi === tesis && Number(ay) === _ay
    );
  }

  getValue(rows: DuruslarHedefler[], tesis: string, ay: number, key: string) {
    return get(this.findTesis(rows, tesis, ay), key, '');
  }

  getAciklama(rows: DuruslarHedefler[], tesis: string, ay: number) {
    return get(this.findTesis(rows, tesis, ay), 'durusAciklama', '');
  }

  getRowTotal(rows: DuruslarHedefler[], tesis: string, key: string) {
    return sumBy(
      rows.filter(({ hatTesisAdi }) => hatTesisAdi === tesis),
      key
    );
  }
}

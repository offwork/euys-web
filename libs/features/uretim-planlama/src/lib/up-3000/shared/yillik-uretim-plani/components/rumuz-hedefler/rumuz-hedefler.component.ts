import { Component, Input, OnInit } from '@angular/core';
import {
  UP_MONTHS,
  YupProjeksiyonUrunRumuzuBazindaHedeflerDonusModel,
  YupProjeksiyonUrunRumuzuBazindaHedeflerGenelModel,
} from '@euys/api-interfaces';
import { makeSpanList, Spanned } from '@euys/shared/utility';
import { chain } from 'lodash';

@Component({
  selector: 'euys-rumuz-hedefler',
  templateUrl: './rumuz-hedefler.component.html',
})
export class RumuzHedeflerComponent implements OnInit {
  @Input() list: YupProjeksiyonUrunRumuzuBazindaHedeflerGenelModel[] = [];
  rumuzList: Spanned<YupProjeksiyonUrunRumuzuBazindaHedeflerDonusModel>[] = [];

  months = UP_MONTHS;

  ngOnInit() {
    this.rumuzList = makeSpanList(
      this.list[0]?.donusModelList || [],
      'rumuzAciklama'
    );
  }

  spanSum(rumuzAciklama: string, month: number) {
    const ay = String(month).padStart(2, '0');
    return (
      chain(this.list)
        .find({ ay })
        .get('donusModelList', [])
        .filter({ rumuzAciklama })
        .sumBy('uretimHedefMiktar')
        .value() || ''
    );
  }

  spanSumAll(rumuzAciklama: string) {
    return chain(this.list)
      .flatMap('donusModelList')
      .filter({ rumuzAciklama })
      .sumBy('uretimHedefMiktar')
      .value();
  }

  getValue(month: number, urunRumuzu: string) {
    const ay = String(month).padStart(2, '0');
    const value = chain(this.list)
      .find({ ay })
      .get('donusModelList', [])
      .find({ urunRumuzu })
      .value();

    return value?.uretimHedefMiktar || '';
  }

  sum(urunRumuzu: string) {
    return chain(this.list)
      .flatMap('donusModelList')
      .filter({ urunRumuzu })
      .sumBy('uretimHedefMiktar')
      .value();
  }

  totalSum(month: number) {
    const ay = String(month).padStart(2, '0');

    return chain(this.list)
      .find({ ay })
      .get('donusModelList', [])
      .sumBy('uretimHedefMiktar')
      .value();
  }

  sumAll() {
    return chain(this.list)
      .flatMap('donusModelList')
      .sumBy('uretimHedefMiktar')
      .value();
  }
}

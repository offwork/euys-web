import { Component, Input, OnInit } from '@angular/core';
import {
  UP_MONTHS,
  YupProjeksiyonKapasiteGrubuBazindaHedeflerDonusModel,
  YupProjeksiyonKapasiteGrubuBazindaHedeflerGenelModel,
} from '@euys/api-interfaces';
import { chain } from 'lodash';

@Component({
  selector: 'euys-kapasite-hedefler',
  templateUrl: './kapasite-hedefler.component.html',
})
export class KapasiteHedeflerComponent implements OnInit {
  @Input() list: YupProjeksiyonKapasiteGrubuBazindaHedeflerGenelModel[] = [];
  kapasiteListe: YupProjeksiyonKapasiteGrubuBazindaHedeflerDonusModel[] = [];
  months = UP_MONTHS;

  ngOnInit(): void {
    this.kapasiteListe = this.list[0]?.donusModelList || [];
  }

  getValue(month: number, raporGrubu: string) {
    const ay = String(month).padStart(2, '0');
    const value = chain(this.list)
      .find({ ay })
      .get('donusModelList', [])
      .find({ raporGrubu })
      .value();

    return value?.hedefMiktar || '';
  }

  sum(raporGrubu: string) {
    return chain(this.list)
      .flatMap('donusModelList')
      .filter({ raporGrubu })
      .sumBy('hedefMiktar')
      .value();
  }

  totalSum(month: number) {
    const ay = String(month).padStart(2, '0');

    return chain(this.list)
      .find({ ay })
      .get('donusModelList', [])
      .sumBy('hedefMiktar')
      .value();
  }

  sumAll() {
    return chain(this.list)
      .flatMap('donusModelList')
      .sumBy('hedefMiktar')
      .value();
  }
}

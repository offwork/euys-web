import { Component, Input, OnInit } from '@angular/core';
import {
  UP_MONTHS,
  YupProjeksiyonUrunGrubuBazindaHedeflerDonusModel,
  YupProjeksiyonUrunGrubuBazindaHedeflerGenelModel,
} from '@euys/api-interfaces';
import { chain, get } from 'lodash';

@Component({
  selector: 'euys-urun-hedefler',
  templateUrl: './urun-hedefler.component.html',
})
export class UrunHedeflerComponent implements OnInit {
  @Input() list: YupProjeksiyonUrunGrubuBazindaHedeflerGenelModel[];
  urunListe: YupProjeksiyonUrunGrubuBazindaHedeflerDonusModel[] = [];
  months = UP_MONTHS;

  ngOnInit(): void {
    this.urunListe = this.list[0]?.donusModelList || [];
  }

  getValue(month: number, rumuzAciklama: string) {
    const ay = String(month).padStart(2, '0');

    return (
      chain(this.list)
        .find({ ay })
        .get('donusModelList', [])
        .find({ rumuzAciklama })
        .value()?.toplam || ''
    );
  }

  sum(rumuzAciklama: string) {
    return chain(this.list)
      .flatMap('donusModelList')
      .filter({ rumuzAciklama })
      .sumBy('toplam')
      .value();
  }

  totalSum(month: number) {
    const ay = String(month).padStart(2, '0');

    return chain(this.list)
      .find({ ay })
      .get('donusModelList', [])
      .sumBy('toplam')
      .value();
  }

  sumAll() {
    return chain(this.list).flatMap('donusModelList').sumBy('toplam').value();
  }
}

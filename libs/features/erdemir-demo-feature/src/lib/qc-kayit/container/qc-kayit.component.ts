import { Component } from '@angular/core';
import * as _ from 'lodash';
import { Item } from '../qc-kayit.models';

@Component({
  selector: 'euys-qc-kayit',
  templateUrl: './qc-kayit.component.html',
  styleUrls: ['./qc-kayit.component.scss'],
})
export class QCKayitComponent {
  qc = {
    mpc: {
      kalinlik: { ort: 0, actMin: 0, actMax: 0 },
      genislik: { ort: 0, actMin: 0, actMax: 0 },
      b7: { ort: 0 },
      b8: { ort: 0 },
    },
    left: {
      bobinAcmaKontrol: 'E',
      standartNumune: 'E',
      yuzeyKusuru: 'H',
    },
  };
  accordionTableOpen = false;

  dummyArray = [...Array(12).keys()];

  topData: Item[] = [
    { label: 'Döküm No' },
    { label: 'Döküm Kalitesi', wide: true },
    { label: 'Çelik Kalitesi Standardı', wide: true },
    { label: 'QC Kayıt Tarihi' },
    { label: 'Slab No' },
    { label: 'Erdemir Çelik Kalitesi', wide: true },
    { label: 'Y/I', wide: true },
    { label: 'QC Operatör' },
    { label: 'Bob. No' },
    { label: 'Uluslararası Çelik Kalitesi', wide: true },
    { label: 'Ürün', wide: true },
  ];

  leftData: Item[] = [
    { label: 'Üretim Tarihi' },
    { label: 'Üretim Zamanı' },
    { label: 'Hat No' },
    { label: 'MPC No' },
    { label: 'Deneme mi?' },
    { label: 'Fason Mu?' },
    { label: 'Müşteri ' },
    { label: 'Müşteri Spec. No' },
    { label: 'Prot Lot No' },
    { label: 'Sonraki Hat' },
    { label: 'Sendback' },
    { label: 'x' },
    { label: 'Bobin uzunluğu' },
    { label: 'Bob. Ağ.' },
    { label: 'x' },
    { label: 'Üretim Süresi (Sn)' },
    { label: 'x' },
    { label: 'x' },
    { label: 'x' },
    { key: 'left.bobinAcmaKontrol', label: 'Bobin Açma Kontrol', editable: true, options: ['E', 'H'] },
    { label: 'Standart Numune No' },
    { label: 'Standart Numune İşr.' },
    { key: 'left.standartNumune', label: 'Numune AL', editable: true, options: ['E', 'H'] },
    { key: 'left.yuzeyKusuru', label: '*Yüzey Kusuru Var mı', editable: true, options: ['E', 'H'] },
  ];

  rtTopRows: Item[] = [
    { key: 'mpc.kalinlik', label: 'Kalınlık', editables: ['ort', 'actMin', 'actMax'] },
    { key: 'mpc.genislik', label: 'Genişlik', editables: ['ort', 'actMin', 'actMax'] },
    { key: 'mpc.crown', label: 'Crown C40' },
    { key: 'mpc.wedge', label: 'Wedge' },
  ];

  rtBottomRows: Item[] = [
    { key: 'mpc.b1', label: 'Bobin İç Çapı' },
    { key: 'mpc.b2', label: 'Bobin Dış Çapı' },
    { key: 'mpc.b3', label: 'Slab Fırını Giriş Sıc.(C)' },
    { key: 'mpc.b4', label: 'Slab Fırın Sıc.(C)' },
    { key: 'mpc.b5', label: 'Slab Fırını Çıkış Sıc.(C)' },
    { key: 'mpc.b6', label: 'Slab Fırını Tutma Sür.' },
    { key: 'mpc.b7', label: 'Şerit Hadde Giriş Sıc.', editables: ['ort'] },
    { key: 'mpc.b8', label: 'Şerit Hadde İkmal Sıc.', editables: ['ort'] },
    { key: 'mpc.b9', label: 'Şerit Hadde Sar. Sıc.' },
    { key: 'mpc.b10', label: 'Soğutma Hızı C/sn' },
    { key: 'mpc.b11', label: 'Soğutma Paterni' },
  ];

  rtData: Item[] = [
    { key: 'hedef' },
    { key: 'min' },
    { key: 'max' },
    { key: 'ort' },
    { key: 'actMin' },
    { key: 'actMax' },
    { key: 'hold' },
  ];

  tcrRows: Item[] = [
    { label: 'Bek. Kalınlığı(mm)' },
    { label: 'Tekrar Baş. Sıc.(C)' },
    { label: 'Bekletme Süresi(sn)' },
    { label: 'TCR Karar' },
  ];

  tcrData: Item[] = [{ key: 'hedef' }, { key: 'min' }, { key: 'max' }, { key: 'olculen' }, { key: 'qcKarar' }];

  getItemValue(item: Item) {
    return _.get(this.qc, item.key);
  }

  setItemValue(item: Item, event: KeyboardEvent) {
    const path: string[] = item.key.split('.');
    _.get(this.qc, _.initial(path))[_.last(path)] = (event.target as HTMLInputElement).value;
  }

  getRowItem(row: Item, item: Item): Item {
    return { ...item, editable: row.editables && row.editables.includes(item.key), key: `${row.key}.${item.key}` };
  }
}

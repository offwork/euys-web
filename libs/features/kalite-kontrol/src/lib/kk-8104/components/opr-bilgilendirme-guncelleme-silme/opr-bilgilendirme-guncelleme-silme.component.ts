/* eslint-disable prefer-const */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { KkOperatorBilgilendirme } from '@euys/api-interfaces';
import { SortEvent } from 'primeng/api';
import { Kk8104Facade } from '../../+state/kk-8104.facade';

@Component({
  selector: 'euys-opr-bilgilendirme-guncelleme-silme',
  templateUrl: './opr-bilgilendirme-guncelleme-silme.component.html',
  styleUrls: ['./opr-bilgilendirme-guncelleme-silme.component.scss'],
})
export class OprBilgilendirmeGuncellemeSilmeComponent implements OnInit {
  @Input()
  oprBilgilendirmeList: KkOperatorBilgilendirme[];

  oprBilgilendirmeDataLoaded: boolean;
  selectedOprBilgilendirme?: KkOperatorBilgilendirme;

  @Output()
  selection = new EventEmitter<KkOperatorBilgilendirme>();

  constructor(public facade: Kk8104Facade) {}

  ngOnInit(): void {
    console.log('opr-bilgilendirme-guncelleme-silme Inıt ************');
  }
  onSubmit(selectedOprBilgilendirme: KkOperatorBilgilendirme) {
    this.facade.getOprBilgilendirmeData(selectedOprBilgilendirme.id);
    this.facade.getOprBilgiGorselList(selectedOprBilgilendirme.id);
  }
  onDelete(selectedOprBilgilendirme: KkOperatorBilgilendirme) {
    this.facade.deleteOprBilgilendirme(
      selectedOprBilgilendirme.id,
      selectedOprBilgilendirme.etag
    );
  }

  onSelectionChange(): void {
    this.selection.emit(this.selectedOprBilgilendirme);
  }

  customSort(event: SortEvent) {
    event.data.sort((data1, data2) => {
      console.log("SortEvent'e girdi! ");
      let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;
      console.log(value1);
      console.log(value2);
      console.log(result);

      if (value1 == null && value2 != null) result = -1;
      else if (value1 != null && value2 == null) result = 1;
      else if (value1 == null && value2 == null) result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string')
        result = value1.localeCompare(value2);
      else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

      return event.order * result;
    });
  }
}

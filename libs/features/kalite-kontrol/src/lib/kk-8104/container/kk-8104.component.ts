import { Component, OnInit } from '@angular/core';
import { KkOperatorBilgiGörseller } from '@euys/api-interfaces';
import { map } from 'rxjs/operators';
import { Kk8104Facade } from '../+state/kk-8104.facade';
import { GenericGorselUploadEvent } from '../../shared/ana-veri/interfaces/generic-gorsel-upload-event';
import { OperatorGorselRemoveEvent } from '../../shared/ana-veri/interfaces/operator-gorsel-remove-event';

@Component({
  selector: 'euys-kk8104',
  templateUrl: './kk-8104.component.html',
})
export class Kk8104Component implements OnInit {
  oprBilgilendirmeList$ = this.facade.oprBilgilendirmeList$.pipe(
    map(list => [...list])
  );
  oprBilgilendirmeListLoaded$ = this.facade.oprBilgilendirmeListLoaded$;
  oprBilgilendirmeData$ = this.facade.oprBilgilendirmeData$;
  oprBilgilendirmeDataLoaded$ = this.facade.oprBilgilendirmeDataLoaded$;
  oprGorselList$ = this.facade.oprBilgiGorselList$;
  oprGorselListLoaded$ = this.facade.oprBilgiGorselListLoaded$;
  constructor(public facade: Kk8104Facade) {}

  ngOnInit(): void {
    this.facade.init();
  }

  onResetGorselList() {
    this.facade.resetOprBilgiGorselList();
  }

  onLoadGorselList(event: KkOperatorBilgiGörseller) {
    this.facade.getOprBilgiGorselList(event.idOperatorBilgilendirme);
  }

  onAddKatalogGorsel(event: GenericGorselUploadEvent) {
    this.facade.addGorsel(event.data, event.id);
  }

  onRemoveKatalogGorsel(event: OperatorGorselRemoveEvent) {
    this.facade.removeGorsel(event.data);
  }
}

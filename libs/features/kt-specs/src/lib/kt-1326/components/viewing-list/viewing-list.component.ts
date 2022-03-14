import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  Urun,
  KtAktifTaslakList,
  KtSpEnineKalinlikVeIkiKenarFarklariSpec,
} from '@euys/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'euys-viewing-list',
  templateUrl: './viewing-list.component.html',
  styleUrls: [],
})
export class ViewingListComponent implements OnInit {
  @Input() data: KtSpEnineKalinlikVeIkiKenarFarklariSpec[];
  @Input() loaded$: Observable<boolean>;
  @Input() visionParams: string[] = [];
  @Output() rowSelect =
    new EventEmitter<KtSpEnineKalinlikVeIkiKenarFarklariSpec>();
  @Output() rowUnselect =
    new EventEmitter<KtSpEnineKalinlikVeIkiKenarFarklariSpec>();
  selected: KtSpEnineKalinlikVeIkiKenarFarklariSpec;
  urunListesiVisible = false;
  celikListesiVisible = false;
  selectedUrunList: Urun[] = [];
  selectedCelikList: string[] = [];
  dataList: KtSpEnineKalinlikVeIkiKenarFarklariSpec[] = [];

  durumList = KtAktifTaslakList;

  ngOnInit() {
    this.dataList = [...this.data];
  }

  onRowSelect(selected: KtSpEnineKalinlikVeIkiKenarFarklariSpec) {
    this.selected = selected;
    this.rowSelect.emit(selected);
  }

  onRowUnselect(selected: KtSpEnineKalinlikVeIkiKenarFarklariSpec) {
    this.selected = null;
    this.rowUnselect.emit(selected);
  }

  expandColumnDataHandlerUrun(
    ktSpEnineKalinlikVeIkiKenarFarklariSpec: KtSpEnineKalinlikVeIkiKenarFarklariSpec
  ) {
    this.urunListesiVisible = true;
    this.selectedUrunList =
      ktSpEnineKalinlikVeIkiKenarFarklariSpec.ktOIUrunList;
  }

  expandColumnDataHandlerCelik(
    ktSpEnineKalinlikVeIkiKenarFarklariSpec: KtSpEnineKalinlikVeIkiKenarFarklariSpec
  ) {
    this.celikListesiVisible = true;
    this.selectedCelikList =
      ktSpEnineKalinlikVeIkiKenarFarklariSpec.celikKaliteleri;
  }
}

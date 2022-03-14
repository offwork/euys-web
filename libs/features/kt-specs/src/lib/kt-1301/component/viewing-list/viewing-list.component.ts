import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  KtAktifTaslakList,
  KtSp1SckHadIkmalSicaklik,
  Urun,
} from '@euys/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'euys-viewing-list',
  templateUrl: './viewing-list.component.html',
})
export class ViewingListComponent implements OnInit {
  @Input() data: KtSp1SckHadIkmalSicaklik[];
  @Input() loaded$: Observable<boolean>;
  @Output() rowSelect = new EventEmitter<KtSp1SckHadIkmalSicaklik>();
  @Output() rowUnselect = new EventEmitter<KtSp1SckHadIkmalSicaklik>();
  selected: KtSp1SckHadIkmalSicaklik;
  urunListesiVisible = false;
  celikListesiVisible = false;
  selectedUrunList: Urun[] = [];
  selectedCelikList: string[] = [];
  dataList: KtSp1SckHadIkmalSicaklik[] = [];

  durumList = KtAktifTaslakList;

  @Input() visionParams: string[] = [];

  ngOnInit(): void {
    this.dataList = [...this.data];
  }

  onRowSelect(selected: KtSp1SckHadIkmalSicaklik) {
    this.selected = selected;
    this.rowSelect.emit(selected);
  }

  onRowUnselect(selected: KtSp1SckHadIkmalSicaklik) {
    this.selected = null;
    this.rowUnselect.emit(selected);
  }

  expandColumnDataHandlerUrun(
    ktSp1SckHadIkmalSicaklik: KtSp1SckHadIkmalSicaklik
  ) {
    this.urunListesiVisible = true;
    this.selectedUrunList = ktSp1SckHadIkmalSicaklik.ktOIUrunList;
  }

  expandColumnDataHandlerCelik(
    ktSp1SckHadIkmalSicaklik: KtSp1SckHadIkmalSicaklik
  ) {
    this.celikListesiVisible = true;
    this.selectedCelikList = ktSp1SckHadIkmalSicaklik.celikKaliteleri;
  }
}

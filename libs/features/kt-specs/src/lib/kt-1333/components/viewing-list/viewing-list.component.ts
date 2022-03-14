import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  KtSpIiTenekeKalayKaplama,
  Urun,
  KtAktifTaslakList,
} from '@euys/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'euys-viewing-list',
  templateUrl: './viewing-list.component.html',
  styleUrls: [],
})
export class ViewingListComponent implements OnInit {
  @Input() data: KtSpIiTenekeKalayKaplama[];
  @Input() loaded$: Observable<boolean>;
  @Input() visionParams: string[] = [];
  @Output() rowSelect = new EventEmitter<KtSpIiTenekeKalayKaplama>();
  @Output() rowUnselect = new EventEmitter<KtSpIiTenekeKalayKaplama>();
  selected: KtSpIiTenekeKalayKaplama;
  urunListesiVisible = false;
  celikListesiVisible = false;
  selectedUrunList: Urun[] = [];
  selectedCelikList: string[] = [];
  dataList: KtSpIiTenekeKalayKaplama[] = [];

  durumList = KtAktifTaslakList;

  ngOnInit() {
    this.dataList = [...this.data];
  }

  onRowSelect(selected: KtSpIiTenekeKalayKaplama) {
    this.selected = selected;
    this.rowSelect.emit(selected);
  }

  onRowUnselect(selected: KtSpIiTenekeKalayKaplama) {
    this.selected = null;
    this.rowUnselect.emit(selected);
  }

  expandColumnDataHandlerUrun(
    ktSpIiTenekeKalayKaplama: KtSpIiTenekeKalayKaplama
  ) {
    this.urunListesiVisible = true;
    this.selectedUrunList = ktSpIiTenekeKalayKaplama.ktOIUrunList;
  }

  expandColumnDataHandlerCelik(
    ktSpIiTenekeKalayKaplama: KtSpIiTenekeKalayKaplama
  ) {
    this.celikListesiVisible = true;
    this.selectedCelikList = ktSpIiTenekeKalayKaplama.celikKaliteleri;
  }
}

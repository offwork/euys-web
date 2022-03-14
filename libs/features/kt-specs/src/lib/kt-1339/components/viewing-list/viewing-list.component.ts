import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  KtSpKromKaplamaTfsCro3,
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
  @Input() data: KtSpKromKaplamaTfsCro3[];
  @Input() loaded$: Observable<boolean>;
  @Input() visionParams: string[] = [];
  @Output() rowSelect = new EventEmitter<KtSpKromKaplamaTfsCro3>();
  @Output() rowUnselect = new EventEmitter<KtSpKromKaplamaTfsCro3>();
  selected: KtSpKromKaplamaTfsCro3;
  urunListesiVisible = false;
  celikListesiVisible = false;
  selectedUrunList: Urun[] = [];
  selectedCelikList: string[] = [];
  dataList: KtSpKromKaplamaTfsCro3[] = [];

  durumList = KtAktifTaslakList;

  ngOnInit() {
    this.dataList = [...this.data];
  }

  onRowSelect(selected: KtSpKromKaplamaTfsCro3) {
    this.selected = selected;
    this.rowSelect.emit(selected);
  }

  onRowUnselect(selected: KtSpKromKaplamaTfsCro3) {
    this.selected = null;
    this.rowUnselect.emit(selected);
  }

  expandColumnDataHandlerUrun(ktSpKromKaplamaTfsCro3: KtSpKromKaplamaTfsCro3) {
    this.urunListesiVisible = true;
    this.selectedUrunList = ktSpKromKaplamaTfsCro3.ktOIUrunList;
  }

  expandColumnDataHandlerCelik(ktSpKromKaplamaTfsCro3: KtSpKromKaplamaTfsCro3) {
    this.celikListesiVisible = true;
    this.selectedCelikList = ktSpKromKaplamaTfsCro3.celikKaliteleri;
  }
}

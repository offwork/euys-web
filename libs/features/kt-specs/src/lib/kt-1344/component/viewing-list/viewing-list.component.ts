import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { KtAktifTaslakList, KtSpMarkalama } from '@euys/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'euys-viewing-list',
  templateUrl: './viewing-list.component.html',
})
export class ViewingListComponent implements OnInit {
  @Input() data: KtSpMarkalama[];
  @Input() loaded$: Observable<boolean>;
  @Output() rowSelect = new EventEmitter<KtSpMarkalama>();
  @Output() rowUnselect = new EventEmitter<KtSpMarkalama>();
  selected: KtSpMarkalama;
  dataList: KtSpMarkalama[] = [];
  durumList = KtAktifTaslakList;

  ngOnInit() {
    this.dataList = [...this.data];
  }

  onRowSelect(selected: KtSpMarkalama) {
    this.selected = selected;
    this.rowSelect.emit(selected);
  }

  onRowUnselect(selected: KtSpMarkalama) {
    this.selected = null;
    this.rowUnselect.emit(selected);
  }
}

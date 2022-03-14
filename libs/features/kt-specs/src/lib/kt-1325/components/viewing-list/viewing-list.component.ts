import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  KtSpDualFazliKaliteSckHaddeSpec,
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
  @Input() data: KtSpDualFazliKaliteSckHaddeSpec[];
  @Input() loaded$: Observable<boolean>;
  @Input() visionParams: string[] = [];
  @Output() rowSelect = new EventEmitter<KtSpDualFazliKaliteSckHaddeSpec>();
  @Output() rowUnselect = new EventEmitter<KtSpDualFazliKaliteSckHaddeSpec>();
  selected: KtSpDualFazliKaliteSckHaddeSpec;
  urunListesiVisible = false;
  celikListesiVisible = false;
  selectedUrunList: Urun[] = [];
  selectedCelikList: string[] = [];
  dataList: KtSpDualFazliKaliteSckHaddeSpec[] = [];

  durumList = KtAktifTaslakList;

  ngOnInit() {
    this.dataList = [...this.data];
  }

  onRowSelect(selected: KtSpDualFazliKaliteSckHaddeSpec) {
    this.selected = selected;
    this.rowSelect.emit(selected);
  }

  onRowUnselect(selected: KtSpDualFazliKaliteSckHaddeSpec) {
    this.selected = null;
    this.rowUnselect.emit(selected);
  }

  expandColumnDataHandlerUrun(
    ktSpDualFazliKaliteSckHaddeSpec: KtSpDualFazliKaliteSckHaddeSpec
  ) {
    this.urunListesiVisible = true;
    this.selectedUrunList = ktSpDualFazliKaliteSckHaddeSpec.ktOIUrunList;
  }

  expandColumnDataHandlerCelik(
    ktSpDualFazliKaliteSckHaddeSpec: KtSpDualFazliKaliteSckHaddeSpec
  ) {
    this.celikListesiVisible = true;
    this.selectedCelikList = ktSpDualFazliKaliteSckHaddeSpec.celikKaliteleri;
  }
}

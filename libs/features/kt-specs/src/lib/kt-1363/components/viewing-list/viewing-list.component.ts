import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { KtAktifTaslakList, KtSpAsitlemeTlv, Urun } from '@euys/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'euys-viewing-list',
  templateUrl: './viewing-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewingListComponent implements OnInit {
  @Input() data: KtSpAsitlemeTlv[];
  @Input() loaded$: Observable<boolean>;
  @Output() rowSelect = new EventEmitter<KtSpAsitlemeTlv>();
  @Output() rowUnselect = new EventEmitter<KtSpAsitlemeTlv>();
  selected: KtSpAsitlemeTlv;
  urunListesiVisible = false;
  celikListesiVisible = false;
  selectedUrunList: Urun[] = [];
  selectedCelikList: string[] = [];
  dataList: KtSpAsitlemeTlv[] = [];

  durumList = KtAktifTaslakList;

  @Input() visionParams: string[] = [];

  ngOnInit() {
    this.dataList = [...this.data];
  }

  onRowSelect(selected: KtSpAsitlemeTlv) {
    this.selected = selected;
    this.rowSelect.emit(selected);
  }

  onRowUnselect(selected: KtSpAsitlemeTlv) {
    this.selected = null;
    this.rowUnselect.emit(selected);
  }

  expandColumnDataHandlerUrun(ktSpAsitlemeTlv: KtSpAsitlemeTlv) {
    this.urunListesiVisible = true;
    this.selectedUrunList = ktSpAsitlemeTlv.ktOIUrunList;
  }

  expandColumnDataHandlerCelik(ktSpAsitlemeTlv: KtSpAsitlemeTlv) {
    this.celikListesiVisible = true;
    this.selectedCelikList = ktSpAsitlemeTlv.celikKaliteleri;
  }
}

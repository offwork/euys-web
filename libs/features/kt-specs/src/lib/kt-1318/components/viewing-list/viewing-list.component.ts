import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  KtAktifTaslakList,
  KtSpCgl12HavaSogutmaAjc,
  Urun,
} from '@euys/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'euys-viewing-list',
  templateUrl: './viewing-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewingListComponent implements OnInit {
  @Input() data: KtSpCgl12HavaSogutmaAjc[];
  @Input() loaded$: Observable<boolean>;
  @Output() rowSelect = new EventEmitter<KtSpCgl12HavaSogutmaAjc>();
  @Output() rowUnselect = new EventEmitter<KtSpCgl12HavaSogutmaAjc>();
  selected: KtSpCgl12HavaSogutmaAjc;
  urunListesiVisible = false;
  celikListesiVisible = false;
  selectedUrunList: Urun[] = [];
  selectedCelikList: string[] = [];
  dataList: KtSpCgl12HavaSogutmaAjc[] = [];

  durumList = KtAktifTaslakList;

  @Input() visionParams: string[] = [];

  ngOnInit(): void {
    this.dataList = [...this.data];
  }

  onRowSelect(selected: KtSpCgl12HavaSogutmaAjc) {
    this.selected = selected;
    this.rowSelect.emit(selected);
  }

  onRowUnselect(selected: KtSpCgl12HavaSogutmaAjc) {
    this.selected = null;
    this.rowUnselect.emit(selected);
  }

  expandColumnDataHandlerUrun(
    ktSpCgl12HavaSogutmaAjc: KtSpCgl12HavaSogutmaAjc
  ) {
    this.urunListesiVisible = true;
    this.selectedUrunList = ktSpCgl12HavaSogutmaAjc.ktOIUrunList;
  }

  expandColumnDataHandlerCelik(
    ktSpCgl12HavaSogutmaAjc: KtSpCgl12HavaSogutmaAjc
  ) {
    this.celikListesiVisible = true;
    this.selectedCelikList = ktSpCgl12HavaSogutmaAjc.celikKaliteleri;
  }
}

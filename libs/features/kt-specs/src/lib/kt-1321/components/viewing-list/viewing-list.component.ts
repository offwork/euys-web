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
  KtSpCgl12Temizleme,
  Urun,
} from '@euys/api-interfaces';
import { Observable, Subject } from 'rxjs';
import { Kt1321Facade } from '../../+state/kt-1321.facade';

@Component({
  selector: 'euys-viewing-list',
  templateUrl: './viewing-list.component.html',
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewingListComponent implements OnInit {
  @Input() data: KtSpCgl12Temizleme[];
  @Input() loaded$: Observable<boolean>;
  @Input() visionParams: string[] = [];
  @Output() rowSelect = new EventEmitter<KtSpCgl12Temizleme>();
  @Output() rowUnselect = new EventEmitter<KtSpCgl12Temizleme>();
  selected: KtSpCgl12Temizleme;
  urunListesiVisible = false;
  celikListesiVisible = false;
  selectedUrunList: Urun[] = [];
  selectedCelikList: string[] = [];
  dataList: KtSpCgl12Temizleme[] = [];

  durumList = KtAktifTaslakList;

  _endSubscription = new Subject<boolean>();

  constructor(public facade: Kt1321Facade) {}

  ngOnInit() {
    this.dataList = [...this.data];
  }

  onRowSelect(selected: KtSpCgl12Temizleme) {
    this.selected = selected;
    this.rowSelect.emit(selected);
  }

  onRowUnselect(selected: KtSpCgl12Temizleme) {
    this.selected = null;
    this.rowUnselect.emit(selected);
  }

  expandColumnDataHandlerUrun(ktSpCgl12Temizleme: KtSpCgl12Temizleme) {
    this.urunListesiVisible = true;
    this.selectedUrunList = ktSpCgl12Temizleme.ktOIUrunList;
  }

  expandColumnDataHandlerCelik(ktSpCgl12Temizleme: KtSpCgl12Temizleme) {
    this.celikListesiVisible = true;
    this.selectedCelikList = ktSpCgl12Temizleme.celikKaliteleri;
  }
}

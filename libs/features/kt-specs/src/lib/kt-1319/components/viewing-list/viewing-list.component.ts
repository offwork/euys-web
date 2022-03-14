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
  KtSpCgl12Tavlama1,
  Urun,
} from '@euys/api-interfaces';
import { Observable, Subject } from 'rxjs';
import { Kt1319Facade } from '../../+state/kt-1319.facade';

@Component({
  selector: 'euys-viewing-list',
  templateUrl: './viewing-list.component.html',
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewingListComponent implements OnInit {
  @Input() data: KtSpCgl12Tavlama1[];
  @Input() loaded$: Observable<boolean>;
  @Input() visionParams: string[] = [];
  @Output() rowSelect = new EventEmitter<KtSpCgl12Tavlama1>();
  @Output() rowUnselect = new EventEmitter<KtSpCgl12Tavlama1>();
  selected: KtSpCgl12Tavlama1;
  urunListesiVisible = false;
  celikListesiVisible = false;
  selectedUrunList: Urun[] = [];
  selectedCelikList: string[] = [];
  dataList: KtSpCgl12Tavlama1[] = [];

  durumList = KtAktifTaslakList;

  _endSubscription = new Subject<boolean>();

  constructor(public facade: Kt1319Facade) {}
  ngOnInit(): void {
    this.dataList = [...this.data];
  }

  onRowSelect(selected: KtSpCgl12Tavlama1) {
    this.selected = selected;
    this.rowSelect.emit(selected);
  }

  onRowUnselect(selected: KtSpCgl12Tavlama1) {
    this.selected = null;
    this.rowUnselect.emit(selected);
  }

  expandColumnDataHandlerUrun(ktSpCgl12Tavlama1: KtSpCgl12Tavlama1) {
    this.urunListesiVisible = true;
    this.selectedUrunList = ktSpCgl12Tavlama1.ktOIUrunList;
  }

  expandColumnDataHandlerCelik(ktSpCgl12Tavlama1: KtSpCgl12Tavlama1) {
    this.celikListesiVisible = true;
    this.selectedCelikList = ktSpCgl12Tavlama1.celikKaliteleri;
  }
}

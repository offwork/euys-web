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
  KtSpCgl12Tavlama2,
  Urun,
} from '@euys/api-interfaces';
import { Observable, Subject } from 'rxjs';
import { Kt1320Facade } from '../../+state/kt-1320.facade';

@Component({
  selector: 'euys-viewing-list',
  templateUrl: './viewing-list.component.html',
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewingListComponent implements OnInit {
  @Input() data: KtSpCgl12Tavlama2[];
  @Input() loaded$: Observable<boolean>;
  @Input() visionParams: string[] = [];
  @Output() rowSelect = new EventEmitter<KtSpCgl12Tavlama2>();
  @Output() rowUnselect = new EventEmitter<KtSpCgl12Tavlama2>();
  selected: KtSpCgl12Tavlama2;
  urunListesiVisible = false;
  celikListesiVisible = false;
  selectedUrunList: Urun[] = [];
  selectedCelikList: string[] = [];
  dataList: KtSpCgl12Tavlama2[] = [];

  durumList = KtAktifTaslakList;

  _endSubscription = new Subject<boolean>();

  constructor(public facade: Kt1320Facade) {}
  ngOnInit(): void {
    this.dataList = [...this.data];
  }

  onRowSelect(selected: KtSpCgl12Tavlama2) {
    this.selected = selected;
    this.rowSelect.emit(selected);
  }

  onRowUnselect(selected: KtSpCgl12Tavlama2) {
    this.selected = null;
    this.rowUnselect.emit(selected);
  }

  expandColumnDataHandlerUrun(ktSpCgl12Tavlama2: KtSpCgl12Tavlama2) {
    this.urunListesiVisible = true;
    this.selectedUrunList = ktSpCgl12Tavlama2.ktOIUrunList;
  }

  expandColumnDataHandlerCelik(ktSpCgl12Tavlama2: KtSpCgl12Tavlama2) {
    this.celikListesiVisible = true;
    this.selectedCelikList = ktSpCgl12Tavlama2.celikKaliteleri;
  }
}

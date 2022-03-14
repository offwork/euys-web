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
  KtSpKromKaplamaTfsFlor,
  Urun,
} from '@euys/api-interfaces';
import { Observable, Subject } from 'rxjs';
import { Kt1341Facade } from '../../+state/kt-1341.facade';

@Component({
  selector: 'euys-viewing-list',
  templateUrl: './viewing-list.component.html',
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewingListComponent implements OnInit {
  @Input() data: KtSpKromKaplamaTfsFlor[];
  @Input() loaded$: Observable<boolean>;
  @Input() visionParams: string[] = [];
  @Output() rowSelect = new EventEmitter<KtSpKromKaplamaTfsFlor>();
  @Output() rowUnselect = new EventEmitter<KtSpKromKaplamaTfsFlor>();
  selected: KtSpKromKaplamaTfsFlor;
  urunListesiVisible = false;
  celikListesiVisible = false;
  selectedUrunList: Urun[] = [];
  selectedCelikList: string[] = [];
  dataList: KtSpKromKaplamaTfsFlor[] = [];

  durumList = KtAktifTaslakList;

  _endSubscription = new Subject<boolean>();

  constructor(public facade: Kt1341Facade) {}
  ngOnInit(): void {
    this.dataList = [...this.data];
  }

  onRowSelect(selected: KtSpKromKaplamaTfsFlor) {
    this.selected = selected;
    this.rowSelect.emit(selected);
  }

  onRowUnselect(selected: KtSpKromKaplamaTfsFlor) {
    this.selected = null;
    this.rowUnselect.emit(selected);
  }

  expandColumnDataHandlerUrun(
    ktSpKromKaplamaTfsFlor: KtSpKromKaplamaTfsFlor
  ) {
    this.urunListesiVisible = true;
    this.selectedUrunList = ktSpKromKaplamaTfsFlor.ktOIUrunList;
  }

  expandColumnDataHandlerCelik(
    ktSpKromKaplamaTfsFlor: KtSpKromKaplamaTfsFlor
  ) {
    this.celikListesiVisible = true;
    this.selectedCelikList = ktSpKromKaplamaTfsFlor.celikKaliteleri;
  }
}

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
  KtSpKromKaplamaTfsDragout,
  Urun,
} from '@euys/api-interfaces';
import { Observable, Subject } from 'rxjs';
import { Kt1340Facade } from '../../+state/kt-1340.facade';

@Component({
  selector: 'euys-viewing-list',
  templateUrl: './viewing-list.component.html',
  styleUrls: ['./viewing-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewingListComponent implements OnInit {
  @Input() data: KtSpKromKaplamaTfsDragout[];
  @Input() loaded$: Observable<boolean>;
  @Input() visionParams: string[] = [];
  @Output() rowSelect = new EventEmitter<KtSpKromKaplamaTfsDragout>();
  @Output() rowUnselect = new EventEmitter<KtSpKromKaplamaTfsDragout>();
  selected: KtSpKromKaplamaTfsDragout;
  urunListesiVisible = false;
  celikListesiVisible = false;
  selectedUrunList: Urun[] = [];
  selectedCelikList: string[] = [];
  dataList: KtSpKromKaplamaTfsDragout[] = [];

  durumList = KtAktifTaslakList;

  _endSubscription = new Subject<boolean>();

  constructor(public facade: Kt1340Facade) {}
  ngOnInit(): void {
    this.dataList = [...this.data];
  }

  onRowSelect(selected: KtSpKromKaplamaTfsDragout) {
    this.selected = selected;
    this.rowSelect.emit(selected);
  }

  onRowUnselect(selected: KtSpKromKaplamaTfsDragout) {
    this.selected = null;
    this.rowUnselect.emit(selected);
  }

  expandColumnDataHandlerUrun(
    ktSpKromKaplamaTfsDragout: KtSpKromKaplamaTfsDragout
  ) {
    this.urunListesiVisible = true;
    this.selectedUrunList = ktSpKromKaplamaTfsDragout.ktOIUrunList;
  }

  expandColumnDataHandlerCelik(
    ktSpKromKaplamaTfsDragout: KtSpKromKaplamaTfsDragout
  ) {
    this.celikListesiVisible = true;
    this.selectedCelikList = ktSpKromKaplamaTfsDragout.celikKaliteleri;
  }
}

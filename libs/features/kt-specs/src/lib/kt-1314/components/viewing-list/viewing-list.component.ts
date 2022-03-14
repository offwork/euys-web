import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { KtAktifTaslakList, KtSpBobinDilUcu, Urun } from '@euys/api-interfaces';
import { Observable, Subject } from 'rxjs';
import { Kt1314Facade } from '../../+state/kt-1314.facade';

@Component({
  selector: 'euys-viewing-list',
  templateUrl: './viewing-list.component.html',
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewingListComponent implements OnInit {
  @Input() data: KtSpBobinDilUcu[];
  @Input() loaded$: Observable<boolean>;
  @Input() visionParams: string[] = [];
  @Output() rowSelect = new EventEmitter<KtSpBobinDilUcu>();
  @Output() rowUnselect = new EventEmitter<KtSpBobinDilUcu>();
  selected: KtSpBobinDilUcu;
  urunListesiVisible = false;
  celikListesiVisible = false;
  selectedUrunList: Urun[] = [];
  selectedCelikList: string[] = [];
  dataList: KtSpBobinDilUcu[] = [];

  durumList = KtAktifTaslakList;

  _endSubscription = new Subject<boolean>();

  constructor(public facade: Kt1314Facade) {}
  ngOnInit(): void {
    this.dataList = [...this.data];
  }

  onRowSelect(selected: KtSpBobinDilUcu) {
    this.selected = selected;
    this.rowSelect.emit(selected);
  }

  onRowUnselect(selected: KtSpBobinDilUcu) {
    this.selected = null;
    this.rowUnselect.emit(selected);
  }

  expandColumnDataHandlerUrun(ktSpBobinDilUcu: KtSpBobinDilUcu) {
    this.urunListesiVisible = true;
    this.selectedUrunList = ktSpBobinDilUcu.ktOIUrunList;
  }

  expandColumnDataHandlerCelik(ktSpBobinDilUcu: KtSpBobinDilUcu) {
    this.celikListesiVisible = true;
    this.selectedCelikList = ktSpBobinDilUcu.celikKaliteleri;
  }
}

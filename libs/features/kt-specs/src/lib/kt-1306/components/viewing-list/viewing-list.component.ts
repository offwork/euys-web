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
  KtSpAlkaliTemizleme,
  Urun,
} from '@euys/api-interfaces';
import { Observable, Subject } from 'rxjs';
import { Kt1306Facade } from '../../+state/kt-1306.facade';

@Component({
  selector: 'euys-viewing-list',
  templateUrl: './viewing-list.component.html',
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewingListComponent implements OnInit {
  @Input() data: KtSpAlkaliTemizleme[];
  @Input() loaded$: Observable<boolean>;
  @Input() visionParams: string[] = [];
  @Output() rowSelect = new EventEmitter<KtSpAlkaliTemizleme>();
  @Output() rowUnselect = new EventEmitter<KtSpAlkaliTemizleme>();
  selected: KtSpAlkaliTemizleme;
  urunListesiVisible = false;
  celikListesiVisible = false;
  selectedUrunList: Urun[] = [];
  selectedCelikList: string[] = [];
  dataList: KtSpAlkaliTemizleme[] = [];

  durumList = KtAktifTaslakList;

  _endSubscription = new Subject<boolean>();

  constructor(public facade: Kt1306Facade) {}

  ngOnInit() {
    this.dataList = [...this.data];
  }

  onRowSelect(selected: KtSpAlkaliTemizleme) {
    this.selected = selected;
    this.rowSelect.emit(selected);
  }

  onRowUnselect(selected: KtSpAlkaliTemizleme) {
    this.selected = null;
    this.rowUnselect.emit(selected);
  }

  expandColumnDataHandlerUrun(ktSpAlkaliTemizleme: KtSpAlkaliTemizleme) {
    this.urunListesiVisible = true;
    this.selectedUrunList = ktSpAlkaliTemizleme.ktOIUrunList;
  }

  expandColumnDataHandlerCelik(ktSpAlkaliTemizleme: KtSpAlkaliTemizleme) {
    this.celikListesiVisible = true;
    this.selectedCelikList = ktSpAlkaliTemizleme.celikKaliteleri;
  }
}

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
  KtSpIiTenekeAsitleme,
  Urun,
} from '@euys/api-interfaces';
import { Observable, Subject } from 'rxjs';
import { Kt1330Facade } from '../../+state/kt-1330.facade';

@Component({
  selector: 'euys-viewing-list',
  templateUrl: './viewing-list.component.html',
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewingListComponent implements OnInit {
  @Input() data: KtSpIiTenekeAsitleme[];
  @Input() loaded$: Observable<boolean>;
  @Input() visionParams: string[] = [];
  @Output() rowSelect = new EventEmitter<KtSpIiTenekeAsitleme>();
  @Output() rowUnselect = new EventEmitter<KtSpIiTenekeAsitleme>();
  selected: KtSpIiTenekeAsitleme;
  urunListesiVisible = false;
  celikListesiVisible = false;
  selectedUrunList: Urun[] = [];
  selectedCelikList: string[] = [];
  dataList: KtSpIiTenekeAsitleme[] = [];

  durumList = KtAktifTaslakList;

  _endSubscription = new Subject<boolean>();

  constructor(public facade: Kt1330Facade) {}
  ngOnInit(): void {
    this.dataList = [...this.data];
  }

  onRowSelect(selected: KtSpIiTenekeAsitleme) {
    this.selected = selected;
    this.rowSelect.emit(selected);
  }

  onRowUnselect(selected: KtSpIiTenekeAsitleme) {
    this.selected = null;
    this.rowUnselect.emit(selected);
  }

  expandColumnDataHandlerUrun(
    ktSpIiTenekeAsitleme: KtSpIiTenekeAsitleme
  ) {
    this.urunListesiVisible = true;
    this.selectedUrunList = ktSpIiTenekeAsitleme.ktOIUrunList;
  }

  expandColumnDataHandlerCelik(
    ktSpIiTenekeAsitleme: KtSpIiTenekeAsitleme
  ) {
    this.celikListesiVisible = true;
    this.selectedCelikList = ktSpIiTenekeAsitleme.celikKaliteleri;
  }
}

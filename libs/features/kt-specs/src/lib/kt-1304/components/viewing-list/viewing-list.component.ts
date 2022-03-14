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
  KtSp2SckHadSarilmaSicakl,
  Urun,
} from '@euys/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'euys-viewing-list',
  templateUrl: './viewing-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewingListComponent implements OnInit {
  @Input() data: KtSp2SckHadSarilmaSicakl[];
  @Input() loaded$: Observable<boolean>;
  @Output() rowSelect = new EventEmitter<KtSp2SckHadSarilmaSicakl>();
  @Output() rowUnselect = new EventEmitter<KtSp2SckHadSarilmaSicakl>();
  selected: KtSp2SckHadSarilmaSicakl;
  urunListesiVisible = false;
  celikListesiVisible = false;
  selectedUrunList: Urun[] = [];
  selectedCelikList: string[] = [];
  dataList: KtSp2SckHadSarilmaSicakl[] = [];

  durumList = KtAktifTaslakList;

  @Input() visionParams: string[] = [];

  ngOnInit(): void {
    this.dataList = [...this.data];
  }

  onRowSelect(selected: KtSp2SckHadSarilmaSicakl) {
    this.selected = selected;
    this.rowSelect.emit(selected);
  }

  onRowUnselect(selected: KtSp2SckHadSarilmaSicakl) {
    this.selected = null;
    this.rowUnselect.emit(selected);
  }

  expandColumnDataHandlerUrun(
    ktSp2SckHadSarilmaSicakl: KtSp2SckHadSarilmaSicakl
  ) {
    this.urunListesiVisible = true;
    this.selectedUrunList = ktSp2SckHadSarilmaSicakl.ktOIUrunList;
  }

  expandColumnDataHandlerCelik(
    ktSp2SckHadSarilmaSicakl: KtSp2SckHadSarilmaSicakl
  ) {
    this.celikListesiVisible = true;
    this.selectedCelikList = ktSp2SckHadSarilmaSicakl.celikKaliteleri;
  }
}

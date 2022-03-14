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
  KtSp1SckHadSarilmaSicakl,
  Urun,
} from '@euys/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'euys-viewing-list',
  templateUrl: './viewing-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewingListComponent implements OnInit {
  @Input() data: KtSp1SckHadSarilmaSicakl[];
  @Input() loaded$: Observable<boolean>;
  @Output() rowSelect = new EventEmitter<KtSp1SckHadSarilmaSicakl>();
  @Output() rowUnselect = new EventEmitter<KtSp1SckHadSarilmaSicakl>();
  selected: KtSp1SckHadSarilmaSicakl;
  urunListesiVisible = false;
  celikListesiVisible = false;
  selectedUrunList: Urun[] = [];
  selectedCelikList: string[] = [];
  dataList: KtSp1SckHadSarilmaSicakl[] = [];

  durumList = KtAktifTaslakList;

  @Input() visionParams: string[] = [];

  ngOnInit(): void {
    this.dataList = [...this.data];
  }

  onRowSelect(selected: KtSp1SckHadSarilmaSicakl) {
    this.selected = selected;
    this.rowSelect.emit(selected);
  }

  onRowUnselect(selected: KtSp1SckHadSarilmaSicakl) {
    this.selected = null;
    this.rowUnselect.emit(selected);
  }

  expandColumnDataHandlerUrun(
    ktSp1SckHadSarilmaSicakl: KtSp1SckHadSarilmaSicakl
  ) {
    this.urunListesiVisible = true;
    this.selectedUrunList = ktSp1SckHadSarilmaSicakl.ktOIUrunList;
  }

  expandColumnDataHandlerCelik(
    ktSp1SckHadSarilmaSicakl: KtSp1SckHadSarilmaSicakl
  ) {
    this.celikListesiVisible = true;
    this.selectedCelikList = ktSp1SckHadSarilmaSicakl.celikKaliteleri;
  }
}

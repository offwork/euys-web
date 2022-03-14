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
  KtSp2SckHadIkmalSicaklik,
  Urun,
} from '@euys/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'euys-viewing-list',
  templateUrl: './viewing-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewingListComponent implements OnInit {
  @Input() data: KtSp2SckHadIkmalSicaklik[];
  @Input() loaded$: Observable<boolean>;
  @Output() rowSelect = new EventEmitter<KtSp2SckHadIkmalSicaklik>();
  @Output() rowUnselect = new EventEmitter<KtSp2SckHadIkmalSicaklik>();
  selected: KtSp2SckHadIkmalSicaklik;
  urunListesiVisible = false;
  celikListesiVisible = false;
  selectedUrunList: Urun[] = [];
  selectedCelikList: string[] = [];
  dataList: KtSp2SckHadIkmalSicaklik[] = [];

  durumList = KtAktifTaslakList;

  @Input() visionParams: string[] = [];

  ngOnInit(): void {
    this.dataList = [...this.data];
  }

  onRowSelect(selected: KtSp2SckHadIkmalSicaklik) {
    this.selected = selected;
    this.rowSelect.emit(selected);
  }

  onRowUnselect(selected: KtSp2SckHadIkmalSicaklik) {
    this.selected = null;
    this.rowUnselect.emit(selected);
  }

  expandColumnDataHandlerUrun(
    ktSp2SckHadIkmalSicaklik: KtSp2SckHadIkmalSicaklik
  ) {
    this.urunListesiVisible = true;
    this.selectedUrunList = ktSp2SckHadIkmalSicaklik.ktOIUrunList;
  }

  expandColumnDataHandlerCelik(
    ktSp2SckHadIkmalSicaklik: KtSp2SckHadIkmalSicaklik
  ) {
    this.celikListesiVisible = true;
    this.selectedCelikList = ktSp2SckHadIkmalSicaklik.celikKaliteleri;
  }
}

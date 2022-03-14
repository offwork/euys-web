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
  KtSpBobHazTempYuzdeUzama,
  Urun,
} from '@euys/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'euys-viewing-list',
  templateUrl: './viewing-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewingListComponent implements OnInit {
  @Input() data: KtSpBobHazTempYuzdeUzama[];
  @Input() loaded$: Observable<boolean>;
  @Output() rowSelect = new EventEmitter<KtSpBobHazTempYuzdeUzama>();
  @Output() rowUnselect = new EventEmitter<KtSpBobHazTempYuzdeUzama>();
  selected: KtSpBobHazTempYuzdeUzama;
  urunListesiVisible = false;
  celikListesiVisible = false;
  selectedUrunList: Urun[] = [];
  selectedCelikList: string[] = [];
  dataList: KtSpBobHazTempYuzdeUzama[] = [];

  durumList = KtAktifTaslakList;

  @Input() visionParams: string[] = [];

  ngOnInit(): void {
    this.dataList = [...this.data];
  }

  onRowSelect(selected: KtSpBobHazTempYuzdeUzama) {
    this.selected = selected;
    this.rowSelect.emit(selected);
  }

  onRowUnselect(selected: KtSpBobHazTempYuzdeUzama) {
    this.selected = null;
    this.rowUnselect.emit(selected);
  }

  expandColumnDataHandlerUrun(
    ktSpBobHazTempYuzdeUzama: KtSpBobHazTempYuzdeUzama
  ) {
    this.urunListesiVisible = true;
    this.selectedUrunList = ktSpBobHazTempYuzdeUzama.ktOIUrunList;
  }

  expandColumnDataHandlerCelik(
    ktSpBobHazTempYuzdeUzama: KtSpBobHazTempYuzdeUzama
  ) {
    this.celikListesiVisible = true;
    this.selectedCelikList = ktSpBobHazTempYuzdeUzama.celikKaliteleri;
  }
}

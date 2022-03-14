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
  KtSpBafHattiTavlama,
  Urun,
} from '@euys/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'euys-viewing-list',
  templateUrl: './viewing-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewingListComponent implements OnInit {
  @Input() data: KtSpBafHattiTavlama[];
  @Input() loaded$: Observable<boolean>;
  @Input() visionParams: string[] = [];
  @Output() rowSelect = new EventEmitter<KtSpBafHattiTavlama>();
  @Output() rowUnselect = new EventEmitter<KtSpBafHattiTavlama>();
  selected: KtSpBafHattiTavlama;
  urunListesiVisible = false;
  celikListesiVisible = false;
  selectedUrunList: Urun[] = [];
  selectedCelikList: string[] = [];
  dataList: KtSpBafHattiTavlama[] = [];

  durumList = KtAktifTaslakList;

  ngOnInit(): void {
    this.dataList = [...this.data];
  }

  onRowSelect(selected: KtSpBafHattiTavlama) {
    this.selected = selected;
    this.rowSelect.emit(selected);
  }

  onRowUnselect(selected: KtSpBafHattiTavlama) {
    this.selected = null;
    this.rowUnselect.emit(selected);
  }

  expandColumnDataHandlerUrun(
    ktSpIiTenekeKalayKimyasal: KtSpBafHattiTavlama
  ) {
    this.urunListesiVisible = true;
    this.selectedUrunList = ktSpIiTenekeKalayKimyasal.ktOIUrunList;
  }

  expandColumnDataHandlerCelik(
    ktSpIiTenekeKalayKimyasal: KtSpBafHattiTavlama
  ) {
    this.celikListesiVisible = true;
    this.selectedCelikList = ktSpIiTenekeKalayKimyasal.celikKaliteleri;
  }
}

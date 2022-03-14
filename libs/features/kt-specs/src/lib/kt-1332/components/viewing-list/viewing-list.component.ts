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
  KtSpIiTenekeKalayKimyasal,
  Urun,
} from '@euys/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'euys-viewing-list',
  templateUrl: './viewing-list.component.html',
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewingListComponent implements OnInit {
  @Input() data: KtSpIiTenekeKalayKimyasal[];
  @Input() loaded$: Observable<boolean>;
  @Input() visionParams: string[] = [];
  @Output() rowSelect = new EventEmitter<KtSpIiTenekeKalayKimyasal>();
  @Output() rowUnselect = new EventEmitter<KtSpIiTenekeKalayKimyasal>();
  selected: KtSpIiTenekeKalayKimyasal;
  urunListesiVisible = false;
  celikListesiVisible = false;
  selectedUrunList: Urun[] = [];
  selectedCelikList: string[] = [];
  dataList: KtSpIiTenekeKalayKimyasal[] = [];
  durumList = KtAktifTaslakList;

  ngOnInit() {
    this.dataList = [...this.data];
  }

  onRowSelect(selected: KtSpIiTenekeKalayKimyasal) {
    this.selected = selected;
    this.rowSelect.emit(selected);
  }

  onRowUnselect(selected: KtSpIiTenekeKalayKimyasal) {
    this.selected = null;
    this.rowUnselect.emit(selected);
  }

  expandColumnDataHandlerUrun(
    ktSpIiTenekeKalayKimyasal: KtSpIiTenekeKalayKimyasal
  ) {
    this.urunListesiVisible = true;
    this.selectedUrunList = ktSpIiTenekeKalayKimyasal.ktOIUrunList;
  }

  expandColumnDataHandlerCelik(
    ktSpIiTenekeKalayKimyasal: KtSpIiTenekeKalayKimyasal
  ) {
    this.celikListesiVisible = true;
    this.selectedCelikList = ktSpIiTenekeKalayKimyasal.celikKaliteleri;
  }
}

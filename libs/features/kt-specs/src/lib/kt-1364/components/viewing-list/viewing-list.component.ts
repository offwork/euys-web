import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { KtAktifTaslakList, KtSpDurulama, Urun } from '@euys/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'euys-viewing-list',
  templateUrl: './viewing-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewingListComponent implements OnInit {
  @Input() data: KtSpDurulama[];
  @Input() loaded$: Observable<boolean>;
  @Input() visionParams: string[] = [];
  @Output() rowSelect = new EventEmitter<KtSpDurulama>();
  @Output() rowUnselect = new EventEmitter<KtSpDurulama>();

  selected: KtSpDurulama;
  urunListesiVisible = false;
  celikListesiVisible = false;
  selectedUrunList: Urun[] = [];
  selectedCelikList: string[] = [];
  dataList: KtSpDurulama[] = [];

  durumList = KtAktifTaslakList;

  ngOnInit() {
    this.dataList = [...this.data];
  }

  onRowSelect(selected: KtSpDurulama) {
    this.selected = selected;
    this.rowSelect.emit(selected);
  }

  onRowUnselect(selected: KtSpDurulama) {
    this.selected = null;
    this.rowUnselect.emit(selected);
  }

  expandColumnDataHandlerUrun(ktSpDurulama: KtSpDurulama) {
    this.urunListesiVisible = true;
    this.selectedUrunList = ktSpDurulama.ktOIUrunList;
  }

  expandColumnDataHandlerCelik(ktSpDurulama: KtSpDurulama) {
    this.celikListesiVisible = true;
    this.selectedCelikList = ktSpDurulama.celikKaliteleri;
  }
}

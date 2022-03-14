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
  KtSpBobinBalikKuyrugu,
  Urun,
} from '@euys/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'euys-viewing-list',
  templateUrl: './viewing-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewingListComponent implements OnInit {
  @Input() data: KtSpBobinBalikKuyrugu[];
  @Input() loaded$: Observable<boolean>;
  @Output() rowSelect = new EventEmitter<KtSpBobinBalikKuyrugu>();
  @Output() rowUnselect = new EventEmitter<KtSpBobinBalikKuyrugu>();
  selected: KtSpBobinBalikKuyrugu;
  urunListesiVisible = false;
  celikListesiVisible = false;
  selectedUrunList: Urun[] = [];
  selectedCelikList: string[] = [];
  dataList: KtSpBobinBalikKuyrugu[] = [];

  durumList = KtAktifTaslakList;

  @Input() visionParams: string[] = [];

  ngOnInit(): void {
    this.dataList = [...this.data];
  }

  onRowSelect(selected: KtSpBobinBalikKuyrugu) {
    this.selected = selected;
    this.rowSelect.emit(selected);
  }

  onRowUnselect(selected: KtSpBobinBalikKuyrugu) {
    this.selected = null;
    this.rowUnselect.emit(selected);
  }

  expandColumnDataHandlerUrun(
    ktSpBobinBalikKuyrugu: KtSpBobinBalikKuyrugu
  ) {
    this.urunListesiVisible = true;
    this.selectedUrunList = ktSpBobinBalikKuyrugu.ktOIUrunList;
  }

  expandColumnDataHandlerCelik(
    ktSpBobinBalikKuyrugu: KtSpBobinBalikKuyrugu
  ) {
    this.celikListesiVisible = true;
    this.selectedCelikList = ktSpBobinBalikKuyrugu.celikKaliteleri;
  }
}

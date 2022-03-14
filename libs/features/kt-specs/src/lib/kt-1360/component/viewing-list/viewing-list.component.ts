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
  KtSpYansitmaTesti,
  Urun,
} from '@euys/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'euys-viewing-list',
  templateUrl: './viewing-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewingListComponent implements OnInit {
  @Input() data: KtSpYansitmaTesti[];
  @Input() loaded$: Observable<boolean>;
  @Output() rowSelect = new EventEmitter<KtSpYansitmaTesti>();
  @Output() rowUnselect = new EventEmitter<KtSpYansitmaTesti>();
  selected: KtSpYansitmaTesti;
  urunListesiVisible = false;
  celikListesiVisible = false;
  selectedUrunList: Urun[] = [];
  selectedCelikList: string[] = [];
  dataList: KtSpYansitmaTesti[] = [];

  durumList = KtAktifTaslakList;

  @Input() visionParams: string[] = [];

  ngOnInit(): void {
    this.dataList = [...this.data];
  }

  onRowSelect(selected: KtSpYansitmaTesti) {
    this.selected = selected;
    this.rowSelect.emit(selected);
  }

  onRowUnselect(selected: KtSpYansitmaTesti) {
    this.selected = null;
    this.rowUnselect.emit(selected);
  }

  expandColumnDataHandlerUrun(ktSpYansitmaTesti: KtSpYansitmaTesti) {
    this.urunListesiVisible = true;
    this.selectedUrunList = ktSpYansitmaTesti.ktOIUrunList;
  }

  expandColumnDataHandlerCelik(ktSpYansitmaTesti: KtSpYansitmaTesti) {
    this.celikListesiVisible = true;
    this.selectedCelikList = ktSpYansitmaTesti.celikKaliteleri;
  }
}

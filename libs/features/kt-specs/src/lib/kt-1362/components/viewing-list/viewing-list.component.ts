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
  KtSpAsitlemeTank,
  Urun,
} from '@euys/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'euys-viewing-list',
  templateUrl: './viewing-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewingListComponent implements OnInit {
  @Input() data: KtSpAsitlemeTank[];
  @Input() loaded$: Observable<boolean>;
  @Output() rowSelect = new EventEmitter<KtSpAsitlemeTank>();
  @Output() rowUnselect = new EventEmitter<KtSpAsitlemeTank>();
  selected: KtSpAsitlemeTank;
  urunListesiVisible = false;
  celikListesiVisible = false;
  selectedUrunList: Urun[] = [];
  selectedCelikList: string[] = [];
  dataList: KtSpAsitlemeTank[] = [];

  durumList = KtAktifTaslakList;

  @Input() visionParams: string[] = [];

  ngOnInit() {
    this.dataList = [...this.data];
  }

  onRowSelect(selected: KtSpAsitlemeTank) {
    this.selected = selected;
    this.rowSelect.emit(selected);
  }

  onRowUnselect(selected: KtSpAsitlemeTank) {
    this.selected = null;
    this.rowUnselect.emit(selected);
  }

  expandColumnDataHandlerUrun(ktSpAsitlemeTank: KtSpAsitlemeTank) {
    this.urunListesiVisible = true;
    this.selectedUrunList = ktSpAsitlemeTank.ktOIUrunList;
  }

  expandColumnDataHandlerCelik(ktSpAsitlemeTank: KtSpAsitlemeTank) {
    this.celikListesiVisible = true;
    this.selectedCelikList = ktSpAsitlemeTank.celikKaliteleri;
  }
}

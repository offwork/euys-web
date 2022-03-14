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
  KtSpIiTenekeKalayErgitme,
  Urun,
} from '@euys/api-interfaces';
import { Observable, Subject } from 'rxjs';
import { Kt1331Facade } from '../../+state/kt-1331.facade';

@Component({
  selector: 'euys-viewing-list',
  templateUrl: './viewing-list.component.html',
  styleUrls: ['./viewing-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewingListComponent implements OnInit {
  @Input() data: KtSpIiTenekeKalayErgitme[];
  @Input() loaded$: Observable<boolean>;
  @Input() visionParams: string[] = [];
  @Output() rowSelect = new EventEmitter<KtSpIiTenekeKalayErgitme>();
  @Output() rowUnselect = new EventEmitter<KtSpIiTenekeKalayErgitme>();
  selected: KtSpIiTenekeKalayErgitme;
  urunListesiVisible = false;
  celikListesiVisible = false;
  selectedUrunList: Urun[] = [];
  selectedCelikList: string[] = [];
  dataList: KtSpIiTenekeKalayErgitme[] = [];

  durumList = KtAktifTaslakList;

  _endSubscription = new Subject<boolean>();

  constructor(public facade: Kt1331Facade) {}
  ngOnInit(): void {
    this.dataList = [...this.data];
  }

  onRowSelect(selected: KtSpIiTenekeKalayErgitme) {
    this.selected = selected;
    this.rowSelect.emit(selected);
  }

  onRowUnselect(selected: KtSpIiTenekeKalayErgitme) {
    this.selected = null;
    this.rowUnselect.emit(selected);
  }

  expandColumnDataHandlerUrun(
    ktSpIiTenekeKalayErgitme: KtSpIiTenekeKalayErgitme
  ) {
    this.urunListesiVisible = true;
    this.selectedUrunList = ktSpIiTenekeKalayErgitme.ktOIUrunList;
  }

  expandColumnDataHandlerCelik(
    ktSpIiTenekeKalayErgitme: KtSpIiTenekeKalayErgitme
  ) {
    this.celikListesiVisible = true;
    this.selectedCelikList = ktSpIiTenekeKalayErgitme.celikKaliteleri;
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { KtAktifTaslakList, KtSpAmbalajPaket } from '@euys/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'euys-viewing-list',
  templateUrl: './viewing-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewingListComponent implements OnInit {
  @Input() data: KtSpAmbalajPaket[];
  @Input() loaded$: Observable<boolean>;
  @Output() rowSelect = new EventEmitter<KtSpAmbalajPaket>();
  @Output() rowUnselect = new EventEmitter<KtSpAmbalajPaket>();
  selected: KtSpAmbalajPaket;
  dataList: KtSpAmbalajPaket[] = [];

  durumList = KtAktifTaslakList;

  @Input() visionParams: string[] = [];

  ngOnInit(): void {
    this.dataList = [...this.data];
  }

  onRowSelect(selected: KtSpAmbalajPaket) {
    this.selected = selected;
    this.rowSelect.emit(selected);
  }

  onRowUnselect(selected: KtSpAmbalajPaket) {
    this.selected = null;
    this.rowUnselect.emit(selected);
  }
}

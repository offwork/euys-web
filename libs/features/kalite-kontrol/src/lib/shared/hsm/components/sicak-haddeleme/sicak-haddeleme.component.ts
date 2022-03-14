import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
} from '@angular/core';
import { QCKayitBilgileri } from '@euys/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'euys-sicak-haddeleme',
  templateUrl: './sicak-haddeleme.component.html',
  styleUrls: ['./sicak-haddeleme.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SicakHaddelemeComponent implements OnChanges {
  @Input() qcKayitBilgileri: QCKayitBilgileri;
  @Input() qcKayitBilgileriLoaded$: Observable<boolean>;

  qcKayitDate: Date = new Date();

  ngOnChanges(): void {
    this.qcKayitDate = new Date();
  }
}

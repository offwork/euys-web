import { Component, Input } from '@angular/core';
import { QCKayitBilgileri, TCRBilgileri } from '@euys/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'euys-tcr-list',
  templateUrl: './tcr-list.component.html',
  styleUrls: ['./tcr-list.component.scss'],
})
export class TcrListComponent {
  @Input() qcKayitBilgileri$: Observable<QCKayitBilgileri>;
  @Input() qcKayitBilgileriLoaded$: Observable<boolean>;
  @Input() tcrBilgileriList$: Observable<TCRBilgileri[]>;

  dummyList = new Array(4);
}

import { Component, Input } from '@angular/core';
import { QCKayitBilgileri,OncekiHatKusur  } from '@euys/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'euys-onceki-hat-kusur',
  templateUrl: './onceki-hat-kusur.component.html',
  styleUrls: ['./onceki-hat-kusur.component.scss'],
})
export class OncekiHatKusurComponent {
  @Input() qcKayitBilgileri$: Observable<QCKayitBilgileri>;
  @Input() qcKayitBilgileriLoaded$: Observable<boolean>;
  @Input() oncekiHatKusurList$: Observable<OncekiHatKusur[]>;
}

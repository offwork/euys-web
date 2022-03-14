import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { NumberFormat, QCKayitBilgileri } from '@euys/api-interfaces';
import { FormControl } from '@ngneat/reactive-forms';

@Component({
  selector: 'euys-hsm2-qc-uretim-bilgisi',
  templateUrl: './hsm2-qc-uretim-bilgisi.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hsm2QcUretimBilgisiComponent implements OnInit {
  @Input() qcKayitBilgileri: QCKayitBilgileri;
  @Input() disabled = false;

  @Output() changeAciklama = new EventEmitter<string>();

  decimalFormat = NumberFormat.Standard;
  formControl = new FormControl<string>(null);

  ngOnInit(): void {
    this.formControl.setValue(this.qcKayitBilgileri?.aciklama);
    if (this.disabled) {
      this.formControl.disable();
    }
  }

  onChangeAciklama() {
    this.changeAciklama.emit(this.formControl.value);
  }
}

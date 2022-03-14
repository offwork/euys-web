import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Validators } from '@angular/forms';
import { Combo, EvetHayir } from '@euys/api-interfaces';
import { FormControl, FormGroup } from '@ngneat/reactive-forms';
import { Hsm2QcOptions } from '../../models/hsm2-options';

@Component({
  selector: 'euys-hsm2-qc-options',
  templateUrl: './hsm2-qc-options.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hsm2QcOptionsComponent implements OnInit {
  @Input()
  bobinAcmaKontrol!: EvetHayir;
  @Input()
  numuneAl!: EvetHayir;
  @Input()
  yuzeyKusuruVarMi!: EvetHayir;
  @Input()
  numuneAlmaIsareti?: string;
  @Input()
  showNumuneAlCombo = true;
  @Input()
  disableYuzeyKusuru = false;
  @Input()
  disabled = false;

  @Output()
  update = new EventEmitter<Hsm2QcOptions>();

  form: FormGroup<Hsm2QcOptions>;
  comboOptions: Combo[] = [
    { adi: 'EVET', kodu: EvetHayir.EVET },
    { adi: 'HAYIR', kodu: EvetHayir.HAYIR },
  ];

  constructor() {
    this.form = new FormGroup<Hsm2QcOptions>({
      bobinAcmaKontrol: new FormControl<EvetHayir>(
        EvetHayir.HAYIR,
        Validators.required
      ),
      numuneAl: new FormControl<EvetHayir>(
        EvetHayir.HAYIR,
        Validators.required
      ),
      yuzeyKusuruVarMi: new FormControl<EvetHayir>(
        EvetHayir.HAYIR,
        Validators.required
      ),
    });
  }

  ngOnInit(): void {
    this.form.reset({
      bobinAcmaKontrol: this.bobinAcmaKontrol,
      numuneAl: this.numuneAl,
      yuzeyKusuruVarMi: this.yuzeyKusuruVarMi,
    });
    this.form.controls.yuzeyKusuruVarMi.setDisable(this.disableYuzeyKusuru);
    if (this.disabled) {
      this.form.disable();
    }
  }

  onFormUpdated() {
    this.update.emit(this.form.value);
  }
}

import {
  Component,
  EventEmitter,
  Inject,
  Input,
  LOCALE_ID,
  OnInit,
  Output,
} from '@angular/core';
import { BobinKalinlikDegerleri } from '@euys/api-interfaces';
import { FormControl, FormGroup } from '@ngneat/reactive-forms';
@Component({
  selector: 'euys-hsm-bobin-kalinlik-degerleri',
  templateUrl: './hsm-bobin-kalinlik-degerleri.component.html',
  styleUrls: ['./hsm-bobin-kalinlik-degerleri.component.scss'],
})
export class HsmBobinKalinlikDegerleriComponent implements OnInit {
  @Input()
  bobinKalinlikDegerleri: BobinKalinlikDegerleri;
  @Input()
  disabled: boolean;

  @Output()
  updated: EventEmitter<BobinKalinlikDegerleri> = new EventEmitter<BobinKalinlikDegerleri>();

  bobinKalinlikDegerleriForm: FormGroup<BobinKalinlikDegerleri>;

  constructor(@Inject(LOCALE_ID) public readonly appLocale: string) {}

  ngOnInit(): void {
    this.bobinKalinlikDegerleriForm = new FormGroup<BobinKalinlikDegerleri>({
      operatorC40: new FormControl<number>({
        value: this.bobinKalinlikDegerleri?.operatorC40,
        disabled: this.disabled,
      }),
      ceyrek1: new FormControl<number>({
        value: this.bobinKalinlikDegerleri?.ceyrek1,
        disabled: this.disabled,
      }),
      merkez: new FormControl<number>({
        value: this.bobinKalinlikDegerleri?.merkez,
        disabled: this.disabled,
      }),
      ceyrek2: new FormControl<number>({
        value: this.bobinKalinlikDegerleri?.ceyrek2,
        disabled: this.disabled,
      }),
      drv40: new FormControl<number>({
        value: this.bobinKalinlikDegerleri?.drv40,
        disabled: this.disabled,
      }),
    });
  }

  yeniDeger() {
    const value = this.bobinKalinlikDegerleriForm.getRawValue();
    this.updated.emit(value);
  }
}

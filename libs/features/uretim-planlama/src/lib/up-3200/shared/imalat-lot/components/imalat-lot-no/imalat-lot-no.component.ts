import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImalatLotNo } from '@euys/api-interfaces';

@Component({
  selector: 'euys-imalat-lot-no',
  templateUrl: './imalat-lot-no.component.html',
})
export class ImalatLotNoComponent implements OnInit {
  @Output() search = new EventEmitter<ImalatLotNo>();

  readonly mpcLength = 10;
  readonly siparisNoLength = 11;
  readonly imalatLotNoLength = this.mpcLength + this.siparisNoLength;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      mpcNo: [
        '',
        [
          Validators.minLength(this.mpcLength),
          Validators.maxLength(this.mpcLength),
        ],
      ],
      siparisNo: [
        '',
        [
          Validators.minLength(this.siparisNoLength),
          Validators.maxLength(this.siparisNoLength),
        ],
      ],
    });
  }

  onPaste(event: ClipboardEvent) {
    event.preventDefault();

    const clipboardText = event.clipboardData.getData('text').trim();
    const mpcNo = clipboardText.substring(0, this.mpcLength);
    const siparisNo = clipboardText.substring(
      this.mpcLength,
      this.imalatLotNoLength
    );

    this.form.setValue({ mpcNo, siparisNo });
  }

  onSearch() {
    this.search.emit(this.form.value);
  }

  get invalid() {
    return (
      this.form.invalid ||
      !(this.form.controls.mpcNo.value || this.form.controls.siparisNo.value)
    );
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  ImalatLotCriteria,
  IMALAT_LOT_TURU_OPTIONS,
  UP_YERLI_IHRAC_OPTIONS,
} from '@euys/api-interfaces';

@Component({
  selector: 'euys-imalat-lot-criteria',
  templateUrl: './imalat-lot-criteria.component.html',
})
export class ImalatLotCriteriaComponent implements OnInit {
  @Output() search = new EventEmitter<ImalatLotCriteria>();

  form: FormGroup;
  yerliIhracOptions = UP_YERLI_IHRAC_OPTIONS;
  imalatLotTuruOptions = IMALAT_LOT_TURU_OPTIONS;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      yil: [String(new Date().getFullYear() - 1), Validators.required],
      imalatLotTuru: ['', Validators.required],
      urunGrubu: ['', Validators.required],
      yerliIhrac: ['', Validators.required],
    });
  }

  onSearch() {
    this.search.emit(this.form.value);
  }
}

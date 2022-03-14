import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@ngneat/reactive-forms';
import { Up3244Facade } from '../+state/up-3244.facade';

@Component({
  selector: 'euys-up3244',
  templateUrl: './up-3244.component.html',
  styles: [],
})
export class Up3244Component implements OnInit {
  imalatLotunHikayesiList$ = this.facade.imalatLotunHikayesiList$;

  imalatLotunHikayesiForm: FormGroup;

  constructor(private facade: Up3244Facade, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.imalatLotunHikayesiForm = this.formBuilder.group({
      imalatLotNo: ['', Validators.required],
      islemTipi: ['Tümü', Validators.required],
    });
  }
  load() {
    this.facade.load(
      this.imalatLotunHikayesiForm.value.imalatLotNo,
      this.imalatLotunHikayesiForm.value.islemTipi
    );
  }
}

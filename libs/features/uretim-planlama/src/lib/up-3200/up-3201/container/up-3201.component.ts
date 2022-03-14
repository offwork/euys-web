import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Stage, UpHatVerim } from '@euys/api-interfaces';
import { ToastMessageService } from '@euys/shared/ui';
import { Up3201Facade } from '../+state/up-3201.facade';
import { Up3201Service } from '../services/up-3201.service';

@Component({
  selector: 'euys-up3201',
  templateUrl: './up-3201.component.html',
  styleUrls: ['./up-3201.component.scss'],
})
export class Up3201Component implements OnInit {
  upHatVerimList$ = this.facade.upHatVerimList$;
  upHatVerim$ = this.facade.upHatVerim$;
  hatVerimList: Array<UpHatVerim> = [];
  selectedHatVerim?: UpHatVerim;
  displayDialog?: boolean = false;
  formGroup: FormGroup;

  constructor(
    private up3201Service: Up3201Service,
    private facade: Up3201Facade,
    private formBuilder: FormBuilder,
    private toastMessageService: ToastMessageService
  ) {}

  ngOnInit(): void {
    console.log('oninit');
    this.facade.loadUpHatVerimList();
    this.formGroup = this.formBuilder.group({
      hatKodu: [],
      hatAdi: [],
      hatVerim: ['', [Validators.max(1), Validators.min(0)]],
    });

    this.facade.stage$.subscribe(stageValue => {
      if (stageValue === Stage.DONE) {
        this.facade.loadUpHatVerimList();
      }
    });
  }

  save() {
    this.formGroup.patchValue(this.selectedHatVerim);
    this.displayDialog = true;
  }

  update() {
    this.formGroup.patchValue(this.selectedHatVerim);
    this.displayDialog = true;
  }

  dialogSave() {
    if (this.formGroup.valid) {
      this.facade.saveHatVerim(this.formGroup.value);
    } else {
      this.toastMessageService.warning('Verim Değeri Hatalı.');
    }
  }
}

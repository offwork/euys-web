import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UtDurdurmaStatuModel, UtVisible } from '@euys/api-interfaces';
import { Ut6112Facade } from '../+state/ut-6112.facade';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'euys-ut6112',
  templateUrl: './ut-6112.component.html',
  styles: [],
})
export class Ut6112Component implements OnInit {
  Visible = UtVisible;
  visible = new BehaviorSubject<UtVisible>(UtVisible.GORUNTULEME);
  selectedRow!: UtDurdurmaStatuModel;

  data$ = this.facade.data$;

  form: FormGroup = new FormGroup({
    durdurmaStatu: new FormControl('', [Validators.required]),
    durdurmaStatuTanim: new FormControl('', [Validators.required]),
  });

  constructor(private facade: Ut6112Facade, private toast: HotToastService) {}

  ngOnInit(): void {
    this.facade.init();
  }

  goBack() {
    this.visible.next(UtVisible.GORUNTULEME);
    this.selectedRow = null;
    this.facade.init();
  }

  goToSave(row?: UtDurdurmaStatuModel) {
    if (row) {
      this.selectedRow = row;
      this.form.patchValue(row);
    } else {
      this.selectedRow = null;
      this.form.reset();
    }
    this.visible.next(UtVisible.GUNCELLEME_KAYIT);
  }

  saveOrUpdate() {
    if (this.form.invalid) {
      this.toast.warning(`Gerekli alanları doldurunuz!!`, {
        position: 'top-right',
        autoClose: false,
        dismissible: true,
      });
      return;
    }

    const request = {
      ...(this.selectedRow ?? {}),
      ...this.form.value,
    } as UtDurdurmaStatuModel;
    this.facade.save(request);

    this.selectedRow = null;
    this.form.reset();
  }

  delete() {
    if (this.selectedRow?.id) {
      this.facade.delete(this.selectedRow);
    }

    this.goBack();
  }
}

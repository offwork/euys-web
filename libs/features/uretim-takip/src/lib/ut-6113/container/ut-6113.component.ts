import { Component, OnInit } from '@angular/core';
import { UtDurdurmaKodAdlariModel, UtVisible } from '@euys/api-interfaces';
import { BehaviorSubject } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { Ut6113Facade } from '../+state/ut-6113.facade';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'euys-ut6113',
  templateUrl: './ut-6113.component.html',
})
export class Ut6113Component implements OnInit {
  Visible = UtVisible;
  visible = new BehaviorSubject<UtVisible>(UtVisible.GORUNTULEME);
  selectedRow!: UtDurdurmaKodAdlariModel;

  data$ = this.facade.data$;
  listeler$ = this.facade.listeler$;
  altKodlistesi$ = this.facade.altKodListesi$;

  anaKodListesi: string[] = [];
  anaKodFiltre: string[] = [];
  altKodListesi: string[] = [];
  altKodFiltre: string[] = [];

  form: FormGroup = new FormGroup({
    durdurmaAnaKodu: new FormControl('', [Validators.required]),
    durdurmaAltKodu: new FormControl('', [Validators.required]),
    idDurdurmaStatu: new FormControl('', [Validators.required]),
    durdurmaBirimNo: new FormControl('', [Validators.required]),
  });

  constructor(private facade: Ut6113Facade, private toast: HotToastService) {}

  ngOnInit(): void {
    this.facade.init();

    this.listeler$
      .pipe(
        tap(listeler => {
          this.anaKodListesi = listeler?.durdurmaAnaKodlari;
        })
      )
      .subscribe();

    this.altKodlistesi$
      .pipe(
        tap(data => {
          this.altKodListesi =
            data?.utDurdurmaKodAdlariAltListeViewList?.map(
              i => i.durdurmaAltKodu
            ) ?? [];
        })
      )
      .subscribe();
  }

  goBack(reload = true) {
    this.selectedRow = null;
    this.visible.next(UtVisible.GORUNTULEME);
    if (reload) {
      this.facade.init();
    }
  }

  goToSave(row?: UtDurdurmaKodAdlariModel) {
    if (row) {
      this.selectedRow = row;
      this.form.patchValue(row);
      this.form.controls.durdurmaAnaKodu.disable();
      this.form.controls.durdurmaAltKodu.disable();
    } else {
      this.selectedRow = null;
      this.form.reset();
      this.form.controls.durdurmaAnaKodu.enable();
      this.form.controls.durdurmaAltKodu.enable();
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
    } as UtDurdurmaKodAdlariModel;

    this.facade.saveResponse$
      .pipe(
        take(1),
        tap(() => this.goBack())
      )
      .subscribe();
    this.facade.save(request);
  }

  delete() {
    if (this.selectedRow?.id) {
      this.facade.deleteResponse$
        .pipe(
          take(1),
          tap(() => this.goBack())
        )
        .subscribe();
      this.facade.delete(this.selectedRow);
    }
  }

  anaKodArama($event: string) {
    console.log($event);
    this.anaKodFiltre = this.anaKodListesi.filter(i =>
      i.toLowerCase().includes($event.toLowerCase())
    );
    if ($event) {
      this.facade.findByAnaKod($event);
    }
  }

  altKodArama($event: any) {
    const query = $event.query;
    this.altKodFiltre = this.altKodListesi.filter(i =>
      i.toLowerCase().includes(query.toLowerCase())
    );
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Stage, YupBazAnaBilgileri } from '@euys/api-interfaces';
import { FormValidationService, ToastMessageService } from '@euys/shared/ui';
import { combineLatest, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { Up3001Facade } from '../+state/up-3001.facade';
import { BazAnaBilgilerFacade } from '../../shared/baz-ana-bilgiler/+state/baz-ana-bilgiler.facade';

@Component({
  selector: 'euys-up3001',
  templateUrl: './up-3001.component.html',
})
export class Up3001Component implements OnInit, OnDestroy {
  form: FormGroup;
  file?: File = null;
  progress$ = this.facade.stage$.pipe(map(stage => stage === Stage.PROGRESS));
  bazAnaBilgiList$ = this.bazAnaBilgileriFacade.bazAnaBilgiList$;
  _endSubscription = new Subject<boolean>();

  mevcutYeni = [
    { label: 'Yeni Dosya', value: false },
    { label: 'Mevcut Dosya', value: true },
  ];

  constructor(
    private facade: Up3001Facade,
    private bazAnaBilgileriFacade: BazAnaBilgilerFacade,
    private formBuilder: FormBuilder,
    private toastMessage: ToastMessageService,
    private formValidationService: FormValidationService
  ) {
    this.createForm();
    this.resetForm();
  }

  ngOnInit() {
    this.facade.init();
    this.bazAnaBilgileriFacade.init();

    this.facade.stage$
      .pipe(
        filter(stage => stage === Stage.DONE),
        takeUntil(this._endSubscription)
      )
      .subscribe(() => {
        this.resetForm();
        this.bazAnaBilgileriFacade.init();
      });
  }

  ngOnDestroy() {
    this._endSubscription.next(true);
    this._endSubscription.complete();
  }

  save() {
    const { selected, mevcut, yil, dosyaAdi, dosyaAciklama } = this.form.value;
    const formValue = {
      yil,
      dosyaAdi,
      dosyaAciklama,
    };

    if ((mevcut ? selected : this.form.valid) && this.file) {
      const yupBazAnaBilgileri = mevcut
        ? { ...selected, dosyaAciklama }
        : formValue;

      this.facade.save(yupBazAnaBilgileri, this.file);
    } else {
      this.toastMessage.warningValidation();
      this.formValidationService.validateAllFormFields(this.form);
    }
  }

  onFileChange(event: { files: File[] }) {
    console.log(event);
    this.file = event.files.pop();
  }

  createForm() {
    this.file = null;

    this.form = this.formBuilder.group({
      selected: [],
      mevcut: [],
      yil: ['', Validators.required],
      dosyaAdi: ['', Validators.required],
      dosyaAciklama: [],
    });

    this.f.mevcut.valueChanges
      .pipe(takeUntil(this._endSubscription))
      .subscribe(mevcut => {
        if (mevcut) {
          this.f.dosyaAdi.disable();
          this.f.selected.enable();
        } else {
          this.f.dosyaAdi.enable();
          this.f.selected.disable();
          this.form.patchValue({
            selected: null,
          });
        }
        this.form.patchValue({
          dosyaAdi: '',
          dosyaAciklama: '',
        });
      });

    this.f.selected.valueChanges
      .pipe(
        filter<YupBazAnaBilgileri>(Boolean),
        takeUntil(this._endSubscription)
      )
      .subscribe(selected =>
        this.form.patchValue(selected, { emitEvent: false })
      );

    combineLatest([this.f.yil.valueChanges, this.f.mevcut.valueChanges])
      .pipe(
        filter(([yil, mevcut]) => Boolean(yil) && Boolean(mevcut)),
        takeUntil(this._endSubscription)
      )
      .subscribe(([yil]) => {
        this.bazAnaBilgileriFacade.filter(yil as string);
      });
  }

  resetForm() {
    this.file = null;

    this.form.patchValue({
      selected: null,
      mevcut: false,
      yil: String(new Date().getFullYear() - 1),
      dosyaAdi: '',
      dosyaAciklama: '',
    });
  }

  get f() {
    return this.form.controls;
  }
}

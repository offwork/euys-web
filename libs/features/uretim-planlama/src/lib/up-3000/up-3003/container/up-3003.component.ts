import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Stage, YupBazAnaBilgileriModel } from '@euys/api-interfaces';
import { ToastMessageService } from '@euys/shared/ui';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { Up3003Facade } from '../+state/up-3003.facade';
import { BazAnaBilgilerFacade } from '../../shared/baz-ana-bilgiler/+state/baz-ana-bilgiler.facade';

@Component({
  selector: 'euys-up3003',
  templateUrl: './up-3003.component.html',
})
export class Up3003Component implements OnInit, OnDestroy {
  form: FormGroup;
  file?: File = null;
  progress$ = this.facade.stage$.pipe(map(stage => stage === Stage.PROGRESS));
  bazAnaBilgiList$ = this.bazAnaBilgileriFacade.bazAnaBilgiList$;
  _endSubscription = new Subject<boolean>();

  constructor(
    private facade: Up3003Facade,
    private bazAnaBilgileriFacade: BazAnaBilgilerFacade,
    private formBuilder: FormBuilder,
    private toastMessage: ToastMessageService
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
    if (this.form.valid && this.file) {
      this.facade.save(this.form.value, this.file);
    } else {
      this.toastMessage.warningValidation();
    }
  }

  onFileChange(event: { files: File[] }) {
    console.log(event);
    this.file = event.files.pop();
  }

  createForm() {
    this.file = null;

    this.form = this.formBuilder.group({
      yupBazAnaBilgileriModel: [],
      yil: ['', Validators.required],
      yupTaslakIsmi: ['', Validators.required],
      yupTaslakAciklama: [],
    });

    this.f.yupBazAnaBilgileriModel.valueChanges
      .pipe(
        filter<YupBazAnaBilgileriModel>(Boolean),
        takeUntil(this._endSubscription)
      )
      .subscribe(yupBazAnaBilgileriModel =>
        this.form.patchValue(yupBazAnaBilgileriModel, { emitEvent: false })
      );

    this.f.yil.valueChanges
      .pipe(
        filter(yil => Boolean(yil)),
        takeUntil(this._endSubscription)
      )
      .subscribe(yil => {
        this.bazAnaBilgileriFacade.filter(yil as string);
      });
  }

  resetForm() {
    this.file = null;

    this.form.patchValue({
      yupBazAnaBilgileriModel: null,
      yil: String(new Date().getFullYear() - 1),
      yupTaslakIsmi: '',
      yupTaslakAciklama: '',
    });
  }

  get f() {
    return this.form.controls;
  }
}

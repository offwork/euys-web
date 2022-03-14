import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import {
  AktifPasif,
  EvetHayir,
  Hat,
  KkKusur,
  KkKusurAna,
  KkStKusurSinifi,
  KusurKoduKayit,
} from '@euys/api-interfaces';
import { FormControl, FormGroup, ValidatorFn } from '@ngneat/reactive-forms';
import { combineLatest, Observable, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  takeUntil,
} from 'rxjs/operators';
import { Kk8101Facade } from '../../+state/kk-8101.facade';

type AlreadyExistsValidationError = { alreadyExists: boolean };

@Component({
  selector: 'euys-kusur-kodu-kayit',
  templateUrl: './kusur-kodu-kayit.component.html',
  styleUrls: ['./kusur-kodu-kayit.component.scss'],
})
export class KusurKoduKayitComponent implements OnInit, OnDestroy {
  @Input() kusurListLoaded = false;
  @Input() kusurList?: KkKusur[];
  @Input() kusurSinifiListLoaded = false;
  @Input() kusurSinifiList?: KkStKusurSinifi[]; // TODO:
  @Input() kusurAnaListLoaded: boolean;
  @Input() kusurAnaList?: KkKusurAna[];
  @Input() hatList?: Hat[];
  @Input() defaultKusur$: Observable<KusurKoduKayit>;

  destroy$ = new Subject<void>();
  kusurForm: FormGroup<KusurKoduKayit>;
  aktifPasifList = [AktifPasif.AKTIF, AktifPasif.PASIF];
  evetHayir = EvetHayir;
  kusurKodu?: string;

  constructor(public facade: Kk8101Facade) {
    this.__initForm();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit() {
    const yeniAnaKusurControl = this.kusurForm.controls
      .yeniAnaKusur as FormGroup<KkKusurAna>;
    const yeniAnaKusurKodu = yeniAnaKusurControl.controls
      .anaKusurKodu as FormControl<string>;
    const yeniAnaKusurTanim = yeniAnaKusurControl.controls
      .anaKusurTanim as FormControl<string>;
    const anaKusurControl = this.kusurForm.controls.kkKusur.get(
      'anaKusurKodu'
    ) as FormControl<string>;

    combineLatest([
      yeniAnaKusurKodu.value$.pipe(debounceTime(400), distinctUntilChanged()),
      yeniAnaKusurTanim.value$.pipe(debounceTime(400), distinctUntilChanged()),
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe(([yeniAnaKusurKodu, yeniAnaKusurTanim]) => {
        if (yeniAnaKusurKodu && yeniAnaKusurTanim) {
          anaKusurControl.clearValidators();
          anaKusurControl.updateValueAndValidity();
        } else if (!anaKusurControl.hasValidator(Validators.required)) {
          anaKusurControl.addValidators(Validators.required);
          anaKusurControl.updateValueAndValidity();
        }
      });

    anaKusurControl.value$
      .pipe(distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe(value => {
        if (value) {
          yeniAnaKusurControl.controls.anaKusurTanim.reset(null);
          yeniAnaKusurControl.controls.anaKusurKodu.reset(null);
          yeniAnaKusurControl.controls.anaKusurTanim.setDisable(true);
          yeniAnaKusurControl.controls.anaKusurKodu.setDisable(true);
        } else {
          yeniAnaKusurControl.controls.anaKusurKodu.enable();
          yeniAnaKusurControl.controls.anaKusurTanim.enable();
        }
      });

    this.defaultKusur$
      .pipe(
        filter(kusur => !!kusur),
        takeUntil(this.destroy$)
      )
      .subscribe(kusur => {
        this.kusurForm.reset();
        this.kusurForm.patchValue({
          ...kusur,
          yeniAnaKusur: {
            aktifPasif: AktifPasif.AKTIF,
            anaKusurKodu: null,
            anaKusurTanim: null,
          },
        });
        this.kusurKodu = kusur.kkKusur.kusurKodu;
        this.facade.loadKatalogHatCombo(kusur.kkKusur.kusurKodu);
      });

    (
      this.kusurForm.controls.kkKusur as FormGroup<KkKusur>
    ).controls.kusurKodu.disabledWhile(this.defaultKusur$.pipe(map(Boolean)));
  }

  onSubmit() {
    if (!this.kusurForm.valid) {
      console.log('Form Invalid!!!');
      return;
    }
    const kusur = this.kusurForm.getRawValue();
    if (!kusur.yeniAnaKusur?.anaKusurKodu) {
      delete kusur.yeniAnaKusur;
    }
    kusur.kkKusur.islemTipiNo = 2;
    this.facade.saveKusurKodu(kusur);
  }

  compareFn(o1: Hat, o2: Hat): boolean {
    return o1.hatKodu === o2.hatKodu;
  }

  kayitGetir(event: { value: string }) {
    if (!event.value) {
      return;
    }
    this.facade.getKusur(event.value);
  }

  resetForm() {
    this.kusurKodu = undefined;
    this.kusurForm.reset({
      kkKusur: {
        aktifPasif: AktifPasif.AKTIF,
        guncellenebilirMi: EvetHayir.EVET,
        hurdaMi: EvetHayir.HAYIR,
        islemTipiNo: 1,
      },
      yeniAnaKusur: {
        aktifPasif: AktifPasif.AKTIF,
      },
      kkKusurAktifHatList: null,
    });
    this.facade.resetDefaultKusur();
    this.facade.resetKatalogHatCombo();
    this.facade.resetKatalogGorselList();
  }

  __initForm() {
    // TODO: Özel bir doğrulama yazılabilir UI daki forms modülü içerisinde!
    const kusurKoduExistsValidator: ValidatorFn<
      string,
      AlreadyExistsValidationError
    > = control => {
      const _value = control.value;
      return (this.kusurList || [])
        .map(({ kusurKodu }) => kusurKodu)
        .includes(_value)
        ? { alreadyExists: true }
        : null;
    };

    const anaKusurKoduExistsValidator: ValidatorFn<
      string,
      AlreadyExistsValidationError
    > = control => {
      const _value = control.value;
      return (this.kusurAnaList || [])
        .map(({ anaKusurKodu }) => anaKusurKodu)
        .includes(_value)
        ? { alreadyExists: true }
        : null;
    };

    this.kusurForm = new FormGroup<KusurKoduKayit>({
      kkKusur: new FormGroup<KkKusur>({
        kusurTanim: new FormControl<string>(null, Validators.required),
        aktifPasif: new FormControl<AktifPasif>(AktifPasif.AKTIF),
        anaKusurKodu: new FormControl<string>(null, Validators.required),
        hurdaMi: new FormControl<EvetHayir>(EvetHayir.HAYIR),
        kusurAciklama: new FormControl<string>(null, Validators.required),
        kusurKodu: new FormControl<string>(null, kusurKoduExistsValidator),
        kusurSinifiNo: new FormControl<number>(null),
        olusturanKisi: new FormControl<string>(null),
        islemYapanKisi: new FormControl<string>(null),
        islemYapanMenu: new FormControl<string>(null),
        etag: new FormControl<string>(null),
        islemTipiNo: new FormControl<number>(1),
        guncellenebilirMi: new FormControl<EvetHayir>(EvetHayir.EVET),
      }),
      yeniAnaKusur: new FormGroup<KkKusurAna>({
        aktifPasif: new FormControl<AktifPasif>(AktifPasif.AKTIF),
        anaKusurKodu: new FormControl<string>(
          null,
          anaKusurKoduExistsValidator
        ),
        anaKusurTanim: new FormControl<string>(null),
      }),
      kkKusurAktifHatList: new FormControl<Hat[]>(null),
    });
  }
}

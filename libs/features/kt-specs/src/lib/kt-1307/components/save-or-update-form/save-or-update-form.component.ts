import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  KtAnatabloAmbalajPaket,
  KtAtAmbalajPaket,
  KtSpAmbalajPaket,
  KtUrunAltGrup,
} from '@euys/api-interfaces';
import { FormValidationService, ToastMessageService } from '@euys/shared/ui';
import { isUndefined } from '@euys/shared/utility';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { Kt1307Facade } from '../../+state/kt-1307.facade';
import { createRequiredValidator } from '../../utils/validators';

@Component({
  selector: 'euys-save-or-update-form',
  templateUrl: './save-or-update-form.component.html',
  providers: [MessageService],
})
export class SaveOrUpdateFormComponent implements OnInit {
  public saveOrUpdateForm: FormGroup;

  @Input() anatabloKomboList$: Observable<KtAtAmbalajPaket[]>;
  @Input() urunAltGrupKomboList$: Observable<KtUrunAltGrup[]>;
  @Input() ambalajPaketKomboList$: Observable<KtAnatabloAmbalajPaket[]>;
  @Input() selectedRow: KtSpAmbalajPaket;
  @Input() isFormVisible = true;
  @Input() update!: boolean;
  @Output() formSubmit = new EventEmitter<KtSpAmbalajPaket>();

  urunAltGrup: KtUrunAltGrup[];
  ambalajPaket: KtAnatabloAmbalajPaket[];
  anatablo: KtAtAmbalajPaket[];
  formData: KtSpAmbalajPaket;

  constructor(
    private formBuilder: FormBuilder,
    public facade: Kt1307Facade,
    private formValidationService: FormValidationService,
    private toastMessageService: ToastMessageService
  ) {
    this.saveOrUpdateForm = this.formBuilder.group(
      {
        id: null,
        durum: null,
        etag: null,
        islemTipiNo: null,
        islemYapanMenu: null,
        olusturanKisi: null,
        islemYapanKisi: null,
        uretimOzellikTipi: null,
        codeAndText: null,
        kontrolAktifTaslak: null,
        maxKalinlik: [null, Validators.required],
        minKalinlik: [null, Validators.required],
        maxUzunluk: [],
        minUzunluk: [],
        spAmbalajPaketKodu: null,
        ambalajPaketKodu: null,
        urunAltGrupNo: null,
        oiAmbalajTipiAnaTabloKodu: null,
        urunGrupNoAndGrup: null,
        idAndAmbalaj: null,
      },
      {
        validators: [
          createRequiredValidator('uzunluk', 'minUzunluk', 'maxUzunluk'),
        ],
      }
    );
  }

  ngOnInit(): void {
    this.urunAltGrupKomboList$.subscribe((urunler: KtUrunAltGrup[]) => {
      if (urunler) {
        this.setUrunlerList(urunler);
      }
    });
    this.ambalajPaketKomboList$.subscribe(
      (celikler: KtAnatabloAmbalajPaket[]) => {
        if (celikler) {
          this.setCeliklerList(celikler);
        }
      }
    );
    this.anatabloKomboList$.subscribe(
      (anatabloKomboList: KtAtAmbalajPaket[]) => {
        if (anatabloKomboList) {
          this.setAnatabloKomboList(anatabloKomboList);
        }
      }
    );
    if (this.selectedRow != null) {
      this.saveOrUpdateForm.patchValue(this.selectedRow);
    }
  }

  setUrunlerList(urunlerList?: KtUrunAltGrup[]): void {
    this.urunAltGrup = this.generateUrunlerList(urunlerList);
  }

  setCeliklerList(celiklerList?: KtAnatabloAmbalajPaket[]): void {
    this.ambalajPaket = this.generateCeliklerList(celiklerList);
  }

  setAnatabloKomboList(anatabloKomboList?: KtAtAmbalajPaket[]): void {
    this.anatablo = [...anatabloKomboList];
  }

  generateUrunlerList(urunlerList?: KtUrunAltGrup[]): KtUrunAltGrup[] {
    return isUndefined(urunlerList) ? [] : [...urunlerList];
  }

  generateCeliklerList(
    celiklerList?: KtAnatabloAmbalajPaket[]
  ): KtAnatabloAmbalajPaket[] {
    return isUndefined(celiklerList) ? [] : [...celiklerList];
  }

  jsonMe() {
    this.formValidationService.validateAllFormFields(this.saveOrUpdateForm);

    if (
      this.saveOrUpdateForm.valid &&
      this.saveOrUpdateForm.getRawValue().minKalinlik <
        this.saveOrUpdateForm.getRawValue().maxKalinlik &&
      this.saveOrUpdateForm.getRawValue().minKalinlik !== 0
    ) {
      this.formData = this.saveOrUpdateForm.getRawValue();
      this.formSubmit.emit(this.formData);
    } else {
      if (this.saveOrUpdateForm.getRawValue().ambalajPaketKodu === null) {
        this.toastMessageService.warning(
          "Ambalaj Paket Spesifikasyonu Ana Tablo'dan seçim yapılmalı"
        );
      }

      if (
        this.saveOrUpdateForm.getRawValue().oiAmbalajTipiAnaTabloKodu === null
      ) {
        this.toastMessageService.warning(
          "Ambalaj Paket Sipariş Ögesi Ambalaj Tipi Ana Tablo'dan seçim yapılmalı"
        );
      }

      if (this.saveOrUpdateForm.getRawValue().urunAltGrupNo === null) {
        this.toastMessageService.warning("Ürün Alt Grubun'dan seçim yapılmalı");
      }

      if (this.saveOrUpdateForm.errors?.uzunlukMessage) {
        this.toastMessageService.warning(
          `${this.saveOrUpdateForm.errors?.uzunlukMessage}`
        );
      }
    }
  }

  get ambalajPaketKodu() {
    return this.saveOrUpdateForm.get('ambalajPaketKodu');
  }

  get oiAmbalajTipiAnaTabloKodu() {
    return this.saveOrUpdateForm.get('oiAmbalajTipiAnaTabloKodu');
  }

  get urunAltGrupNo() {
    return this.saveOrUpdateForm.get('urunAltGrupNo');
  }
}

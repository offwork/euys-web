import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  Hat,
  KtAnatabloMarkalama,
  KtAtMarkalama,
  KtSpMarkalama,
} from '@euys/api-interfaces';
import { FormValidationService, ToastMessageService } from '@euys/shared/ui';
import { Observable } from 'rxjs';

@Component({
  selector: 'euys-save-or-update-form',
  templateUrl: './save-or-update-form.component.html',
})
export class SaveOrUpdateFormComponent implements OnInit {
  public saveOrUpdateForm: FormGroup;

  @Input() anatabloKomboList$: Observable<KtAtMarkalama[]>;
  @Input() oiAnatabloKomboList$: Observable<KtAnatabloMarkalama[]>;
  @Input() hatKomboList$: Observable<Hat[]>;
  @Input() selectedRow: KtSpMarkalama;
  @Input() isFormVisible = true;
  @Input() update!: boolean;
  @Output() formSubmit = new EventEmitter<KtSpMarkalama>();

  oianatablo: KtAnatabloMarkalama[];
  anatablo: KtAtMarkalama[];
  hattablo: Hat[];
  formData: KtSpMarkalama;

  constructor(
    private formBuilder: FormBuilder,

    private formValidationService: FormValidationService,
    private toastMessageService: ToastMessageService
  ) {
    this.saveOrUpdateForm = this.formBuilder.group({
      id: null,
      uretimOzellikTipi: null,
      olusturanKisi: null,
      islemYapanKisi: null,
      islemTipiNo: null,
      islemYapanMenu: null,
      etag: null,
      durum: null,
      kontrolAktifTaslak: null,
      hatKodu: null,
      spMarkalamaKodu: null,
      markalamaKodu: null,
      oiMarkalamaAnaTabloKodu: null,
      codeAndText: null,
      idAndAciklama: null,
    });
  }

  ngOnInit() {
    this.anatabloKomboList$.subscribe((anatabloKomboList: KtAtMarkalama[]) => {
      if (anatabloKomboList) {
        this.setAnatabloKomboList(anatabloKomboList);
      }
    });

    if (this.selectedRow != null) {
      this.saveOrUpdateForm.patchValue(this.selectedRow);
    }
  }
  setAnatabloKomboList(anatabloKomboList?: KtAtMarkalama[]): void {
    this.anatablo = [...anatabloKomboList];
  }

  validateForm() {
    this.formValidationService.validateAllFormFields(this.saveOrUpdateForm);
    if (this.saveOrUpdateForm.valid) {
      this.formData = this.saveOrUpdateForm.getRawValue();
      this.formSubmit.emit(this.formData);
    } else {
      if (
        this.saveOrUpdateForm.getRawValue().oiMarkalamaAnaTabloKodu === null
      ) {
        this.toastMessageService.warning(
          "Markalama Sipariş Ögesi Ana Tablo'dan seçim yapılmalı"
        );
      }

      if (this.saveOrUpdateForm.getRawValue().hatKodu === null) {
        this.toastMessageService.warning("Hat Kodun 'dan seçim yapılmalı");
      }

      if (this.saveOrUpdateForm.getRawValue().markalamaKodu === null) {
        this.toastMessageService.warning(
          "Markalama Spesifikasyonu Ana Tablo'dan seçim yapılmalı"
        );
      }
    }
  }

  get markalamaKodu() {
    return this.saveOrUpdateForm.get('markalamaKodu');
  }

  get markalamaAnaTabloKodu() {
    return this.saveOrUpdateForm.get('markalamaAnaTabloKodu');
  }
}

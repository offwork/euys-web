import { Component, Input, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';
import DUMMY_DATA from '../../../shared/ana-veri/interfaces/dummy-data';
import {
  Urun,
  Celik,
  KkOperatorBilgilendirme,
  GnUretimMusteriGenelModel,
  KkOperatorBilgiGörseller,
  IslemTipi,
} from '@euys/api-interfaces';
import { FormControl, FormGroup } from '@ngneat/reactive-forms';
import { Observable, of } from 'rxjs';
import { Kk8103Facade } from '../../+state/kk-8103.facade';
import { GenericGorselUploadEvent } from '../../../shared/ana-veri/interfaces/generic-gorsel-upload-event';
import { Kk8103Service } from '../../services/kk-8103.service';
import { KaliteKontrolGorselService } from '../../../shared/services/kalite-kontrol-gorsel.service';

@Component({
  selector: 'euys-operator-bilgilendirme-kayit',
  templateUrl: './operator-bilgilendirme-kayit.component.html',
})
export class OperatorBilgilendirmeKayitComponent {
  @Input()
  genericGorselUploadEvent: GenericGorselUploadEvent;
  @Input()
  oprBilgiKayitLoaded = false;
  @Input()
  oprBilgiKayit?: KkOperatorBilgilendirme;
  @Input()
  urunKodu: Urun;
  @Input()
  celikKalitesi: Celik;
  @Input()
  musteriNoAd: GnUretimMusteriGenelModel;
  @Input()
  musteriList?: GnUretimMusteriGenelModel[];
  @Input()
  musteriListLoaded = false;
  @Input()
  urunList?: Urun[];
  @Input()
  urunListLoaded = false;
  @Input()
  kaliteList?: Celik[];
  @Input()
  kaliteListLoaded = false;

  oprBilgiForm: FormGroup<KkOperatorBilgilendirme>;
  oprGorselList$: Observable<KkOperatorBilgiGörseller[]>;
  oprGorselListLoaded$: Observable<boolean>;
  originalSource$: Observable<string>;

  @ViewChild('uploader')
  gorselUploader: FileUpload;
  images = DUMMY_DATA.images;

  constructor(
    public facade: Kk8103Facade,
    private service: Kk8103Service,
    private gorselService: KaliteKontrolGorselService
  ) {
    (this.oprBilgiForm = new FormGroup<KkOperatorBilgilendirme>({
      idUretimMusteri: new FormControl<string>({
        value: null,
        disabled: false,
      }),
      urunKodu: new FormControl<string>({ value: null, disabled: false }),
      celikKalitesi: new FormControl<string>({ value: null, disabled: false }),
      operatorBilgilendirme: new FormControl<string>(null),
      id: new FormControl<string>(null),
      mpc: new FormControl<string>(
        null,
        [Validators.minLength(10), Validators.maxLength(10)],
        control => {
          if (control.value) {
            this.oprBilgiForm.controls.celikKalitesi.disable();
            this.oprBilgiForm.controls.urunKodu.disable();
          }
          if (!control.value || control.value.length > 11) return of(null);
          return this.service.validateMpc(control.value);
        }
      ),
      islemTipiNo: new FormControl<IslemTipi>(IslemTipi.KAYIT),
      musteri: new FormControl<string>({ value: null, disabled: false }),
    })),
      (this.oprGorselList$ = this.facade.oprBilgiGorselList$);
    this.oprGorselListLoaded$ = this.facade.oprBilgiGorselListLoaded$;
  }

  clearForm() {
    this.oprBilgiForm.reset();
    this.facade.resetOprBilgi();
  }

  submitForm() {
    if (!this.oprBilgiForm.valid) {
      console.log('Form Invalid!!!');
      return;
    }
    this.facade.saveOprBilgilendirme(this.oprBilgiForm.value);
  }

  uploadImage(event: { files: File[] }) {
    console.log(event.files);
    const body = new FormData();
    body.set('upload', event.files[0]);
    this.facade.addGorsel(body, this.oprBilgiKayit.id);
    this.gorselUploader.clear();
  }
  deleteImage(event: any) {
    this.facade.removeGorsel(event.gorsel);
  }
  showImage(dokumanId: string) {
    this.originalSource$ = this.gorselService.getOriginalImage(dokumanId);
  }
}

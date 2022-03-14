import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  KkOperatorBilgiGörseller,
  KkOperatorBilgilendirme,
} from '@euys/api-interfaces';
import { FormControl, FormGroup } from '@ngneat/reactive-forms';
import { FileUpload } from 'primeng/fileupload';
import { Observable } from 'rxjs';
import { Kk8104Facade } from '../../+state/kk-8104.facade';
import DUMMY_DATA from '../../../shared/ana-veri/interfaces/dummy-data';
import { KaliteKontrolGorselService } from '../../../shared/services/kalite-kontrol-gorsel.service';

@Component({
  selector: 'euys-opr-bilgilendirme-guncelleme',
  templateUrl: './opr-bilgilendirme-guncelleme.component.html',
  styleUrls: ['./opr-bilgilendirme-guncelleme.component.scss'],
})
export class OprBilgilendirmeGuncellemeComponent implements OnChanges {
  @Input()
  oprBilgilendirmeData: KkOperatorBilgilendirme;

  @Input()
  oprBilgilendirmeDataLoaded: boolean;

  oprGorselList$: Observable<KkOperatorBilgiGörseller[]>;
  oprGorselListLoaded$: Observable<boolean>;
  originalSource$: Observable<string>;

  @ViewChild('uploader')
  gorselUploader: FileUpload;
  images = DUMMY_DATA.images;

  oprBilgilendirme: KkOperatorBilgilendirme;

  operatorForm: FormGroup<KkOperatorBilgilendirme>;
  constructor(
    public facade: Kk8104Facade,
    private gorselService: KaliteKontrolGorselService
  ) {
    this.initForm();
  }

  private initForm() {
    this.operatorForm = new FormGroup<KkOperatorBilgilendirme>({
      id: new FormControl<string>({ value: null, disabled: true }),
      idUretimMusteri: new FormControl<string>({ value: null, disabled: true }),
      mpc: new FormControl<string>({ value: null, disabled: true }),
      celikKalitesi: new FormControl<string>({ value: null, disabled: true }),
      urunKodu: new FormControl<string>({ value: null, disabled: true }),
      kriterMusteriNo: new FormControl<number>({ value: null, disabled: true }),
      kriterMpcKriter: new FormControl<number>({ value: null, disabled: true }),
      kriterCelikKalitesi: new FormControl<number>({
        value: null,
        disabled: true,
      }),
      kriterUrunKodu: new FormControl<number>({ value: null, disabled: true }),
      kriterAgirligi: new FormControl<number>({ value: null, disabled: true }),
      kriterSayisi: new FormControl<number>({ value: null, disabled: true }),
      operatorBilgilendirme: new FormControl<string>(null),
      olusturmaTarihi: new FormControl<string>({ value: null, disabled: true }),
      islemTarihi: new FormControl<string>({ value: null, disabled: true }),
      islemTipiNo: new FormControl<number>(1),
      etag: new FormControl<string>({ value: null, disabled: true }),
      musteri: new FormControl<string>({ value: null, disabled: true }),
      tarihVardiya: new FormControl<string>({ value: null, disabled: true }),
    });
    this.oprGorselList$ = this.facade.oprBilgiGorselList$;
    this.oprGorselListLoaded$ = this.facade.oprBilgilendirmeListLoaded$;
  }
  geriButtonClicked(): void {
    this.facade.setOprDataLoadedFalse();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.oprBilgilendirmeData) {
      return;
    } else {
      this.operatorForm.setValue(changes.oprBilgilendirmeData.currentValue);
    }
  }

  onSubmit() {
    if (!this.operatorForm.valid) {
      console.log('Form Invalid!');
      return;
    }

    const operator = this.operatorForm.getRawValue();
    this.facade.updateOprBilgilendirme(operator);
  }
  uploadImage(event: { files: File[] }) {
    console.log(event.files);
    const body = new FormData();
    body.set('upload', event.files[0]);
    this.facade.addGorsel(body, this.oprBilgilendirmeData.id);
    this.gorselUploader.clear();
  }
  deleteImage(event: any) {
    this.facade.removeGorsel(event.gorsel);
  }
  showImage(dokumanId: string) {
    this.originalSource$ = this.gorselService.getOriginalImage(dokumanId);
  }
}

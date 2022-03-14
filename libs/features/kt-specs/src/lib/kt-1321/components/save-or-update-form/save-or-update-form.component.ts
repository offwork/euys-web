import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  Celik,
  KtAtCgl12Temizleme,
  KtSpCgl12Temizleme,
  Urun,
} from '@euys/api-interfaces';
import {
  FormValidationService,
  MinMaxFieldsetComponent,
  ToastMessageService,
} from '@euys/shared/ui';
import { isUndefined } from '@euys/shared/utility';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1321Facade } from '../../+state/kt-1321.facade';
import { KalitelerPickListComponent } from '../kaliteler-pick-list/kaliteler-pick-list.component';
import { UrunlerPickListComponent } from '../urunler-pick-list/urunler-pick-list.component';

@Component({
  selector: 'euys-save-or-update-form',
  templateUrl: './save-or-update-form.component.html',
  styles: [``],
})
export class SaveOrUpdateFormComponent implements OnInit, OnDestroy {
  public saveOrUpdateForm: FormGroup;

  @Input() anatabloKomboList$: Observable<KtAtCgl12Temizleme[]>;
  @Input() loaded$: Observable<boolean>;
  @Input() urunler$: Observable<Urun[]>;
  @Input() celikler$: Observable<Celik[]>;
  @Input() loadedUrunler$: Observable<boolean>;
  @Input() loadedCelikler$: Observable<boolean>;
  @Input() selectedRow: KtSpCgl12Temizleme;
  @Input() isFormVisible = true;
  @Input() update!: boolean;
  @Output() formSubmit = new EventEmitter<KtSpCgl12Temizleme>();

  @ViewChild('urunlerPickList') urunlerPickList!: UrunlerPickListComponent;
  @ViewChild('kalitelerPickList')
  kalitelerPickList!: KalitelerPickListComponent;

  @ViewChild('siparisKalinlikMinMaxFieldset')
  siparisKalinlikMinMaxFieldset!: MinMaxFieldsetComponent;
  @ViewChild('siparisGenislikMinMaxFieldset')
  siparisGenislikMinMaxFieldset!: MinMaxFieldsetComponent;

  urunler: Urun[];
  celikler: Celik[];
  anatablo: KtAtCgl12Temizleme[];
  formData: KtSpCgl12Temizleme;
  urunTarget: Urun[];
  celikTarget: Celik[];
  pickListDirty = false;

  _endSubcription$ = new Subject<boolean>();

  constructor(
    private formBuilder: FormBuilder,
    public facade: Kt1321Facade,
    private formValidationService: FormValidationService,
    private toastMessageService: ToastMessageService
  ) {
    this.saveOrUpdateForm = this.formBuilder.group({
      id: null,
      uretimOzellikTipi: null,
      hedefAlkaliTemizlemeSicaklg: null,
      minAlkaliTemizlemeSicakligi: null,
      maxAlkaliTemizlemeSicakligi: null,
      minAlkaliTemizlemeKonsantrs: null,
      maxAlkaliTemizlemeKonsantrs: null,
      hdfElektrolitikTemizlSicakl: null,
      minElektrolitikTemizlSicakl: null,
      maxElektrolitikTemizlSicakl: null,
      minElektrolitikTemizlKonsan: null,
      maxElektrolitikTemizlKonsan: null,
      cgl12TemizlemeText: null,
      durum: null,
      olusturanKisi: null,
      islemYapanKisi: null,
      islemTipiNo: null,
      islemYapanMenu: null,
      etag: null,
      kontrolAktifTaslak: null,
      cgl12TemizlemeKodu: null,
      SpCgl12TemizlemeKodu: null,
      maxGenislik: null,
      minGenislik: null,
      minKalinlik: null,
      maxKalinlik: null,
      codeAndText: null,
      celikKaliteleri: null,
      ktOIUrunList: null,
    });
  }

  ngOnInit() {
    this.urunler$
      .pipe(takeUntil(this._endSubcription$))
      .subscribe((urunler: Urun[]) => {
        if (urunler) {
          this.setUrunlerList(urunler);
        }
      });
    this.celikler$
      .pipe(takeUntil(this._endSubcription$))
      .subscribe((celikler: Celik[]) => {
        if (celikler) {
          this.setCeliklerList(celikler);
        }
      });
    this.anatabloKomboList$
      .pipe(takeUntil(this._endSubcription$))
      .subscribe((anatabloKomboList: KtAtCgl12Temizleme[]) => {
        if (anatabloKomboList) {
          this.setAnatabloKomboList(anatabloKomboList);
        }
      });
    if (this.selectedRow) {
      this.saveOrUpdateForm.patchValue(this.selectedRow);
      this.celikTarget = [];
      this.urunTarget = this.selectedRow.ktOIUrunList;
      this.urunTarget.forEach(urun => {
        const index = this.urunler
          .map(ur => ur.urunKodu)
          .indexOf(urun.urunKodu, 0);
        if (index > -1) {
          this.urunler.splice(index, 1);
        }
      });

      this.selectedRow.celikKaliteleri.forEach(celik => {
        const celikKalite = {} as Celik;
        celikKalite.erdGrupKalitesi = celik;
        this.celikTarget.push(celikKalite);
      });

      this.celikTarget.forEach(celik => {
        const index = this.celikler
          .map(cr => cr.erdGrupKalitesi)
          .indexOf(celik.erdGrupKalitesi, 0);
        if (index > -1) {
          this.celikler.splice(index, 1);
        }
      });
    }
  }
  ngOnDestroy() {
    this._endSubcription$.next(true);
    this._endSubcription$.complete();
  }

  setUrunlerList(urunlerList?: Urun[]): void {
    this.urunler = this.generateUrunlerList(urunlerList);
  }

  setCeliklerList(celiklerList?: Celik[]): void {
    this.celikler = this.generateCeliklerList(celiklerList);
  }

  setAnatabloKomboList(anatabloKomboList?: KtAtCgl12Temizleme[]): void {
    this.anatablo = [...anatabloKomboList];
  }

  generateUrunlerList(urunlerList?: Urun[]): Urun[] {
    return isUndefined(urunlerList) ? [] : [...urunlerList];
  }

  generateCeliklerList(celiklerList?: Celik[]): Celik[] {
    return isUndefined(celiklerList) ? [] : [...celiklerList];
  }

  onSubmit() {
    this.formValidationService.validateAllFormFields(this.saveOrUpdateForm);
    this.pickListDirty = true;
    this.saveOrUpdateForm.patchValue({
      ...this.siparisKalinlikMinMaxFieldset.getValue(),
      ...this.siparisGenislikMinMaxFieldset.getValue(),
      ktOIUrunList: this.urunlerPickList.getTargetList(),
      celikKaliteleri: this.kalitelerPickList.getTargetList(),
    });
    if (
      this.saveOrUpdateForm.valid &&
      this.saveOrUpdateForm.getRawValue().ktOIUrunList.length !== 0 &&
      this.saveOrUpdateForm.getRawValue().celikKaliteleri.length !== 0 &&
      this.saveOrUpdateForm.getRawValue().minKalinlik <
        this.saveOrUpdateForm.getRawValue().maxKalinlik &&
      this.saveOrUpdateForm.getRawValue().minKalinlik !== 0.0 &&
      this.saveOrUpdateForm.getRawValue().minGenislik <
        this.saveOrUpdateForm.getRawValue().maxGenislik &&
      this.saveOrUpdateForm.getRawValue().minGenislik !== 0.0
    ) {
      this.formData = this.saveOrUpdateForm.getRawValue();
      this.formSubmit.emit(this.formData);
    } else {
      if (this.saveOrUpdateForm.getRawValue().ktOIUrunList.length === 0) {
        this.toastMessageService.warning('En az bir ürün seçilmeli');
      }
      if (this.saveOrUpdateForm.getRawValue().celikKaliteleri.length === 0) {
        this.toastMessageService.warning('En az bir çelik kalitesi seçilmeli');
      }
      if (this.saveOrUpdateForm.getRawValue().cgl12TemizlemeKodu === null) {
        this.toastMessageService.warning(
          "CGL-1-2 HATTI TEMİZLEME Spesifikasyonu Ana Tablo'dan seçim yapılmalı"
        );
      }
    }
  }

  get cgl12TemizlemeKodu() {
    return this.saveOrUpdateForm.get('cgl12TemizlemeKodu');
  }
}

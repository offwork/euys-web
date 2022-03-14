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
  KtAtIiTenekeKalayErgitme,
  KtSpIiTenekeKalayErgitme,
  Urun,
} from '@euys/api-interfaces';
import { FormValidationService, MinMaxFieldsetComponent, ToastMessageService } from '@euys/shared/ui';
import { isUndefined } from '@euys/shared/utility';
import { MessageService } from 'primeng/api';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1331Facade } from '../../+state/kt-1331.facade';
import { KalitelerPickListComponent } from '../kaliteler-pick-list/kaliteler-pick-list.component';
import { UrunlerPickListComponent } from '../urunler-pick-list/urunler-pick-list.component';

@Component({
  selector: 'euys-save-or-update-form',
  templateUrl: './save-or-update-form.component.html',
  styleUrls: ['./save-or-update-form.component.scss'],
  providers: [MessageService],
})
export class SaveOrUpdateFormComponent implements OnInit, OnDestroy {
  public saveOrUpdateForm: FormGroup;

  @Input() anatabloKomboList$: Observable<KtAtIiTenekeKalayErgitme[]>;
  @Input() loaded$: Observable<boolean>;
  @Input() urunler$: Observable<Urun[]>;
  @Input() celikler$: Observable<Celik[]>;
  @Input() loadedUrunler$: Observable<boolean>;
  @Input() loadedCelikler$: Observable<boolean>;
  @Input() selectedRow: KtSpIiTenekeKalayErgitme;
  @Input() isFormVisible = true;
  @Input() update!: boolean;
  @Output() formSubmit = new EventEmitter<KtSpIiTenekeKalayErgitme>();

  @ViewChild('urunlerPickList')urunlerPickList!: UrunlerPickListComponent;
  @ViewChild('kalitelerPickList')kalitelerPickList!: KalitelerPickListComponent;

  @ViewChild('siparisKalinlikMinMaxFieldset')siparisKalinlikMinMaxFieldset!: MinMaxFieldsetComponent;
  @ViewChild('siparisGenislikMinMaxFieldset')siparisGenislikMinMaxFieldset!: MinMaxFieldsetComponent;

  urunler: Urun[];
  celikler: Celik[];
  anatablo: KtAtIiTenekeKalayErgitme[];
  formData: KtSpIiTenekeKalayErgitme;
  urunTarget: Urun[];
  celikTarget: Celik[];
  pickListDirty = false;

  _endSubcription$ = new Subject<boolean>();

  constructor(
    private formBuilder: FormBuilder,
    public facade: Kt1331Facade,
    private formValidationService: FormValidationService,
    private toastMessageService: ToastMessageService
  ) {
    this.saveOrUpdateForm = this.formBuilder.group({
    id: null,
    uretimOzellikTipi: null,
    iiTenekeKalayErgitmeKodu: null,
    minSicaklik: null,
    maxSicaklik: null,
    iiTenekeKalayErgitmeText: null,
    durum: null,
    olusturanKisi: null,
    islemYapanKisi: null,
    islemYapanMenu: null,
    islemTipiNo: null,
    etag: null,
    kontrolAktifTaslak: null,
    spIiTenekeKalayErgitmKodu: null,
    minKalinlik: null,
    maxKalinlik: null,
    minGenislik: null,
    maxGenislik: null,
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
    .subscribe(
      (anatabloKomboList: KtAtIiTenekeKalayErgitme[]) => {
        if (anatabloKomboList) {
          this.setAnatabloKomboList(anatabloKomboList);
        }
      }
    );
    if (this.selectedRow != null) {
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

  setAnatabloKomboList(anatabloKomboList?: KtAtIiTenekeKalayErgitme[]): void {
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
      if (
        this.saveOrUpdateForm.getRawValue().iiTenekeKalayErgitmeKodu === null
      ) {
        this.toastMessageService.warning(
          "2.Sıcak Haddehane İkmal Sıcaklığı Spesifikasyonu Ana Tablo'dan seçim yapılmalı"
        );
      }
    }
  }

  get iiTenekeKalayErgitmeKodu() {
    return this.saveOrUpdateForm.get('iiTenekeKalayErgitmeKodu');
  }
}

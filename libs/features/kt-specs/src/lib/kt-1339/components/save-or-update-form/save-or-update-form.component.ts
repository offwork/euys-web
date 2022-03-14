import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  Celik,
  KtAtKromKaplamaTfsCro3,
  KtSpKromKaplamaTfsCro3,
  Urun,
} from '@euys/api-interfaces';
import { FormValidationService, ToastMessageService } from '@euys/shared/ui';
import { isUndefined } from '@euys/shared/utility';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Kt1339Facade } from '../../+state/kt-1339.facade';
import { KalitelerPickListComponent } from '../kaliteler-pick-list/kaliteler-pick-list.component';
import { UrunlerPickListComponent } from '../urunler-pick-list/urunler-pick-list.component';

@Component({
  selector: 'euys-save-or-update-form',
  templateUrl: './save-or-update-form.component.html',
  styleUrls: [],
})
export class SaveOrUpdateFormComponent implements OnInit, OnDestroy {
  saveOrUpdateForm: FormGroup;
  _destroy$ = new Subject();

  @Input() anatabloKomboList$: Observable<KtAtKromKaplamaTfsCro3[]>;
  @Input() loaded$: Observable<boolean>;
  @Input() urunler$: Observable<Urun[]>;
  @Input() celikler$: Observable<Celik[]>;
  @Input() loadedUrunler$: Observable<boolean>;
  @Input() loadedCelikler$: Observable<boolean>;
  @Input() selectedRow: KtSpKromKaplamaTfsCro3;
  @Input() isFormVisible = true;
  @Input() update!: boolean;
  @Output() formSubmit = new EventEmitter<KtSpKromKaplamaTfsCro3>();

  @ViewChild('urunlerPickList', { static: false })
  urunlerPickList: UrunlerPickListComponent;
  @ViewChild('kalitelerPickList', { static: false })
  kalitelerPickList: KalitelerPickListComponent;

  @ViewChild('siparisKalinlikMinMaxFieldset', { static: false })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  siparisKalinlikMinMaxFieldset: any;
  @ViewChild('siparisGenislikMinMaxFieldset', { static: false })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  siparisGenislikMinMaxFieldset: any;

  urunler: Urun[];
  celikler: Celik[];
  anatablo: KtAtKromKaplamaTfsCro3[];
  formData: KtSpKromKaplamaTfsCro3;
  urunTarget: Urun[];
  celikTarget: Celik[];
  pickListDirty = false;

  constructor(
    private formBuilder: FormBuilder,
    public facade: Kt1339Facade,
    private formValidationService: FormValidationService,
    private toastMessageService: ToastMessageService
  ) {
    this.saveOrUpdateForm = this.formBuilder.group({
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
      maxKalinlik: null,
      minKalinlik: null,
      maxGenislik: null,
      minGenislik: null,
      kromKaplamaTfsCro3Kodu: null,
      spKromKaplamaTfsCro3Kodu: null,
      celikKaliteleri: null,
      ktOIUrunList: null,
    });
  }

  ngOnInit() {
    this.urunler$
      .pipe(takeUntil(this._destroy$))
      .subscribe((urunler: Urun[]) => {
        if (urunler) {
          this.setUrunlerList(urunler);
        }
      });
    this.celikler$
      .pipe(takeUntil(this._destroy$))
      .subscribe((celikler: Celik[]) => {
        if (celikler) {
          this.setCeliklerList(celikler);
        }
      });
    this.anatabloKomboList$
      .pipe(takeUntil(this._destroy$))
      .subscribe((anatabloKomboList: KtAtKromKaplamaTfsCro3[]) => {
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

  setUrunlerList(urunlerList?: Urun[]) {
    this.urunler = this.generateUrunlerList(urunlerList);
  }

  setCeliklerList(celiklerList?: Celik[]) {
    this.celikler = this.generateCeliklerList(celiklerList);
  }

  setAnatabloKomboList(anatabloKomboList?: KtAtKromKaplamaTfsCro3[]) {
    this.anatablo = [...anatabloKomboList];
  }

  generateUrunlerList(urunlerList?: Urun[]): Urun[] {
    return isUndefined(urunlerList) ? [] : [...urunlerList];
  }

  generateCeliklerList(celiklerList?: Celik[]): Celik[] {
    return isUndefined(celiklerList) ? [] : [...celiklerList];
  }

  save() {
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
      if (this.saveOrUpdateForm.getRawValue().kromKaplamaTfsCro3Kodu === null) {
        this.toastMessageService.warning(
          "Krom Kaplamna (TFS) CRO3 Spesifikasyonu Ana Tablo'dan seçim yapılmalı"
        );
      }
    }
  }

  get kromKaplamaTfsCro3Kodu() {
    return this.saveOrUpdateForm.get('kromKaplamaTfsCro3Kodu');
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}

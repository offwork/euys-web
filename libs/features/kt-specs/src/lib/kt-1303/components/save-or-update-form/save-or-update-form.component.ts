import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  Celik,
  KtAt2SckHadIkmalSicakl,
  KtSp2SckHadIkmalSicaklik,
  Urun,
} from '@euys/api-interfaces';
import { FormValidationService, ToastMessageService } from '@euys/shared/ui';
import { isUndefined } from '@euys/shared/utility';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { Kt1303Facade } from '../../+state/kt-1303.facade';
import { KalitelerPickListComponent } from '../kaliteler-pick-list/kaliteler-pick-list.component';
import { UrunlerPickListComponent } from '../urunler-pick-list/urunler-pick-list.component';

@Component({
  selector: 'euys-save-or-update-form',
  templateUrl: './save-or-update-form.component.html',
  providers: [MessageService],
})
export class SaveOrUpdateFormComponent implements OnInit {
  public saveOrUpdateForm: FormGroup;

  @Input() anatabloKomboList$: Observable<KtAt2SckHadIkmalSicakl[]>;
  @Input() loaded$: Observable<boolean>;
  @Input() urunler$: Observable<Urun[]>;
  @Input() celikler$: Observable<Celik[]>;
  @Input() loadedUrunler$: Observable<boolean>;
  @Input() loadedCelikler$: Observable<boolean>;
  @Input() selectedRow: KtSp2SckHadIkmalSicaklik;
  @Input() isFormVisible = true;
  @Input() update!: boolean;
  @Output() formSubmit = new EventEmitter<KtSp2SckHadIkmalSicaklik>();

  @ViewChild('urunlerPickList', { static: false })
  urunlerPickList: UrunlerPickListComponent;
  @ViewChild('kalitelerPickList', { static: false })
  kalitelerPickList: KalitelerPickListComponent;

  @ViewChild('siparisKalinlikMinMaxFieldset', { static: false })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  siparisKalinlikMinMaxFieldset: any;

  urunler: Urun[];
  celikler: Celik[];
  anatablo: KtAt2SckHadIkmalSicakl[];
  formData: KtSp2SckHadIkmalSicaklik;
  urunTarget: Urun[];
  celikTarget: Celik[];
  pickListDirty = false;

  constructor(
    private formBuilder: FormBuilder,
    public facade: Kt1303Facade,
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
      sckHad2IkmalSicaklikKodu: null,
      sp2SckHadIkmalSicaklKodu: null,
      celikKaliteleri: null,
      ktOIUrunList: null,
    });
  }

  ngOnInit(): void {
    this.urunler$.subscribe((urunler: Urun[]) => {
      if (urunler) {
        this.setUrunlerList(urunler);
      }
    });
    this.celikler$.subscribe((celikler: Celik[]) => {
      if (celikler) {
        this.setCeliklerList(celikler);
      }
    });
    this.anatabloKomboList$.subscribe(
      (anatabloKomboList: KtAt2SckHadIkmalSicakl[]) => {
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

  setUrunlerList(urunlerList?: Urun[]): void {
    this.urunler = this.generateUrunlerList(urunlerList);
  }

  setCeliklerList(celiklerList?: Celik[]): void {
    this.celikler = this.generateCeliklerList(celiklerList);
  }

  setAnatabloKomboList(anatabloKomboList?: KtAt2SckHadIkmalSicakl[]): void {
    this.anatablo = [...anatabloKomboList];
  }

  generateUrunlerList(urunlerList?: Urun[]): Urun[] {
    return isUndefined(urunlerList) ? [] : [...urunlerList];
  }

  generateCeliklerList(celiklerList?: Celik[]): Celik[] {
    return isUndefined(celiklerList) ? [] : [...celiklerList];
  }

  jsonMe() {
    this.formValidationService.validateAllFormFields(this.saveOrUpdateForm);
    this.pickListDirty = true;
    this.saveOrUpdateForm.patchValue({
      ...this.siparisKalinlikMinMaxFieldset.getValue(),
      ktOIUrunList: this.urunlerPickList.getTargetList(),
      celikKaliteleri: this.kalitelerPickList.getTargetList(),
    });
    if (
      this.saveOrUpdateForm.valid &&
      this.saveOrUpdateForm.getRawValue().ktOIUrunList.length !== 0 &&
      this.saveOrUpdateForm.getRawValue().celikKaliteleri.length !== 0 &&
      this.saveOrUpdateForm.getRawValue().minKalinlik <
        this.saveOrUpdateForm.getRawValue().maxKalinlik &&
      this.saveOrUpdateForm.getRawValue().minKalinlik !== 0.0
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
        this.saveOrUpdateForm.getRawValue().sckHad2IkmalSicaklikKodu === null
      ) {
        this.toastMessageService.warning(
          "2.Sıcak Haddehane İkmal Sıcaklığı Spesifikasyonu Ana Tablo'dan seçim yapılmalı"
        );
      }
    }
  }

  get sckHad2IkmalSicaklikKodu() {
    return this.saveOrUpdateForm.get('sckHad2IkmalSicaklikKodu');
  }
}

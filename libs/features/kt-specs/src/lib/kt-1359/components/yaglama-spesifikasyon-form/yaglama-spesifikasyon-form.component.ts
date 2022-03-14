import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MessageService } from 'primeng/api';

import {
  KTSPYaglamaViewModel,
  KtAnatabloYaglamaDurumu,
  KtOICelikKalitesi,
  KtOIUrun,
  KtSpYaglamaSpec,
  KtStYaglamaYuzeyi,
  UtStHatTanim,
  YaglamaMarkasi,
  KtAtYaglama,
} from '@euys/api-interfaces';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { Kt1359Facade } from '../../+state/kt-1359.facade';

import { isUndefined } from '@euys/shared/utility';
import { KalitelerPickListComponent } from '../kaliteler-pick-list/kaliteler-pick-list.component';
import { UrunlerPickListComponent } from '../urunler-pick-list/urunler-pick-list.component';

import { FormValidationService } from '@euys/shared/ui';

@Component({
  selector: 'euys-yaglama-spesifikasyon-form',
  templateUrl: './yaglama-spesifikasyon-form.component.html',
  styleUrls: ['./yaglama-spesifikasyon-form.component.scss'],
  providers: [MessageService],
})
export class YaglamaSpesifikasyonFormComponent implements OnChanges, OnInit {
  public yaglamaSpesifikasyonForm: FormGroup;

  @Input() config$: Observable<KTSPYaglamaViewModel>;
  @Input() configLoaded$: Observable<boolean>;
  @Input() selectedRow!: Observable<KtSpYaglamaSpec>;
  @Input() isFormVisible = true;
  @Input() update!: boolean;

  _endSubcription = new Subject<boolean>();

  @ViewChild('kalitelerPickList', { static: false })
  kalitelerPickList: KalitelerPickListComponent;
  @ViewChild('urunlerPickList', { static: false })
  urunlerPickList: UrunlerPickListComponent;

  @ViewChild('siparisKalinlikMinMaxFieldset', { static: false })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  siparisKalinlikMinMaxFieldset: any;

  durumlar: KtAnatabloYaglamaDurumu[];
  kaliteler: KtOICelikKalitesi[];
  hatlar: UtStHatTanim[];
  markalar: YaglamaMarkasi[];
  urunler: KtOIUrun[];
  yuzeyler: KtStYaglamaYuzeyi[];
  yaglamalar: KtAtYaglama[];

  constructor(
    private formBuilder: FormBuilder,
    public facade: Kt1359Facade,
    private formValidationService: FormValidationService,
    private messageService: MessageService
  ) {
    this.yaglamaSpesifikasyonForm = this.formBuilder.group({
      celikKalitesi: null,
      durum: null,
      etag: null,
      hatKodu: null,
      id: [{ value: null, disabled: false }],
      islemTarihi: null,
      islemTipiNo: null,
      islemYapanKisi: null,
      islemYapanMenu: null,
      kontrolAktifTaslak: null,
      marka: null,
      maxKalinlik: null,
      minKalinlik: null,
      olusturanKisi: null,
      olusturmaTarihi: null,
      uretimOzellikTipi: null,
      urunKodu: null,
      ustHatTanimKodu: [{ value: '', disabled: false }],
      yagMarkasiAnaTabloKodu: [{ value: '', disabled: false }],
      yaglamaAciklama: null,
      yaglamaAnaTabloKodu: [{ value: '', disabled: false }],
      yaglamaDurum: null,
      yaglamaDurumuAnaTabloKodu: [{ value: '', disabled: false }],
      yaglamaKodu: null,
      yaglamaYuzeyi: null,
      yaglamaYuzeyiAnaTabloKodu: [{ value: '', disabled: false }],
      yerliIhrac: null,
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Yaglama spesifikasyon changes ==> ', changes);
  }

  ngOnInit() {
    this.config$.subscribe((config: KTSPYaglamaViewModel) => {
      if (config) {
        this.setKalitelerList(config.ktOICelikKalitesiList);
        this.setUrunlerList(config.ktOIUrunList);
        this.setYuzeylerList(config.ktStYaglamaYuzeyiList);
        this.setYaglamaDurumuList(config.ktAnatabloYaglamaDurumuList);
        this.setHatlarList(config.utStHatTanimList);
        this.setMarkalarList(config.yaglamaMarkasiList);
        this.setYaglamaAnaTabloList(config.ktAtYaglamaList);
      }
    });
    this.selectedRow
      ?.pipe(filter(Boolean), takeUntil(this._endSubcription))
      .subscribe(row => {
        console.log('YAĞLAMA SPESİFİKASYON FORM SELECTED ROW', row);
      });
  }

  setKalitelerList(kalitelerList?: KtOICelikKalitesi[]): void {
    this.kaliteler = this.generateKalitelerList(kalitelerList);
  }

  setUrunlerList(urunlerList?: KtOIUrun[]): void {
    this.urunler = this.generateUrunlerList(urunlerList);
  }

  setMarkalarList(markalarList: YaglamaMarkasi[]) {
    this.markalar = [...markalarList];
  }

  setYuzeylerList(yuzeylerList: KtStYaglamaYuzeyi[]) {
    this.yuzeyler = [...yuzeylerList];
  }

  setYaglamaDurumuList(durumlarList: KtAnatabloYaglamaDurumu[]) {
    this.durumlar = [...durumlarList];
  }

  setHatlarList(hatlarList: UtStHatTanim[]) {
    this.hatlar = [...hatlarList];
  }

  setYaglamaAnaTabloList(yaglamalarList: KtAtYaglama[]) {
    this.yaglamalar = [...yaglamalarList];
  }

  generateUrunlerList(urunlerList?: KtOIUrun[]): KtOIUrun[] {
    return isUndefined(urunlerList) ? [] : [...urunlerList];
  }

  generateKalitelerList(
    kalitelerList?: KtOICelikKalitesi[]
  ): KtOICelikKalitesi[] {
    return isUndefined(kalitelerList) ? [] : [...kalitelerList];
  }

  jsonMe() {
    this.formValidationService.validateAllFormFields(
      this.yaglamaSpesifikasyonForm
    );
    if (this.yaglamaSpesifikasyonForm.valid) console.log('valid');
    else {
      console.log('invalid');
      this.messageService.add({
        severity: 'success',
        summary: 'Service Message',
        detail: 'Via MessageService',
      });
    }
    console.log(this.yaglamaSpesifikasyonForm.getRawValue());
    this.yaglamaSpesifikasyonForm.patchValue({
      ...this.siparisKalinlikMinMaxFieldset.getValue(),
      urunKodu: this.urunlerPickList.getTargetList(),
      celikKalitesi: this.kalitelerPickList.getTargetList(),
    });
    console.log(this.yaglamaSpesifikasyonForm.getRawValue());
  }

  clearValidation() {
    console.log('CLEAR VALIDATION', this.yaglamaSpesifikasyonForm);
    this.formValidationService.clearValidationFormFields(
      this.yaglamaSpesifikasyonForm
    );
  }

  /*
   * Form getters
   */
  get yagMarkasiAnaTabloKodu() {
    return this.yaglamaSpesifikasyonForm.get('yagMarkasiAnaTabloKodu');
  }
  get yaglamaDurumuAnaTabloKodu() {
    return this.yaglamaSpesifikasyonForm.get('yaglamaDurumuAnaTabloKodu');
  }
  get yaglamaYuzeyiAnaTabloKodu() {
    return this.yaglamaSpesifikasyonForm.get('yaglamaYuzeyiAnaTabloKodu');
  }
  get ustHatTanimKodu() {
    return this.yaglamaSpesifikasyonForm.get('ustHatTanimKodu');
  }
  get yaglamaAnaTabloKodu() {
    return this.yaglamaSpesifikasyonForm.get('yaglamaAnaTabloKodu');
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  HatKoduTanimModel,
  KusurluIstifSorguModel,
  StatuModel,
  UtKusurluIstifPaketModel,
  UtStKusurluIstifKaliteEnum,
  UtVisible,
} from '@euys/api-interfaces';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Ut6001Facade } from '../+state/ut-6001.facade';

@Component({
  selector: 'euys-ut6001',
  templateUrl: './ut-6001.component.html',
})
export class Ut6001Component implements OnInit {
  data$ = this.facade.data$;
  hatTanimListesi$ = this.facade.hatTanimListesi$;
  hatKoduListesi: Array<HatKoduTanimModel> = [];
  hatKoduCombo: Array<HatKoduTanimModel> = [];
  kusurIstifKaliteListesi$ = this.facade.kusurIstifKaliteListesi$;
  islemTarihi: [];
  _endSubscription$ = new Subject<boolean>();
  form: FormGroup;
  sorgulamaForm: FormGroup;
  iptalForm: FormGroup;
  kusurluIstifKaliteValue: string[];
  Visible = UtVisible;
  visible$ = new BehaviorSubject<UtVisible>(UtVisible.GORUNTULEME);
  kusurluIstifStatus: Array<StatuModel> = [];
  aktifPasif: Array<StatuModel> = [];
  paketAgirlikKontrolu: boolean;
  showIptalDialog: boolean;
  selectedRow!: UtKusurluIstifPaketModel;
  _selectedRow = new BehaviorSubject<UtKusurluIstifPaketModel>(null);
  selectedRow$ = this._selectedRow.asObservable();
  showCalendars: boolean;
  kusurluIstifSorguModel: KusurluIstifSorguModel;

  constructor(
    private facade: Ut6001Facade,
    private fb: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
    this.createForm();
    this.createConsts();
  }

  ngOnInit(): void {
    this.facade.init();
    this.facade.configGetir();
    this.hatTanimListesi$
      .pipe(takeUntil(this._endSubscription$))
      .subscribe(data => {
        if (data) {
          data.forEach(e => {
            const hatKoduObj = {
              hatKodu: e.hatKodu,
              hatKoduTanim: e.hatUzunTanim,
            };
            this.hatKoduListesi.push(hatKoduObj);
          });
          this.hatKoduListesi = this.hatKoduListesi.filter(
            (object, index) =>
              index ===
              this.hatKoduListesi.findIndex(
                obj => JSON.stringify(obj) === JSON.stringify(object)
              )
          );
        }
      });
  }
  sorgula() {
    this.tarihAyarla();
    const valueKontrol = this.setModelValue();
    if (valueKontrol) {
      this.kusurluIstifSorguModel = this.sorgulamaForm.value;
      this.facade.sorgula(this.kusurluIstifSorguModel);
      this.sorgulaFormTemizle();
    }
  }
  save() {
    const paketAgirlikKontrol = this.paketAgirligiKontrol();
    if (paketAgirlikKontrol) {
      if (this.form.valid) {
        const utKusurluIstifPaketModel = {
          ...this.form.value,
          islemTipiNo: 1,
          islemTarihi: new Date(),
          islemYapanKisi: 'Test',
        };

        this.facade.save(utKusurluIstifPaketModel);
        this.form.reset();
      } else {
        this.validationMessage();
      }
    }
  }

  sorgulaFormTemizle() {
    this.sorgulamaForm.reset();
    this.showCalendars = false;
  }

  goToSave() {
    this.visible$.next(UtVisible.GUNCELLEME_KAYIT);
  }

  goBack() {
    this.visible$.next(UtVisible.GORUNTULEME);
    this.facade.init();
  }

  hatKoduGetir(event: { value: string }) {
    if (!event.value) {
      return;
    }
    const kaliteKodu = event.value;
    this.hatTanimListesi$
      .pipe(takeUntil(this._endSubscription$))
      .subscribe(data => {
        if (data) {
          this.hatKoduCombo = [];
          data.forEach(e => {
            const hatKoduObj = {
              hatKodu: e.hatKodu,
              hatKoduTanim: e.hatUzunTanim,
            };
            if (
              kaliteKodu !== UtStKusurluIstifKaliteEnum.A3B &&
              (e.kusurluIstifKaliteTanim === 'A2' ||
                e.kusurluIstifKaliteTanim === 'A3')
            ) {
              this.hatKoduCombo.push(hatKoduObj);
            }
            if (
              kaliteKodu === UtStKusurluIstifKaliteEnum.A3B &&
              e.kusurluIstifKaliteTanim === 'A3B'
            ) {
              this.hatKoduCombo.push(hatKoduObj);
            }
          });
          this.hatKoduCombo = this.hatKoduCombo.filter(
            (object, index) =>
              index ===
              this.hatKoduCombo.findIndex(
                obj => JSON.stringify(obj) === JSON.stringify(object)
              )
          );
        }
      });
  }

  iptalEt(row?: UtKusurluIstifPaketModel) {
    this.selectedRow = row;
    this.showIptalDialog = true;
  }

  iptalEtConfirm() {
    if (
      this.iptalForm.value.iptalNedeni &&
      this.iptalForm.value.iptalNedeni.trim().length > 0
    ) {
      const utKusurluIstifPaketModel = {
        ...this.selectedRow,
        islemTipiNo: 3,
        iptalTarihi: new Date(),
        iptalNedeni: this.iptalForm.value.iptalNedeni,
      };
      this.facade.iptalEt(utKusurluIstifPaketModel);
      this.runAfterIptal();
    } else {
      this.validationMessage();
    }
  }

  iptalEtCancel() {
    this.runAfterIptal();
  }

  runAfterIptal() {
    this.showIptalDialog = false;
    this.selectedRow = null;
    this.iptalForm.reset();
  }

  paketAgirligiKontrol() {
    const paketAgirlik = this.form.value.paketAgirlik;
    if (paketAgirlik >= 500 && paketAgirlik <= 10000) {
      this.paketAgirlikKontrolu = false;
      return true;
    } else {
      this.paketAgirlikKontrolu = true;
      this.validationMessage();
      return false;
    }
  }

  validationMessage() {
    this.messageService.add({
      severity: 'warn',
      summary: 'Gerekli alanları doldurunuz!',
      detail: '',
    });
  }

  tarihDisableOrEnableCtrlForStatu(event: { value: string }) {
    if (!event.value) {
      return;
    }
    const aktifPasif = event.value;
    if (aktifPasif === 'A') {
      this.showCalendars = false;
    } else {
      this.showCalendars = true;
    }
  }
  tarihAyarla() {
    const basTarihi = this.sorgulamaForm.value.baslangicTarihi;
    const bitTarihi = this.sorgulamaForm.value.bitisTarihi;

    if (basTarihi)
      this.sorgulamaForm.value.baslangicTarihi =
        basTarihi.getDate() +
        '/' +
        (basTarihi.getMonth() + 1) +
        '/' +
        basTarihi.getFullYear().toString();

    if (bitTarihi)
      this.sorgulamaForm.value.bitisTarihi =
        bitTarihi.getDate() +
        1 +
        '/' +
        (bitTarihi.getMonth() + 1) +
        '/' +
        bitTarihi.getFullYear().toString();
  }

  setModelValue() {
    if (
      this.sorgulamaForm.value.aktifPasif == 'P' &&
      !(
        this.sorgulamaForm.value.baslangicTarihi &&
        this.sorgulamaForm.value.bitisTarihi
      )
    ) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Başlangıç ve Bitiş Tarihi alanları doldurunuz!',
        detail: '',
      });
      return false;
    }
    if (
      this.sorgulamaForm.value.kusurluIstifPaket &&
      this.sorgulamaForm.value.kusurluIstifPaket.trim().length !== 9
    ) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Paket numarası 9 haneli olmalıdır!',
        detail: '',
      });
      return false;
    } else {
      this.sorgulamaForm.value.aktifPasif = this.sorgulamaForm.value.aktifPasif
        ? this.sorgulamaForm.value.aktifPasif
        : '';
      this.sorgulamaForm.value.kusurluIstifStatu = this.sorgulamaForm.value
        .kusurluIstifStatu
        ? this.sorgulamaForm.value.kusurluIstifStatu
        : '';
      this.sorgulamaForm.value.hatKodu = this.sorgulamaForm.value.hatKodu
        ? this.sorgulamaForm.value.hatKodu
        : '';
      this.sorgulamaForm.value.baslangicTarihi = this.sorgulamaForm.value
        .baslangicTarihi
        ? this.sorgulamaForm.value.baslangicTarihi
        : '';
      this.sorgulamaForm.value.bitisTarihi = this.sorgulamaForm.value
        .bitisTarihi
        ? this.sorgulamaForm.value.bitisTarihi
        : '';
      this.sorgulamaForm.value.kusurluIstifPaket = this.sorgulamaForm.value
        .kusurluIstifPaket
        ? this.sorgulamaForm.value.kusurluIstifPaket
        : '';
      return true;
    }
  }
  createForm() {
    this.form = this.fb.group({
      hatKodu: ['', Validators.required],
      kusurluIstifKalite: ['', Validators.required],
      paketAgirlik: ['', Validators.required],
      bobinNo: [],
    });
    this.sorgulamaForm = this.fb.group({
      kusurluIstifStatu: null,
      aktifPasif: null,
      hatKodu: null,
      baslangicTarihi: null,
      bitisTarihi: null,
    });
    this.iptalForm = this.fb.group({
      iptalNedeni: null,
    });
  }

  createConsts() {
    this.aktifPasif = [
      { id: 'A', value: 'Aktif' },
      { id: 'P', value: 'Pasif' },
    ];
    this.kusurluIstifStatus = [
      { id: 'K', value: 'Oluşturuldu' },
      { id: 'O', value: 'Onaylandı' },
    ];
  }
}

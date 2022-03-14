import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  HatKoduTanimModel,
  KusurluIstifSorguModel,
  StatuModel,
} from '@euys/api-interfaces';
import { MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Ut6002Facade } from '../+state/ut-6002.facade';

@Component({
  selector: 'euys-ut6002',
  templateUrl: './ut-6002.component.html',
})
export class Ut6002Component implements OnInit {
  data$ = this.facade.data$;
  hatTanimListesi$ = this.facade.hatTanimListesi$;
  hatKoduListesi: Array<HatKoduTanimModel> = [];
  kusurIstifKaliteListesi$ = this.facade.kusurIstifKaliteListesi$;
  olusturmaTarihi: [];
  islemTarihi: [];
  _endSubscription$ = new Subject<boolean>();
  sorgulamaForm: FormGroup;
  kusurluIstifKaliteValue: string[];
  kusurluIstifStatus: Array<StatuModel> = [];
  aktifPasif: Array<StatuModel> = [];
  kusurluIstifSorguModel: KusurluIstifSorguModel;

  constructor(
    private facade: Ut6002Facade,
    private fb: FormBuilder,
    private messageService: MessageService
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

  sorgulaFormTemizle() {
    this.sorgulamaForm.reset();
  }

  tarihAyarla() {
    const basTarihi = this.sorgulamaForm.value.baslangicTarihi;
    if (basTarihi)
      this.sorgulamaForm.value.baslangicTarihi =
        basTarihi.getDate() +
        '/' +
        (basTarihi.getMonth() + 1) +
        '/' +
        basTarihi.getFullYear().toString();

    const bitTarihi = this.sorgulamaForm.value.bitisTarihi;
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
    this.sorgulamaForm = this.fb.group({
      kusurluIstifStatu: null,
      aktifPasif: null,
      hatKodu: null,
      baslangicTarihi: null,
      bitisTarihi: null,
      kusurluIstifPaket: null,
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

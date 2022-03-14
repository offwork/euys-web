import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { IslemTipi, KtAtYaglama, KtStYaglamaTipi } from '@euys/api-interfaces';
import { DynamicFormControl, SpecsTableCol, TableHeaders } from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Kt1256Facade } from '../+state/kt-1256.facade';

@Component({
  selector: 'euys-kt1256',
  templateUrl: './kt-1256.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1256Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtYaglama;
  _selectedRow = new BehaviorSubject<KtAtYaglama>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  yaglamaMarkalari$ = this.facade.yaglamaMarkalari$;
  yaglamaDurumlari$ = this.facade.yaglamaDurumlari$;
  yaglamaYuzeyleri$ = this.facade.yaglamaYuzeyleri$;
  yaglamaTipleri$ = this.facade.yaglamaTipleri$;
  yaglamaTipleri: KtStYaglamaTipi[] = [];
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtYaglama;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 2, sort: 'yaglamaKodu' },
      { title: 'Yağlama Markası', rowspan: 2 },
      { title: 'Yaglama Durumu', rowspan: 2 },
      { title: 'Yağlama Yüzeyi', rowspan: 2 },
      { title: 'Yağlama Tipi', rowspan: 2 },
      { title: 'Yağlama Miktarı(mg/m2)', colspan: 3 },
      { title: 'Durum', rowspan: 2 },
    ],
    ['Hedef', 'Min.', 'Max.'],
  ];

  cols = [
    new SpecsTableCol('yaglamaKodu'),
    new SpecsTableCol('marka').filterWith(
      this.yaglamaMarkalari$.pipe(map((markalar) => markalar.map((marka) => marka.marka)))
    ),
    new SpecsTableCol('yaglamaDurum').filterWith(
      this.yaglamaDurumlari$.pipe(map((durumlar) => durumlar.map((durum) => durum.durum)))
    ),
    new SpecsTableCol('yaglamaYuzeyi').filterWith(
      this.yaglamaYuzeyleri$.pipe(map((yuzeyler) => yuzeyler.map((yuzey) => yuzey.yaglamaYuzeyi)))
    ),
    new SpecsTableCol('yaglamaTipi').filterWith(
      this.yaglamaTipleri$.pipe(map((tipler) => tipler.map((tip) => tip.yaglamaTipi)))
    ),
    new SpecsTableCol('hdfYaglamaMiktari'),
    new SpecsTableCol('minYaglamaMiktari'),
    new SpecsTableCol('maxYaglamaMiktari'),
    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    {
      id: 0,
      label: 'Yağlama Markası:',
      controlName: 'marka',
      type: 'array',
      options: this.yaglamaMarkalari$,
      props: ['marka', 'marka'],
      required: true,
    },
    {
      id: 1,
      label: 'Yağlama Durumu:',
      controlName: 'yaglamaDurum',
      type: 'array',
      options: this.yaglamaDurumlari$,
      props: ['durum', 'durum'],
      required: true,
    },
    {
      id: 2,
      label: 'Yağlama Yüzeyi:',
      controlName: 'yaglamaYuzeyi',
      type: 'array',
      options: this.yaglamaYuzeyleri$,
      props: ['yaglamaYuzeyi', 'yaglamaYuzeyi'],
      required: true,
    },
    {
      id: 3,
      label: 'Yağlama Tipi:',
      controlName: 'yaglamaTipiKodu',
      type: 'array',
      options: this.yaglamaTipleri$,
      props: ['yaglamaTipi', 'yaglamaTipiKodu'],
      required: true,
    },
    { id: 4, label: 'Hedef Yağlama Miktarı(mg/m2):', controlName: 'hdfYaglamaMiktari', type: 'string', required: true },
    { id: 5, label: 'Min. Yağlama Miktarı(mg/m2):', controlName: 'minYaglamaMiktari', type: 'string', required: true },
    { id: 6, label: 'Max. Yağlama Miktarı(mg/m2):', controlName: 'maxYaglamaMiktari', type: 'string', required: true },
  ];

  constructor(public facade: Kt1256Facade) {
    this.defaultRow$.pipe(takeUntil(this._endSubscription)).subscribe((val) => (this.defaultRow = val));
  }

  ngOnInit() {
    this.facade.init();

    this.yaglamaTipleri$.pipe(takeUntil(this._endSubscription)).subscribe((yaglamaTipleri) => {
      this.yaglamaTipleri = yaglamaTipleri;
    });
    this.data$.pipe(takeUntil(this._endSubscription)).subscribe(() => this.goBack());
  }

  ngOnDestroy() {
    this._endSubscription.next(true);
    this._endSubscription.complete();
  }

  reload() {
    this.facade.init();
  }

  goBack() {
    this.isFormVisible.next(false);
    this.selectedRow = null;
  }

  onAddClick() {
    this.isFormVisible.next(true);
    this.selectedRow = null;
  }

  onUpdateClick(row: KtAtYaglama) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val: KtAtYaglama) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;
    const yaglamaTip = this.yaglamaTipleri.find((tip) => tip.yaglamaTipiKodu === Number(val.yaglamaTipiKodu));
    const spesifikasyon: KtAtYaglama = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanMenu: '108992',
      islemYapanKisi: '108992',
      olusturanKisi: '108992',
      yaglamaTipi: yaglamaTip.yaglamaTipi,
    };

    this.facade.save(spesifikasyon);
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  IslemTipi,
  KtAtYuzeyGorunumu,
  KtOiTanimPuruzBirim,
  KtOiTanimYuzeyDurumu,
} from '@euys/api-interfaces';
import {
  DynamicFormControl,
  SpecsTableCol,
  TableHeaders,
} from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Kt1258Facade } from '../+state/kt-1258.facade';

@Component({
  selector: 'euys-kt1258',
  templateUrl: './kt-1258.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Kt1258Component implements OnInit, OnDestroy {
  isFormVisible = new BehaviorSubject<boolean>(false);
  selectedRow!: KtAtYuzeyGorunumu;
  _selectedRow = new BehaviorSubject<KtAtYuzeyGorunumu>(null);
  selectedRow$ = this._selectedRow.asObservable();
  loaded$ = this.facade.loaded$;
  data$ = this.facade.data$;
  tanimPuruzBirimleri$ = this.facade.tanimPuruzBirimleri$;
  tanimYuzeyDurumulari$ = this.facade.tanimYuzeyDurumulari$;
  tanimPuruzBirimleri: KtOiTanimPuruzBirim[] = [];
  tanimYuzeyDurumulari: KtOiTanimYuzeyDurumu[] = [];
  defaultRow$ = this.facade.defaultRow$;
  defaultRow: KtAtYuzeyGorunumu;
  _endSubscription = new Subject<boolean>();

  tableHeaders: TableHeaders = [
    [
      { title: 'Kod', rowspan: 1, sort: 'yuzeyGorunumuKodu' },
      'Min. Pürüzlülük',
      'Max. Pürüzlülük',
      'Birim',
      'Yüzey Durumu',
      { title: 'Durum', rowspan: 1 },
    ],
  ];

  cols = [
    new SpecsTableCol('yuzeyGorunumuKodu'),
    new SpecsTableCol('minPuruzluluk'),
    new SpecsTableCol('maxPuruzluluk'),
    new SpecsTableCol('puruzlulukBirimi').filterWith(
      this.tanimPuruzBirimleri$.pipe(
        map(birimler => birimler.map(birim => birim.puruzlulukBirimi))
      )
    ),
    new SpecsTableCol('comboYuzeyDurumAciklama').filterWith(
      this.tanimYuzeyDurumulari$.pipe(
        map(durumlar => durumlar.map(durum => durum.comboYuzeyDurumAciklama))
      )
    ),
    new SpecsTableCol('durum'),
  ];

  formControls: Array<DynamicFormControl> = [
    {
      id: 0,
      label: 'Min. Pürüzlülük:',
      controlName: 'minPuruzluluk',
      type: 'string',
      required: true,
    },
    {
      id: 1,
      label: 'Max. Pürüzlülük:',
      controlName: 'maxPuruzluluk',
      type: 'string',
      required: true,
    },
    {
      id: 2,
      label: 'Birim:',
      controlName: 'puruzlulukBirimKodu',
      type: 'array',
      options: this.tanimPuruzBirimleri$,
      props: ['puruzlulukBirimi', 'puruzlulukBirimKodu'],
      required: true,
    },
    {
      id: 3,
      label: 'Yüzey Durumu:',
      controlName: 'yuzeyDurumKodu',
      type: 'array',
      options: this.tanimYuzeyDurumulari$,
      props: ['comboYuzeyDurumAciklama', 'yuzeyDurumKodu'],
    },
  ];

  constructor(public facade: Kt1258Facade) {
    this.defaultRow$
      .pipe(takeUntil(this._endSubscription))
      .subscribe(val => (this.defaultRow = val));
  }

  ngOnInit() {
    this.facade.init();
    this.tanimPuruzBirimleri$
      .pipe(takeUntil(this._endSubscription))
      .subscribe(tanimPuruzBirimleri => {
        this.tanimPuruzBirimleri = tanimPuruzBirimleri;
      });
    this.tanimYuzeyDurumulari$
      .pipe(takeUntil(this._endSubscription))
      .subscribe(tanimYuzeyDurumulari => {
        this.tanimYuzeyDurumulari = tanimYuzeyDurumulari;
      });
    this.data$
      .pipe(takeUntil(this._endSubscription))
      .subscribe(() => this.goBack());
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

  goBackUpdateSuccess(row: KtAtYuzeyGorunumu) {
    this._selectedRow.next(row);
  }

  onAddClick() {
    this.isFormVisible.next(true);
    this.selectedRow = null;
  }

  onUpdateClick(row: KtAtYuzeyGorunumu) {
    this._selectedRow.next(row);
    this.isFormVisible.next(true);
  }

  isUpdate() {
    return Boolean(this.selectedRow && this.selectedRow.id);
  }

  onSubmit(val: KtAtYuzeyGorunumu) {
    const row = this.isUpdate() ? this.selectedRow : this.defaultRow;
    const tanimPuruzBirim = this.tanimPuruzBirimleri.find(
      birim => birim.puruzlulukBirimKodu === Number(val.puruzlulukBirimKodu)
    );
    const tanimYuzeyDurum = this.tanimYuzeyDurumulari.find(
      durum => durum.yuzeyDurumKodu === Number(val.yuzeyDurumKodu)
    );
    const spesifikasyon: KtAtYuzeyGorunumu = {
      ...row,
      ...val,
      islemTipiNo: this.isUpdate() ? IslemTipi.GUNCELLEME : IslemTipi.KAYIT,
      islemYapanMenu: '108992',
      islemYapanKisi: '108992',
      olusturanKisi: '108992',
      puruzlulukBirimi: tanimPuruzBirim.puruzlulukBirimi,
      comboYuzeyDurumAciklama: tanimYuzeyDurum?.comboYuzeyDurumAciklama,
    };

    this.facade.save(spesifikasyon);
  }
}

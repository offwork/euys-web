import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { OnInit } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { Kk8246Facade } from '../+state/kk-8246.facade';
import { FormArray, FormControl, FormGroup } from '@ngneat/reactive-forms';
import {
  BagimsizNumuneGoruntulemeModel,
  EvetHayir,
} from '@euys/api-interfaces';
@Component({
  selector: 'euys-bagimsiz-numune-goruntuleme',
  templateUrl: './bagimsiz-numune-goruntuleme.component.html',
  styles: [``],
})
export class BagimsizNumuneGoruntulemeComponent implements OnInit, OnDestroy {
  @Input() numuneBilgisi: string = null;
  @Input() bagimsizNumuneGoruntuleme: BagimsizNumuneGoruntulemeModel[] = [];

  bagimsizNumuneGoruntulemeLoaded$ =
    this.facade.bagimsizNumuneGoruntulemeLoaded$;
  bagimsizNumuneGoruntuleme$ = this.facade.bagimsizNumuneGoruntuleme$;

  bagimsizMesajBilgileriLoaded$ = this.facade.bagimsizMesajBilgileriLoaded$;
  bagimsizMesajBilgileri$ = this.facade.bagimsizMesajBilgileri$;
  loading$ = combineLatest([
    this.bagimsizNumuneGoruntulemeLoaded$,
    this.bagimsizMesajBilgileriLoaded$,
  ]).pipe(map(([numune, mesaj]) => !numune || !mesaj));
  _endSubscription = new Subject<boolean>();

  bagimsizNumuneColumnDef = [
    { field: 'id', header: 'ID' },
    { field: 'numuneNo', header: 'NUMUNE NO' },
    { field: 'adet', header: 'ADET' },
    { field: 'yeri', header: 'YER' },
    { field: 'aciklama', header: 'NUMUNE ACİKLAMA' },
    { field: 'talepEden', header: 'TALEP EDEN' },
  ];
  bagimsizMesajColumnDef = [
    { field: 'notSahibi', header: 'GÖNDEREN PERSONEL' },
    { field: 'not', header: 'GELEN MESAJ' },
  ];
  @Output() test = new EventEmitter<string>();
  @Output() updated = new EventEmitter<
    Partial<BagimsizNumuneGoruntulemeModel>[]
  >();
  numuneAlindiMiOptions = [EvetHayir.HAYIR, EvetHayir.EVET];
  evet = EvetHayir.EVET;
  formArray: FormArray<Partial<BagimsizNumuneGoruntulemeModel>>;
  destroy$ = new Subject<void>();
  constructor(private facade: Kk8246Facade) {
    this.formArray = this.constructFormArray([]);
  }

  private constructFormArray(values: BagimsizNumuneGoruntulemeModel[]) {
    return new FormArray<Partial<BagimsizNumuneGoruntulemeModel>>(
      values.map(value => this.createFormConfig(value))
    );
  }

  private createFormConfig(value: BagimsizNumuneGoruntulemeModel) {
    return new FormGroup<Partial<BagimsizNumuneGoruntulemeModel>>({
      id: new FormControl<string>(value.id),
      talepSahibi: new FormControl<string>(value.talepSahibi),
      bobinNo: new FormControl<string>(value.bobinNo),
      adet: new FormControl<number>(value.adet),
      numuneNo: new FormControl<string>(value.numuneNo),
      talepEden: new FormControl<string>(value.talepEden),
      yeri: new FormControl<string>(value.yeri),
      numuneAlindiMi: new FormControl<EvetHayir>(EvetHayir.HAYIR),
      aciklama: new FormControl<string>(value.aciklama),
      operatorAciklama: new FormControl<string>(value.operatorAciklama),
      notSahibi: new FormControl<string>(value.notSahibi),
      not: new FormControl<string>(value.not),
      hatNo: new FormControl<string>(value.hatNo),
    });
  }
  ngOnInit() {
    this.facade.getBagimsizNumuneGoruntuleme('501', 'C2110000070000');
    this.facade.getBagimsizMesajBilgileri('501', 'C2110000070000');
    this.bagimsizNumuneGoruntuleme$
      .pipe(
        filter(list => Boolean(list)),
        takeUntil(this.destroy$)
      )
      .subscribe(list => {
        const values = [...list];
        this.formArray = this.constructFormArray(values);
      });
  }

  next() {
    console.log('Kod buraya geldi emmitden önce');
    this.updated.emit(this.formArray.value);
    this.test.emit('Deneme');
  }
  ngOnDestroy() {
    this._endSubscription.next(true);
    this._endSubscription.complete();
  }
}

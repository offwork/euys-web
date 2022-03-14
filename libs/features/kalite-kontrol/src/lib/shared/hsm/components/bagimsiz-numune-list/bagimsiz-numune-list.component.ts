import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Validators } from '@angular/forms';
import { BagimsizNumuneModel, EvetHayir } from '@euys/api-interfaces';
import { FormControl, FormGroup } from '@ngneat/reactive-forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'euys-bagimsiz-numune-list',
  templateUrl: './bagimsiz-numune-list.component.html',
  styleUrls: ['./bagimsiz-numune-list.component.scss'],
})
export class BagimsizNumuneListComponent implements OnInit, OnDestroy {
  @Input() ref: DynamicDialogRef;
  @Input() formConfiguration: DynamicDialogConfig;
  @Input() bagimsizNumuneLoaded$: Observable<boolean>;
  @Input() bagimsizNumune$: Observable<BagimsizNumuneModel[]>;
  @Input() showHeader = true;
  @Input() updateForm = false;

  @Output()
  updated: EventEmitter<BagimsizNumuneModel> = new EventEmitter<BagimsizNumuneModel>();

  bagimsizNumuneList: BagimsizNumuneModel[];

  formGroup: FormGroup<BagimsizNumuneModel>;

  numuneAlindiMiOptions = [EvetHayir.EVET, EvetHayir.HAYIR];

  skeletonDummyList: BagimsizNumuneModel[] = new Array(2);

  destroy$ = new Subject<void>();

  constructor() {
    this.formGroup = new FormGroup<BagimsizNumuneModel>({
      id: new FormControl<string>(null),
      talepSahibi: new FormControl<string>(null),
      numuneNo: new FormControl<string>(null),
      talepEden: new FormControl<string>(null),
      yeri: new FormControl<string>(null),
      numuneAlindiMi: new FormControl<string>(null, Validators.required),
      aciklama: new FormControl<string>(null, Validators.required),
      hatNo: new FormControl<string>(null),
      bobinNo: new FormControl<string>(null),
    });
  }

  ngOnInit(): void {
    this.bagimsizNumune$.pipe(takeUntil(this.destroy$)).subscribe(list => {
      this.bagimsizNumuneList = list;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  stateHandler() {
    const bagimsizNumune: BagimsizNumuneModel = {
      ...this.bagimsizNumuneList[0],
    };
    const value: BagimsizNumuneModel = this.formGroup.getRawValue();

    bagimsizNumune.aciklama = value.aciklama;
    bagimsizNumune.numuneAlindiMi = value.numuneAlindiMi;

    this.updated.emit(bagimsizNumune);
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Stage, YupBackUpPlanMamulDonusModel } from '@euys/api-interfaces';
import { filter, find, sumBy } from 'lodash';
import { Subject } from 'rxjs';
import { map, take, takeUntil } from 'rxjs/operators';
import { Up3030Facade } from '../+state/up-3030.facade';

@Component({
  selector: 'euys-up3030',
  templateUrl: './up-3030.component.html',
})
export class Up3030Component implements OnInit, OnDestroy {
  done$ = this.facade.stage$.pipe(map(stage => stage === Stage.DONE));
  progress$ = this.facade.stage$.pipe(map(stage => stage === Stage.PROGRESS));
  data$ = this.facade.data$;
  pfUrunGruplari$ = this.facade.pfUrunGruplari$;
  _endSubscription$ = new Subject<boolean>();

  backupPlanForm: FormGroup;
  backupPlanEditForm: FormGroup;

  yil: FormControl = new FormControl(new Date(), Validators.required);
  gunler: number[] = [];

  constructor(private facade: Up3030Facade, private fb: FormBuilder) {
    this.facade.init();
    this.backupPlanForm = this.fb.group({
      yil: [new Date().getFullYear().toString(), Validators.required],
      donem: ['01', Validators.required],
      urunGrubu: ['Sıcak', Validators.required],
    });
  }

  ngOnInit(): void {
    this.data$.pipe(takeUntil(this._endSubscription$)).subscribe(async data => {
      const islemDurum = await this.facade.islemDurum$
        .pipe(take(1))
        .toPromise();
      this.backupPlanEditForm = this.fb.group({
        islemSonucModel: this.fb.group({
          islemDurum: [islemDurum],
        }),

        upYupBackUpPlanMamulDonemlikModel: this.fb.array(
          data.map(item =>
            this.fb.group({
              id: [item.id],
              planMiktar: [item.planMiktar],
              yil: [item.yil],
              donem: [item.donem],
              pfUrunGrup: [item.pfUrunGrup],
              pfUrunTipi: [item.pfUrunTipi],
              etag: [item.etag],
            })
          )
        ),
      });
    });

    this.facade.stage$
      .pipe(takeUntil(this._endSubscription$))
      .subscribe(stage => {
        if (stage === Stage.SAVED) {
          this.backupPlanEditForm = null;
          this.load();
        }
      });
  }

  ngOnDestroy() {
    this._endSubscription$.next(true);
    this._endSubscription$.complete();
  }

  get formArray() {
    return (
      this.backupPlanEditForm.controls
        .upYupBackUpPlanMamulDonemlikModel as FormArray
    ).controls;
  }

  load() {
    const { yil, donem, urunGrubu } = this.backupPlanForm.value;

    this.facade.load(yil, donem, urunGrubu);
  }

  save() {
    this.facade.save(this.backupPlanEditForm.value);
  }

  getValue(
    data: YupBackUpPlanMamulDonusModel[],
    pfUrunGrup: string,
    id: string
  ) {
    return find(data, { id })?.pfUrunGrup || 0;
  }

  getTotal(data: YupBackUpPlanMamulDonusModel[], pfUrunGrup: string) {
    return sumBy(filter(data, { pfUrunGrup }), 'planMikltar');
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Stage, YupTaslakAnaModel } from '@euys/api-interfaces';
import { DynamicFormControl } from '@euys/shared/ui';
import { BehaviorSubject, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { Up3004Facade } from '../+state/up-3004.facade';

@Component({
  selector: 'euys-up3004',
  templateUrl: './up-3004.component.html',
  styleUrls: ['./up-3004.component.scss'],
})
export class Up3004Component implements OnInit, OnDestroy {
  listVisible = true;
  modalVisible = false;
  yupTaslak: YupTaslakAnaModel = null;
  selected: YupTaslakAnaModel = null;
  yearControl = new FormControl();
  updateModel$ = new BehaviorSubject<YupTaslakAnaModel>(null);
  progress$ = this.facade.stage$.pipe(map(stage => stage === Stage.PROGRESS));
  loading$ = this.facade.loading$;
  data$ = this.facade.data$;
  _endSubscription = new Subject<boolean>();

  formControls: Array<DynamicFormControl> = [
    {
      id: 0,
      type: 'string',
      label: 'Yıllık Üretim Planı İsmi:',
      controlName: 'yupTaslakIsmi',
      required: true,
    },
    {
      id: 1,
      type: 'string',
      label: 'Açıklama:',
      controlName: 'yupTaslakAciklama',
      required: true,
    },
  ];

  constructor(private facade: Up3004Facade) {}

  ngOnInit(): void {
    this.facade.init();
    this.yearControl.setValue(String(new Date().getFullYear() - 1));
    this.reload();

    this.facade.stage$
      .pipe(
        filter(stage => stage === Stage.DONE),
        takeUntil(this._endSubscription)
      )
      .subscribe(() => {
        this.modalVisible = false;
        this.reload();
      });
  }

  ngOnDestroy() {
    this._endSubscription.next(true);
    this._endSubscription.complete();
  }

  reload() {
    this.facade.load(this.yearControl.value);
  }

  onSubmit(val = {}) {
    const updateModel = {
      ...this.selected,
      ...val,
    };
    this.facade.edit(updateModel);
  }

  del() {
    this.facade.del(this.selected);
  }

  approve() {
    this.facade.approve(this.selected);
  }

  disapprove() {
    this.facade.disapprove(this.selected);
  }

  showList() {
    this.yupTaslak = null;
    this.listVisible = true;
  }

  showDetail(yupTaslak: YupTaslakAnaModel) {
    this.yupTaslak = yupTaslak;
    this.listVisible = false;
  }

  openModal() {
    this.modalVisible = true;
    this.updateModel$.next(this.selected);
  }
}

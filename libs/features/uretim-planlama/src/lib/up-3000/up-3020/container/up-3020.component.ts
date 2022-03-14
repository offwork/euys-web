import { Component, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Stage, YupGunlukPlanBilgileriModel } from '@euys/api-interfaces';
import { ToastMessageService } from '@euys/shared/ui';
import moment from 'moment';
import { ConfirmationService } from 'primeng/api';
import { Subject } from 'rxjs';
import { map, take, takeUntil } from 'rxjs/operators';
import { Up3020Facade } from '../+state/up-3020.facade';

@Component({
  selector: 'euys-up3020',
  templateUrl: './up-3020.component.html',
})
export class Up3020Component implements OnDestroy {
  progress$ = this.facade.stage$.pipe(map(stage => stage === Stage.PROGRESS));
  yilAy: FormControl = new FormControl(new Date(), Validators.required);
  file: File;
  _endSubscription = new Subject<boolean>();

  constructor(
    private facade: Up3020Facade,
    private confirmationService: ConfirmationService,
    private toastMessage: ToastMessageService
  ) {
    this.resetForm();

    this.facade.stage$
      .pipe(takeUntil(this._endSubscription))
      .subscribe(stage => {
        switch (stage) {
          case Stage.DONE:
            this.resetForm();
            break;
          case Stage.DUBLICATE:
            this.confirmationService.confirm({
              message:
                'Bu yıl ve aya ait daha önce dosya yüklenmiştir. Yüklemek istiyor musunuz?',
              accept: async () => {
                const updateRecord = await this.facade.updateRecord$
                  .pipe(take(1))
                  .toPromise();
                this.save(updateRecord);
              },
            });
            break;
        }
      });
  }

  ngOnDestroy() {
    this._endSubscription.next(true);
    this._endSubscription.complete();
  }

  onFileChange(event: { files: File[] }) {
    this.file = event.files.pop();
  }

  save(updateRecord?: YupGunlukPlanBilgileriModel) {
    if (this.yilAy.valid && this.file) {
      const yilAy = moment(this.yilAy.value);

      const yupGunlukPlanBilgileriModel = {
        ...updateRecord,
        yil: yilAy.format('YYYY'),
        ay: yilAy.format('MM'),
        idDokuman: '2',
      } as YupGunlukPlanBilgileriModel;

      this.facade.save(yupGunlukPlanBilgileriModel);
    } else {
      this.toastMessage.warningValidation();
    }
  }

  resetForm() {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 1);

    this.yilAy.setValue(date);
    this.file = null;
  }
}

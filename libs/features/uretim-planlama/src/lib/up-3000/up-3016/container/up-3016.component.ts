import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  YupKapasiteRaporGrubuDonusModel,
  YupKapasiteRaporGrubuTanimlamaModel,
} from '@euys/api-interfaces';
import { ConfirmationService } from 'primeng/api';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Up3016Facade } from '../+state/up-3016.facade';

@Component({
  selector: 'euys-up3016',
  templateUrl: './up-3016.component.html',
  styles: [],
})
export class Up3016Component implements OnInit, OnDestroy {
  kapasiteRaporGrubuList$ = this.facade.kapasiteRaporGrubuList$;
  kapasiteRaporGrubuRumuzList$ = this.facade.kapasiteRaporGrubuRumuzList$;

  rumuzSourceList: string[] = [];
  rumuzTargetList: string[] = [];

  kapasiteRaporGrubuForm: FormGroup;
  isUpdateDialogVisible = false;
  selectedKapasiteRaporGrubu: YupKapasiteRaporGrubuDonusModel;
  _endSubscription$ = new Subject<boolean>();

  constructor(
    private facade: Up3016Facade,
    private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.kapasiteRaporGrubuForm = this.formBuilder.group({
      kapasiteRapor: ['', Validators.required],
      urunGrubu: ['Tümü', Validators.required],
    });

    this.facade.kapasiteRaporGrubuRumuzList$
      .pipe(takeUntil(this._endSubscription$))
      .subscribe(rumuzList => {
        this.rumuzSourceList = [...rumuzList];
      });

    this.facade.kapasiteRaporGrubuProcessing$
      .pipe(takeUntil(this._endSubscription$))
      .subscribe(kapasiteRaporGrubuProcessing => {
        if (!kapasiteRaporGrubuProcessing) {
          this.load();
        }
      });
  }

  ngOnDestroy() {
    this._endSubscription$.next(true);
    this._endSubscription$.complete();
  }

  load() {
    if (this.kapasiteRaporGrubuForm.valid) {
      this.facade.load(
        this.kapasiteRaporGrubuForm.value.kapasiteRapor,
        this.kapasiteRaporGrubuForm.value.urunGrubu
      );
    }
  }

  showUpdateDialog(
    kapasiteRapor: YupKapasiteRaporGrubuDonusModel,
    kapasiteRaporGrubuList: YupKapasiteRaporGrubuDonusModel[]
  ) {
    if (this.kapasiteRaporGrubuForm.value.kapasiteRapor === 'KAPASİTE') {
      this.facade.loadKapasiteRumuzList(kapasiteRapor.urunGrubu);
    } else {
      this.facade.loadRaporRumuzList(kapasiteRapor.urunGrubu);
    }

    this.isUpdateDialogVisible = true;
    this.selectedKapasiteRaporGrubu = kapasiteRapor;
    this.rumuzTargetList = kapasiteRaporGrubuList
      .filter(
        kapasiteRaporTarget =>
          kapasiteRaporTarget.grupAdi ===
          this.selectedKapasiteRaporGrubu.grupAdi
      )
      .map(kapasiteRaporTarget => kapasiteRaporTarget.rumuz);
  }

  updateRumuzList() {
    const yupKapasiteRaporGrubuTanimlamaModel = {
      ...this.selectedKapasiteRaporGrubu,
      rumuzModel: this.rumuzTargetList.map(rumuz => ({ rumuzAciklama: rumuz })),
    };
    this.facade.updateKapasiteRaporRumuzList(
      yupKapasiteRaporGrubuTanimlamaModel
    );
  }

  deleteKapasiteRaporGrubu(
    yupKapasiteRaporGrubuTanimlamaModel: YupKapasiteRaporGrubuTanimlamaModel
  ) {
    this.confirmationService.confirm({
      message: 'Silmek istediğinize emin misiniz?',
      accept: () => {
        this.facade.deleteKapasiteRaporGrupList(
          yupKapasiteRaporGrubuTanimlamaModel
        );
      },
    });
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Up3015Facade } from '../+state/up-3015.facade';

@Component({
  selector: 'euys-up3015',
  templateUrl: './up-3015.component.html',
})
export class Up3015Component implements OnInit, OnDestroy {
  kapasiteRaporControl = new FormControl('', Validators.required);
  rumuzSourceList: string[] = [];
  rumuzTargetList: string[] = [];
  kapasiteRaporTanimFormGroup: FormGroup;
  kapasiteRaporTanimFormVisible = false;

  _endSubscription$ = new Subject<boolean>();

  constructor(private facade: Up3015Facade, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.kapasiteRaporTanimFormGroup = this.formBuilder.group({
      grupAdi: [],
      siraNo: [],
      urunGrubu: [],
    });
    this.facade.rumuzList$
      .pipe(takeUntil(this._endSubscription$))
      .subscribe(rumuzList => {
        this.rumuzSourceList = [...rumuzList];
      });
  }

  ngOnDestroy() {
    this._endSubscription$.next(true);
    this._endSubscription$.complete();
  }

  save() {
    const yupKapasiteRaporGrubuTanimlamaModel = {
      ...this.kapasiteRaporTanimFormGroup.value,
      rumuzModel: this.rumuzTargetList.map(rumuz => ({ rumuzAciklama: rumuz })),
    };

    if (this.kapasiteRaporControl.value === 'KAPASİTE') {
      this.facade.saveKapasiteGrupTanim(yupKapasiteRaporGrubuTanimlamaModel);
    } else {
      this.facade.saveRaporGrupTanim(yupKapasiteRaporGrubuTanimlamaModel);
    }
  }

  reset() {
    this.rumuzSourceList = [];
    this.rumuzTargetList = [];
    this.kapasiteRaporTanimFormGroup.reset();
    this.kapasiteRaporTanimFormVisible = false;
  }

  loadRumuzList() {
    if (this.kapasiteRaporControl.value === 'KAPASİTE') {
      this.facade.loadKapasiteRumuzList(
        this.kapasiteRaporTanimFormGroup.value.urunGrubu
      );
    } else {
      this.facade.loadRaporRumuzList(
        this.kapasiteRaporTanimFormGroup.value.urunGrubu
      );
    }
  }
}

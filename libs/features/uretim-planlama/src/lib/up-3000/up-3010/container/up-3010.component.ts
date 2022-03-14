import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import moment from 'moment';
import { AylikUretimPlaniFacade } from '../../shared/aylik-uretim-plani/+state/aylik-uretim-plani.facade';
import { Stage, YupAylikAnaModel } from '@euys/api-interfaces';
import { Up3010Facade } from '../+state/up-3010.facade';
import { map } from 'rxjs/operators';

@Component({
  selector: 'euys-up3010',
  templateUrl: './up-3010.component.html',
})
export class Up3010Component implements OnInit {
  progress$ = this.facade.stage$.pipe(map(stage => stage === Stage.PROGRESS));
  loading$ = this.aylikUreimPlanifacade.loading$;
  yupAylikAnaModel$ = this.aylikUreimPlanifacade.yupAylikAnaModel$;
  yupAylikUretimPlaniModelList$ =
    this.aylikUreimPlanifacade.yupAylikUretimPlaniModelList$;
  yupAylikNihaiMamulModelList$ =
    this.aylikUreimPlanifacade.yupAylikNihaiMamulModelList$;

  yilAy: FormControl = new FormControl(new Date(), Validators.required);

  aylikUretimPlaniForm: FormGroup;

  constructor(
    private aylikUreimPlanifacade: AylikUretimPlaniFacade,
    private fb: FormBuilder,
    private facade: Up3010Facade
  ) {
    this.aylikUreimPlanifacade.init();
    this.facade.init();
  }

  load() {
    const yilAy = moment(this.yilAy.value);
    const yil = yilAy.format('YYYY');
    const ay = yilAy.format('MM');

    this.aylikUreimPlanifacade.load(ay, yil);
  }

  save() {
    this.facade.save(this.aylikUretimPlaniForm.value);
  }

  dateChange() {
    this.aylikUretimPlaniForm = null;
    this.aylikUreimPlanifacade.init();
  }

  ngOnInit(): void {
    this.yupAylikAnaModel$.subscribe((yupAylikAnaModel: YupAylikAnaModel) => {
      if (yupAylikAnaModel) {
        const yilAy = moment(this.yilAy.value);
        const yil = yilAy.format('YYYY');
        const ay = yilAy.format('MM');

        this.aylikUretimPlaniForm = this.fb.group({
          id: [yupAylikAnaModel.id],
          yil: [yil],
          ay: [ay],
          dosyaAdi: [yupAylikAnaModel.dosyaAdi],
          dosyaAciklama: [yupAylikAnaModel.dosyaAciklama],
          idDokuman: [yupAylikAnaModel.idDokuman],
          olusturmaTarihi: [yupAylikAnaModel.olusturmaTarihi],

          yupAylikUretimPlaniModelList: this.fb.array(
            yupAylikAnaModel.yupAylikUretimPlaniModelList.map(item =>
              this.fb.group({
                id: [item.id],
                idYupAylikAna: [item.idYupAylikAna],
                apassMiktar: [item.apassMiktar],
                uretimHedefMiktar: [item.uretimHedefMiktar],
                olusturmaTarihi: [item.olusturmaTarihi],
                hatSiraHatTanim: [item.hatSiraHatTanim],
                idStYupHatSira: [item.idStYupHatSira],
                hatSiraHatGrupTanim: [item.hatSiraHatGrupTanim],
                hatSiraAylikUretimSiraNo: [item.hatSiraAylikUretimSiraNo],
                yupButce: [item.yupButce],
              })
            )
          ),
          yupAylikNihaiMamulModelList: this.fb.array(
            yupAylikAnaModel.yupAylikNihaiMamulModelList.map(item =>
              this.fb.group({
                id: [item.id],
                idYupAylikAna: [item.idYupAylikAna],
                apassMiktar: [item.apassMiktar],
                uretimHedefMiktar: [item.uretimHedefMiktar],
                olusturmaTarihi: [item.olusturmaTarihi],
                urunRapGrupNo: [item.urunRapGrupNo],
                aylikMamulTanim: [item.aylikMamulTanim],
                aylikMamulGrupTanim: [item.aylikMamulGrupTanim],
                yupButce: [item.yupButce],
              })
            )
          ),
        });
      }
    });
  }

  get formArrayAylikUretimPlani() {
    return (
      this.aylikUretimPlaniForm.controls
        .yupAylikUretimPlaniModelList as FormArray
    ).controls;
  }

  get formArrayAylikNihaiMamul() {
    return (
      this.aylikUretimPlaniForm.controls
        .yupAylikNihaiMamulModelList as FormArray
    ).controls;
  }
}

import {
  CMSMPratigiBilgileri,
  CMSMpratigiModelListQueryModel,
} from '@euys/api-interfaces';
import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Kk8139Facade } from '../../../+state/kk-8139.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'euys-sm-pratigi-dialog',
  templateUrl: './sm-pratigi-dialog.component.html',
})
export class SmPratigiDialogComponent implements OnInit {
  smPratigiList$: Observable<CMSMPratigiBilgileri[]>;
  smPratigiListLoaded$: Observable<boolean>;
  smPratigiQueryModel: CMSMpratigiModelListQueryModel;
  constructor(
    private facade: Kk8139Facade,
    public config: DynamicDialogConfig
  ) {
    this.smPratigiList$ = this.facade.smPratigiList$;
    this.smPratigiListLoaded$ = this.facade.smPratigiListLoaded$;
    this.smPratigiQueryModel = {
      hatNo: '331',
      bobinNo: 'C2110000070000',
      qcOnayYapilmis: false,
    };
  }

  ngOnInit(): void {
    this.facade.getSmPratigiList(this.smPratigiQueryModel);
  }
}

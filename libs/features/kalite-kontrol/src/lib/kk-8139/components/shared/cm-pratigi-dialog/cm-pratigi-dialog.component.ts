import {
  CMSMPratigiBilgileri,
  CMSMpratigiModelListQueryModel,
} from '@euys/api-interfaces';
import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Kk8139Facade } from '../../../+state/kk-8139.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'euys-cm-pratigi-dialog',
  templateUrl: './cm-pratigi-dialog.component.html',
})
export class CmPratigiDialogComponent implements OnInit {
  cmPratigiList$: Observable<CMSMPratigiBilgileri[]>;
  cmPratigiListLoaded$: Observable<boolean>;
  cmPratigiQueryModel: CMSMpratigiModelListQueryModel;
  constructor(
    private facade: Kk8139Facade,
    public config: DynamicDialogConfig
  ) {
    this.cmPratigiList$ = this.facade.cmPratigiList$;
    this.cmPratigiListLoaded$ = this.facade.cmPratigiListLoaded$;
    this.cmPratigiQueryModel = {
      hatNo: '331',
      bobinNo: 'C2110000070000',
      qcOnayYapilmis: false,
    };
  }

  ngOnInit(): void {
    this.facade.getCmPratigiList(this.cmPratigiQueryModel);
  }
}

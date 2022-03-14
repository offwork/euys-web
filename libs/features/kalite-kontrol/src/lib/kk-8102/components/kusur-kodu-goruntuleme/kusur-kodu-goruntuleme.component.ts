import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Kk8102Facade } from '../../+state/kk-8102.facade';
import { FormControl, FormGroup } from '@ngneat/reactive-forms';
import { combineLatest, Observable, Subject } from 'rxjs';

import {
  AktifPasif,
  EvetHayir,
  Hat,
  KkKusur,
  KusurKatalogView,
  KusurKoduKayit,
} from '@euys/api-interfaces';

@Component({
  selector: 'euys-kusur-kodu-goruntuleme',
  templateUrl: './kusur-kodu-goruntuleme.component.html',
  styleUrls: ['./kusur-kodu-goruntuleme.component.scss'],
})
export class KusurKoduGoruntulemeComponent {
  @Input()
  hatList?: Hat[];
  @Input()
  kusurListLoaded = false;
  @Input()
  hatListLoaded = false;
  @Input()
  kusurList: KusurKoduKayit[];
  @Input()
  selectedKusur: KusurKoduKayit;
  @Input()
  kusurKtlgViewList: KusurKatalogView[];
  @Input()
  kusurKtlgViewListLoaded = false;

  constructor(public facade: Kk8102Facade) {}
}

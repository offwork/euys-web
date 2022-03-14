import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UpYupBazAna, YupBazDetayModel } from '@euys/api-interfaces';
import { find, get, range, sumBy } from 'lodash';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { Up3002Facade } from '../+state/up-3002.facade';
import { BazAnaBilgilerFacade } from '../../shared/baz-ana-bilgiler/+state/baz-ana-bilgiler.facade';

@Component({
  selector: 'euys-up3002',
  templateUrl: './up-3002.component.html',
})
export class Up3002Component implements OnInit {
  planliDuruslar$ = this.facade.planliDuruslar$;
  planliDuruslarLoading$ = this.facade.planliDuruslarLoading$;
  planliDuruslarTesisAdlari$ = this.facade.planliDuruslarTesisAdlari$;

  uretimHatlari$ = this.facade.uretimHatlari$;
  uretimHatlariLoading$ = this.facade.uretimHatlariLoading$;
  uretimHatlariTesisAdlari$ = this.facade.uretimHatlariTesisAdlari$;

  bazAnaBilgiList$ = this.bazAnaBilgileriFacade.bazAnaBilgiList$;
  loading$ = this.bazAnaBilgileriFacade.loading$;

  yilControl = new FormControl();
  detailVisible = false;
  aylar = range(1, 13);
  _endSubscription = new Subject<boolean>();

  constructor(
    private bazAnaBilgileriFacade: BazAnaBilgilerFacade,
    private facade: Up3002Facade
  ) {
    this.bazAnaBilgileriFacade.init();
  }

  ngOnInit() {
    this.yilControl.valueChanges
      .pipe(filter(Boolean), takeUntil(this._endSubscription))
      .subscribe(yil => {
        this.bazAnaBilgileriFacade.filter(yil as string);
      });

    this.yilControl.setValue(String(new Date().getFullYear()));
  }

  showDetail(bazAnaBilgi: UpYupBazAna) {
    this.detailVisible = true;
    this.facade.getPlanliDuruslar(bazAnaBilgi.id);
    this.facade.getUretimHedefleri(bazAnaBilgi.id);
  }

  findTesis(rows: YupBazDetayModel[], tesis: string, _ay: number) {
    return find(
      rows,
      ({ hatTesisAdi, ay }) => hatTesisAdi === tesis && Number(ay) === _ay
    );
  }

  getValue(rows: YupBazDetayModel[], tesis: string, ay: number, key: string) {
    return get(this.findTesis(rows, tesis, ay), key, 0);
  }

  getAciklama(rows: YupBazDetayModel[], tesis: string, ay: number) {
    return get(this.findTesis(rows, tesis, ay), 'durusAciklama', '');
  }

  getRowTotal(rows: YupBazDetayModel[], tesis: string, key: string) {
    return sumBy(
      rows.filter(({ hatTesisAdi }) => hatTesisAdi === tesis),
      key
    );
  }
}

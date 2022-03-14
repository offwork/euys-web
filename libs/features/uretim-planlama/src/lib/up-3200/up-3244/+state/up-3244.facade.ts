import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as Up3244Actions from './up-3244.actions';
import * as Up3244Selectors from './up-3244.selectors';

@Injectable()
export class Up3244Facade {
  imalatLotunHikayesiList$ = this.store.pipe(
    select(Up3244Selectors.getImalatLotunHikayesiList)
  );

  constructor(private readonly store: Store) {}

  init() {
    this.store.dispatch(Up3244Actions.init());
  }

  load(imalatLotNo: string, islemTipi: string) {
    this.store.dispatch(
      Up3244Actions.loadImalatLotunHikayesiList({ imalatLotNo, islemTipi })
    );
  }
}

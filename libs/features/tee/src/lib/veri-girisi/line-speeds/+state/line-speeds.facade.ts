import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as LineSpeedsActions from './line-speeds.actions';
import * as LineSpeedsSelectors from './line-speeds.selectors';

@Injectable()
export class LineSpeedsFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(LineSpeedsSelectors.getLineSpeedsLoaded));
  lines$ = this.store.pipe(select(LineSpeedsSelectors.getLines));
  downloaded$ = this.store.pipe(
    select(LineSpeedsSelectors.getLineSpeedsDownloaded)
  );
  /* lines$ = this.store.pipe(
    select((state) => state),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    pluck('config'),
    map(({ lines }: AppConfiguration) => lines.filter((value) => Number(value.hatKodu) > 100))
  ); */

  constructor(private store: Store) {}

  loadLines() {
    this.store.dispatch(LineSpeedsActions.linesRequestLoad());
  }

  uploadFile(file: File, line: string) {
    this.store.dispatch(LineSpeedsActions.uploadRequested({ file, line }));
  }

  downloadFile(line: string) {
    this.store.dispatch(LineSpeedsActions.downloadFile({ line }));
  }
}

import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1258Actions from './kt-1258.actions';
import { Kt1258Effects } from './kt-1258.effects';

describe('Kt1258Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1258Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1258Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1258Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1258Actions.init() });

      const expected = hot('-a-|', { a: Kt1258Actions.loadKt1258Success({ kt1258: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

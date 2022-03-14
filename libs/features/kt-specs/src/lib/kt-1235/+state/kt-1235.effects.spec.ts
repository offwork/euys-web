import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1235Actions from './kt-1235.actions';
import { Kt1235Effects } from './kt-1235.effects';

describe('Kt1235Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1235Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1235Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1235Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1235Actions.init() });

      const expected = hot('-a-|', { a: Kt1235Actions.loadKt1235Success({ kt1235: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

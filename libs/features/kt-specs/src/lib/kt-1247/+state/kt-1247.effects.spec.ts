import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1247Actions from './kt-1247.actions';
import { Kt1247Effects } from './kt-1247.effects';

describe('Kt1247Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1247Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1247Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1247Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1247Actions.init() });

      const expected = hot('-a-|', { a: Kt1247Actions.loadKt1247Success({ kt1247: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

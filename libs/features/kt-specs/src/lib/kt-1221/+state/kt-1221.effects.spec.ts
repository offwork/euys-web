import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1221Actions from './kt-1221.actions';
import { Kt1221Effects } from './kt-1221.effects';

describe('Kt1221Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1221Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1221Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1221Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1221Actions.init() });

      const expected = hot('-a-|', { a: Kt1221Actions.loadKt1221Success({ kt1221: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

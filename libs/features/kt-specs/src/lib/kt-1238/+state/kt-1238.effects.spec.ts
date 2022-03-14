import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1238Actions from './kt-1238.actions';
import { Kt1238Effects } from './kt-1238.effects';

describe('Kt1238Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1238Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1238Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1238Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1238Actions.init() });

      const expected = hot('-a-|', { a: Kt1238Actions.loadKt1238Success({ kt1238: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

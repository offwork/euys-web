import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1253Actions from './kt-1253.actions';
import { Kt1253Effects } from './kt-1253.effects';

describe('Kt1253Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1253Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1253Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1253Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1253Actions.init() });

      const expected = hot('-a-|', { a: Kt1253Actions.loadKt1253Success({ kt1253: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

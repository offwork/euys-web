import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1222Actions from './kt-1222.actions';
import { Kt1222Effects } from './kt-1222.effects';

describe('Kt1222Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1222Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1222Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1222Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1222Actions.init() });

      const expected = hot('-a-|', { a: Kt1222Actions.loadKt1222Success({ kt1222: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

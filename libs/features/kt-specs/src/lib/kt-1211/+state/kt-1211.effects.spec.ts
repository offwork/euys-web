import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1211Actions from './kt-1211.actions';
import { Kt1211Effects } from './kt-1211.effects';

describe('Kt1211Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1211Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1211Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1211Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1211Actions.init() });

      const expected = hot('-a-|', { a: Kt1211Actions.loadKt1211Success({ kt1211: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

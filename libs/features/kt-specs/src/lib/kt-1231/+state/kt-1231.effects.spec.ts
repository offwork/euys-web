import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1231Actions from './kt-1231.actions';
import { Kt1231Effects } from './kt-1231.effects';

describe('Kt1231Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1231Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1231Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1231Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1231Actions.init() });

      const expected = hot('-a-|', { a: Kt1231Actions.loadKt1231Success({ kt1231: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

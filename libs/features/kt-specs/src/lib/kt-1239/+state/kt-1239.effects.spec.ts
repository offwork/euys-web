import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1239Actions from './kt-1239.actions';
import { Kt1239Effects } from './kt-1239.effects';

describe('Kt1239Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1239Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1239Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1239Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1239Actions.init() });

      const expected = hot('-a-|', { a: Kt1239Actions.loadKt1239Success({ kt1239: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

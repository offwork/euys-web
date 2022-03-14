import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1236Actions from './kt-1236.actions';
import { Kt1236Effects } from './kt-1236.effects';

describe('Kt1236Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1236Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1236Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1236Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1236Actions.init() });

      const expected = hot('-a-|', { a: Kt1236Actions.loadKt1236Success({ kt1236: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

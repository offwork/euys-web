import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1254Actions from './kt-1254.actions';
import { Kt1254Effects } from './kt-1254.effects';

describe('Kt1254Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1254Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1254Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1254Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1254Actions.init() });

      const expected = hot('-a-|', { a: Kt1254Actions.loadKt1254Success({ kt1254: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

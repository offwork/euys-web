import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1234Actions from './kt-1234.actions';
import { Kt1234Effects } from './kt-1234.effects';

describe('Kt1234Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1234Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [Kt1234Effects, provideMockActions(() => actions), provideMockStore()],
    });

    effects = TestBed.inject(Kt1234Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1234Actions.init() });

      const expected = hot('-a-|', { a: Kt1234Actions.loadKt1234Success({ kt1234: [] }) });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

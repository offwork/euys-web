import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1330Actions from './kt-1330.actions';
import { Kt1330Effects } from './kt-1330.effects';

describe('Kt1330Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1330Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Kt1330Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Kt1330Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1330Actions.init() });

      const expected = hot('-a-|', {
        a: Kt1330Actions.loadKt1330Success({ kt1331: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

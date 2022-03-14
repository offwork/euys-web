import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1341Actions from './kt-1341.actions';
import { Kt1341Effects } from './kt-1341.effects';

describe('Kt1341Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1341Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Kt1341Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Kt1341Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1341Actions.init() });

      const expected = hot('-a-|', {
        a: Kt1341Actions.loadKt1341Success({ kt1341: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1362Actions from './kt-1362.actions';
import { Kt1362Effects } from './kt-1362.effects';

describe('Kt1362Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1362Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Kt1362Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Kt1362Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1362Actions.init() });

      const expected = hot('-a-|', {
        a: Kt1362Actions.loadKt1362Success({ kt1362: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

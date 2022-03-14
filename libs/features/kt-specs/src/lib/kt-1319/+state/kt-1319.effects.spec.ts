import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1319Actions from './kt-1319.actions';
import { Kt1319Effects } from './kt-1319.effects';

describe('Kt1319Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1319Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Kt1319Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Kt1319Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1319Actions.init() });

      const expected = hot('-a-|', {
        a: Kt1319Actions.loadKt1319Success({ kt1319: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

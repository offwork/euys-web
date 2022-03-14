import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1364Actions from './kt-1364.actions';
import { Kt1364Effects } from './kt-1364.effects';

describe('Kt1364Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1364Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Kt1364Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Kt1364Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1364Actions.init() });

      const expected = hot('-a-|', {
        a: Kt1364Actions.loadKt1364Success({ kt1364: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1260Actions from './kt-1260.actions';
import { Kt1260Effects } from './kt-1260.effects';

describe('Kt1260Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1260Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Kt1260Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Kt1260Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1260Actions.init() });

      const expected = hot('-a-|', {
        a: Kt1260Actions.loadKt1260Success({ kt1260: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

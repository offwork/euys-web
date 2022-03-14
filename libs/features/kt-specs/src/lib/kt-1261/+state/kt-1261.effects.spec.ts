import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1261Actions from './kt-1261.actions';
import { Kt1261Effects } from './kt-1261.effects';

describe('Kt1261Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1261Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Kt1261Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Kt1261Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1261Actions.init() });

      const expected = hot('-a-|', {
        a: Kt1261Actions.loadKt1261Success({ kt1261: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

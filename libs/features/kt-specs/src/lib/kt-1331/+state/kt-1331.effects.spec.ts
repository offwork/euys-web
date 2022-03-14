import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1331Actions from './kt-1331.actions';
import { Kt1331Effects } from './kt-1331.effects';

describe('Kt1331Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1331Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Kt1331Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Kt1331Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1331Actions.init() });

      const expected = hot('-a-|', {
        a: Kt1331Actions.loadKt1331Success({ kt1331: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

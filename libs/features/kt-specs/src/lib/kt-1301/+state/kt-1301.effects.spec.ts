import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1301Actions from './kt-1301.actions';
import { Kt1301Effects } from './kt-1301.effects';

describe('Kt1301Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1301Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Kt1301Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Kt1301Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1301Actions.init() });

      const expected = hot('-a-|', {
        a: Kt1301Actions.loadKt1301Success({ kt1301: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

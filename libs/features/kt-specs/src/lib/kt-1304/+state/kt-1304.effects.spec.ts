import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1304Actions from './kt-1304.actions';
import { Kt1304Effects } from './kt-1304.effects';

describe('Kt1304Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1304Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Kt1304Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Kt1304Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1304Actions.init() });

      const expected = hot('-a-|', {
        a: Kt1304Actions.loadKt1304Success({ kt1304: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

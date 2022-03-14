import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1340Actions from './kt-1340.actions';
import { Kt1340Effects } from './kt-1340.effects';

describe('Kt1340Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1340Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Kt1340Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Kt1340Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1340Actions.init() });

      const expected = hot('-a-|', {
        a: Kt1340Actions.loadKt1340Success({ kt1340: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

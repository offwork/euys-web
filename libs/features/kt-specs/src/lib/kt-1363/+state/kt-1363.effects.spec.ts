import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1363Actions from './kt-1363.actions';
import { Kt1363Effects } from './kt-1363.effects';

describe('Kt1363Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1363Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Kt1363Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Kt1363Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1363Actions.init() });

      const expected = hot('-a-|', {
        a: Kt1363Actions.loadKt1363Success({ kt1363: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

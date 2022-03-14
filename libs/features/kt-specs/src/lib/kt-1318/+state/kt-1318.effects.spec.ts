import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1318Actions from './kt-1318.actions';
import { Kt1318Effects } from './kt-1318.effects';

describe('Kt1318Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1318Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Kt1318Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Kt1318Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1318Actions.init() });

      const expected = hot('-a-|', {
        a: Kt1318Actions.loadKt1318Success({ kt1318: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

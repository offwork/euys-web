import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1314Actions from './kt-1314.actions';
import { Kt1314Effects } from './kt-1314.effects';

describe('Kt1314Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1314Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Kt1314Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Kt1314Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1314Actions.init() });

      const expected = hot('-a-|', {
        a: Kt1314Actions.loadKt1314Success({ kt1314: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1312Actions from './kt-1312.actions';
import { Kt1312Effects } from './kt-1312.effects';

describe('Kt1312Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1312Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Kt1312Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Kt1312Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1312Actions.init() });

      const expected = hot('-a-|', {
        a: Kt1312Actions.loadKt1312Success({ kt1312: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

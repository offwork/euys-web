import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1303Actions from './kt-1303.actions';
import { Kt1303Effects } from './kt-1303.effects';

describe('Kt1303Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1303Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Kt1303Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Kt1303Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1303Actions.init() });

      const expected = hot('-a-|', {
        a: Kt1303Actions.loadKt1303Success({ kt1303: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1307Actions from './kt-1307.actions';
import { Kt1307Effects } from './kt-1307.effects';

describe('Kt1307Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1307Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Kt1307Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Kt1307Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1307Actions.init() });

      const expected = hot('-a-|', {
        a: Kt1307Actions.loadKt1307Success({ kt1307: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

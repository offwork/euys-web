import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1302Actions from './kt-1302.actions';
import { Kt1302Effects } from './kt-1302.effects';

describe('Kt1302Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1302Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Kt1302Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Kt1302Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1302Actions.init() });

      const expected = hot('-a-|', {
        a: Kt1302Actions.loadKt1302Success({ kt1302: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

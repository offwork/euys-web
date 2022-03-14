import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kt1315Actions from './kt-1315.actions';
import { Kt1315Effects } from './kt-1315.effects';

describe('Kt1315Effects', () => {
  let actions: Observable<Action>;
  let effects: Kt1315Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Kt1315Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Kt1315Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kt1315Actions.init() });

      const expected = hot('-a-|', {
        a: Kt1315Actions.loadKt1315Success({ kt1315: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});

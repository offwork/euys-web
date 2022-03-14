import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as Kk8102Actions from './kk-8102.actions';
import { Kk8102Effects } from './kk-8102.effects';

describe('Kk8102Effects', () => {
  let actions: Observable<Action>;
  let effects: Kk8102Effects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        Kk8102Effects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(Kk8102Effects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: Kk8102Actions.init() });

      const expected = hot('-a-|', {
        a: Kk8102Actions.loadKk8102Success({ kk8102: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
